import React, { useState } from 'react';
import app_config from '../../config';
import Swal from 'sweetalert2';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const { apiUrl } = app_config;

  const [responseLoading, setResponseLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [generatedCode, setGeneratedCode] = useState('');

  const [generatedHTML, setGeneratedHTML] = useState('');

  const extractContentCode = (content) => {
    const htmlRegex = /<!DOCTYPE html>([\s\S]*?)<\/html>/i;
    const htmlMatchesCode = content.match(htmlRegex);
    console.log(htmlMatchesCode);
    if (htmlMatchesCode) {
      console.log('code works');
      const htmlCode = '<!DOCTYPE html>\n' + (htmlMatchesCode ? htmlMatchesCode[1].trim() : '') + '\n</html>';
      // Regular expression to extract CSS code
      const cssRegex = /body\s*{([\s\S]*?)\}```/i;
      const cssMatches = content.match(cssRegex);
      const cssCode = cssMatches ? cssMatches[1].trim() : '';
      console.log(htmlCode);
      setGeneratedHTML(htmlCode);
      console.log(cssCode);
      return { htmlCode, cssCode };
    }

    // const htmlRegex2 = /HTML Structure:(.*?)CSS Structure:/s;
    // const htmlMatchesStructure = content.match(htmlRegex2);
    // console.log(htmlMatchesStructure);
    // if (htmlMatchesStructure) {
    //   console.log('structure works');
    //   const htmlCode = htmlMatchesStructure ? htmlMatchesStructure[1].trim() : '';
    //   // Regular expression to extract CSS code
    //   const cssRegex = /CSS Structure:(.*)/s;
    //   const cssMatches = content.match(cssRegex);
    //   const cssCode = cssMatches ? cssMatches[1].trim() : '';
    //   console.log(htmlCode);
    //   console.log(cssCode);
    //   return { htmlCode, cssCode };
    // }
  };

  const saveCode = async (code) => {
    const response = await fetch(apiUrl + '/code/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `generate html, css, and js code for ${prompt}`,
        code: code,
        user: currentUser._id,
        createdAt: new Date()
      })
    });
    const data = await response.json();
    console.log(data);

    Swal.fire({
      icon: 'success',
      title: 'Code Saved Successfully',
      showConfirmButton: false
    });
  };

  const generateCode = async () => {
    // saveCode('sdsdsd');
    // return;
    setResponseLoading(true);
    const response = await fetch(apiUrl + '/code/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `generate html, css, and js code to ${prompt}, styling should be included in html code`
      })
    });
    console.log(response.status);
    if(response.status === 200){
      const data = await response.json();
      // saveCode(data);
      console.log(data);
      setResponseLoading(false);
      setGeneratedCode(data.code.content);
      extractContentCode(data.code.content);
    }else{
      setResponseLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.'
      });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ minHeight: '70vh' }}>
              <div className="card-header">Generated Code</div>
              <div className="card-body">
                <textarea className="form-control" rows="20" value={generatedCode} onChange={(e) => setGeneratedCode(e.target.value)}></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ minHeight: '100%' }}>
              <div className="card-header">Output</div>
              <div className="card-body">{generatedCode && <iframe srcDoc={generatedHTML} style={{ width: '100%', height: '70vh' }}></iframe>}</div>
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
