import React, { useState } from 'react';
import app_config from '../../config';
import Swal from 'sweetalert2';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const { apiUrl } = app_config;

  const [responseLoading, setResponseLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [generatedCode, setGeneratedCode] = useState('');

  const extractContentCode = (content) => {
    const htmlRegex = /HTML Structure:(.*?)CSS Structure:/s;
    const htmlMatches = content.match(htmlRegex);
    const htmlCode = htmlMatches ? htmlMatches[1].trim() : '';
    console.log(htmlMatches);
    // Regular expression to extract CSS code
    const cssRegex = /CSS Structure:(.*)/s;
    const cssMatches = content.match(cssRegex);
    const cssCode = cssMatches ? cssMatches[1].trim() : '';

    console.log('HTML code:');
    console.log(htmlCode);

    console.log('CSS code:');
    console.log(cssCode);
  };

  const saveCode = async (code) => {
    const response = await fetch(apiUrl + '/code/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `generate html, css, and js code to ${prompt}`,
        code: code,
        user : currentUser._id,
        createdAt: new Date()
      })
    });
    const data = await response.json();
    console.log(data);

    Swal.fire({
      icon: 'success',
      title: 'Code Saved Successfully',
      showConfirmButton: false,
    })
  }

  const generateCode = async () => {
    setResponseLoading(true);
    const response = await fetch(apiUrl + '/code/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `generate html, css, and js code to ${prompt}`
      })
    });
    const data = await response.json();
    // saveCode(data);
    console.log(data);
    setResponseLoading(false);
    setGeneratedCode(data.code.content);
    extractContentCode(data.code.content);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ minHeight: '70vh' }}>
              <div className="card-header">Generated Code</div>
              <div className="card-body">
                <textarea className="form-control" rows="20" value={generatedCode} onChange={e => setGeneratedCode(e.target.value)}></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ minHeight: '100%' }}>
              <div className="card-header">Output</div>
              <div className="card-body">{generatedCode && <iframe srcDoc={generatedCode} style={{ width: '100%', height: '70vh' }}></iframe>}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Enter Prompt</div>
          <div className="card-body">
            <textarea onChange={(e) => setPrompt(e.target.value)} className="form-control" rows="4"></textarea>
            <button className="btn btn-primary mt-3" onClick={generateCode}>
              {responseLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="ml-2">Generating Code...</span>
                </>
              ) : (
                'Generate'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerator;
