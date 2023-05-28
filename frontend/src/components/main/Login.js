import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserProvider';
import app_config from '../../config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setLoggedIn } = useUserContext();
  const url = app_config.apiUrl;
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }
      });

      if (res.status === 200) {
        const data = await res.json();
        // console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Loged in Successfully'
        });
        setLoggedIn(true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/codegenerator');
        }
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid Credentials'
        });
      }
    }
  });

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img src="/login.gif" className="img-fluid" alt="Phone image" style={{ width: '100%' }} />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form onSubmit={loginForm.handleSubmit}>
                    {/* Email input */}
                    <div className=" mb-4">
                      <input type="email" id="email" onChange={loginForm.handleChange} value={loginForm.values.email} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form1Example13">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="mb-4">
                      <input type="password" id="password" onChange={loginForm.handleChange} value={loginForm.values.password} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form1Example23">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="form1Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>
                    <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                      <i className="fab fa-facebook-f me-2" />
                      Continue with Facebook
                    </a>
                    <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                      <i className="fab fa-twitter me-2" />
                      Continue with Twitter
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
