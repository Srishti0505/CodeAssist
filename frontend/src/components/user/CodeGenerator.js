import React, { useState } from 'react';
import app_config from '../../config';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const { apiUrl } = app_config;

  const [generatedCode, setGeneratedCode] = useState('');

  const generateCode = async () => {
    const response = await fetch(apiUrl + '/code/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: prompt
      })
    });
    const data = await response.json();
    console.log(data);
    setGeneratedCode(data.code.content);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ minHeight: '70vh' }}>
              <div className="card-header">Generated Code</div>
              <div className="card-body">
                <textarea className="form-control" rows="20" value={generatedCode}></textarea>
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
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerator;
