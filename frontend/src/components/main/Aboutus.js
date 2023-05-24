import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <main>
        <section className="travelOptions">
          <div className="album py-5 bg-light">
            <div className="container">
              <h3>About us</h3>
              <p>
                Coding for Beginners and non-technical background people. Coding
                requires a lot of experience and time to learn. It cannot be
                taught in one day, but with the help of AI one can learn coding
                faster and program large application in lesser time. Our Project
                is aimed to help students and developers for their coding tasks.
                It will help programmers to solve their coding problems quickly.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      alt="Bangkok Picture"
                      style={{ height: 225, width: "100%", display: "block" }}
                      src="/code gen gif.gif"
                      data-holder-rendered="true"
                    />
                    <div className="card-body">
                      <h6> GENERATE CODE</h6>
                      <p className="card-text">
                        {" "}
                        "CODE ASSIST " is a project aimed at providing
                        assistance to developers in their coding task.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      alt="Sydney Picture"
                      style={{ height: 225, width: "100%", display: "block" }}
                      src="/output gif.webp"
                      data-holder-rendered="true"
                    />
                    <div className="card-body">
                      <h6>OUTPUT</h6>
                      <p className="card-text">
                        {" "}
                        It provide the output on the same page.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      alt="Koh Phi Phi Picture"
                      style={{ height: 225, width: "100%", display: "block" }}
                      src="/find error gif.gif"
                      data-holder-rendered="true"
                    />
                    <div className="card-body">
                      <h6>FIND ERRORS</h6>
                      <p className="card-text">
                        {" "}
                        The system will be able to analyse code syntax, error
                        and bugs and also generate code based on the
                        requirements.{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h3>Our Team Members</h3>
                <div
                  id="myCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>
                  <a
                    className="carousel-control left carousel-control-prev"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" />
                  </a>
                  <a
                    className="carousel-control right carousel-control-next"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <ul>
            <li>
              <a href="http://www.facebook.com" alt="Facebook Page">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" alt="Twitter Page">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com" alt="Instagram Page">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
};

export default Aboutus;
