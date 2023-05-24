import React, { useEffect } from "react";

const GenerateCode = () => {

  const getPromptCode = async () => {
    const res = await fetch("http://localhost:5000/code/generate", {
      method : "POST"
    });

    console.log(res.status);

    const data = await res.json();

    console.log(data);
  }
  

  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-2" style={{height: '70vh'}}>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header">
                <h4>Generated Code</h4>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card h-100">
              <div className="card-header">
                <h4>Output</h4>
              </div>
              <div className="card-body">

              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{height: '20vh'}}>
          <div className="card-body">
            <textarea name="" id="" cols="30" rows="30"></textarea>
            <button className="btn btn-primary" onClick={getPromptCode}>Generate Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateCode;
