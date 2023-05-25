import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
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

      if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loged in Successfully"
        })
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid Credentials"
        })
      }

    },
  });

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="card py-3 px-3 w-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">


              <img
                src="/image/giflogin.svg"
                className="img-fluid"
                alt="image not found"
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* Email input */}
                <div className=" mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"

                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  onchange={loginForm.handleChange}
                  value={loginForm.values.password}
                  Sign in
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <div >
                  <a
                    className="btn btn-primary btn-lg btn-block my-3"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2" />
                    Continue with Facebook
                  </a>
                </div>
                <div>
                  <a
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                    type="submit"
                  >
                    <i className="fab fa-twitter me-2" />
                    Continue with Twitter
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;
