import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Signup = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const signupform=useFormik({

    initialValues:{
        name :'',
        email :'',  
        password:'',
        cPassword :'',
},
    onSubmit:( values ) =>{console.log(values);}
});




  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form className="mx-1 mx-md-4" onSubmit={signupform.handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="text"
                          id="name"
                          value={signupform.values.name}
                          onChange={signupform.handleChange}
                          className="form-control"
                          placeholder="Your Name"
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="email"
                          id="email"
                          value={signupform.values.email}
                          onChange={signupform.handleChange}
                          className="form-control"
                          placeholder="Email Address"
                        />
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="flex-fill mb-0">
                        <input
                          type="password"
                          id="Password"
                          value={signupform.values.Password}
                          onchange={signupform.handleChange}
                          className="form-control"
                          placeholder="Password"
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className=" flex-fill mb-0">
                        <input
                          type="password"
                          id="cPassword"
                          value={signupform.values.cpassword}
                          onChange={signupform.handleChange}
                          className="form-control"
                          placeholder="confirm password"
                        />
                        
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="Submit" className="btn btn-primary btn-lg">
                        
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                    style={{width:"100%"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Signup