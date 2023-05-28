import React, { useEffect, useState } from 'react';
import app_config from '../../config';

const ManageCodes = () => {
  const { apiUrl } = app_config;
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [codeList, setCodeList] = useState([]);

  const [selCode, setSelCode] = useState(null);

  const getUserCodes = async () => {
    const res = await fetch(`${apiUrl}/code/getbyuser/${currentUser._id}`);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setCodeList(data);
  };

  useEffect(() => {
    getUserCodes();
  }, []);

  const displayCodes = () => {
    return codeList.map((code) => {
      return (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title text-dark">{code.prompt}</h5>
            <h5 className="card-title text-dark">{new Date(code.createdAt).toLocaleDateString()}</h5>
            {/* <p className="card-text text-dark">{code.description}</p> */}
            <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal" onClick={(e) => setSelCode(code)}>
              Launch demo modal
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selCode && selCode.prompt}
              </h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">{selCode && <textarea className='form-control' value={selCode.code}></textarea>}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="py-5">
        <div className="container">
          <h1 className="text-center display-4 fw-bold">Generated Codes</h1>
        </div>
      </header>
      <section>
        <div className="container">{displayCodes()}</div>
      </section>
    </div>
  );
};

export default ManageCodes;
