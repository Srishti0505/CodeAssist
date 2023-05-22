import React from 'react'
import './Aboutus.css';

const Aboutus = () => {

    

    return (
        <>
            <div>Aboutus</div>
            <title>CodeAssist:: Home</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="css/style.css" />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"
            />
            <header>
                <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white">
                    <a className="navbar-brand mb-0 h1" href="index.html" title="Home PAge">
                        CodeAssist
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="aboutUs.html">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item dropdown">


                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contactUs.html">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <section className="background jumbotron" id="jumbotron">
                    <div className="container">


                    </div>
                </section>

                <section className="banner">

                </section>
                <section className="travelOptions">
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <h3>About us</h3>
                            <p>
                                Coding for Beginners and non-technical background people.

                                Coding requires a lot of experience and time to learn. It cannot be taught in one day, but with the help of AI one can learn coding faster and program large application in lesser time.

                                Our Project is aimed to help students and developers for their coding tasks. It will help programmers to solve their coding problems quickly.
                            </p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img
                                            className="card-img-top"
                                            alt="Bangkok Picture"
                                            style={{ height: 225, width: "100%", display: "block" }}
                                            src="https://i.imgur.com/q2BxhmQ.jpg"
                                            data-holder-rendered="true"
                                        />
                                        <div className="card-body">
                                            <h6> Thailand - Two Weeks</h6>
                                            <p className="card-text">
                                                {" "}
                                                Two weeks is a short time to explore Thailand to the
                                                fullest. However this itinerary is crafted to give you a
                                                good grasp of the entire country while keeping the logistics
                                                as easy as possible.
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a
                                                    href="thailand.html"
                                                    role="button"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    More Information
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img
                                            className="card-img-top"
                                            alt="Sydney Picture"
                                            style={{ height: 225, width: "100%", display: "block" }}
                                            src="https://i.imgur.com/i2QFDZ5.jpg"
                                            data-holder-rendered="true"
                                        />
                                        <div className="card-body">
                                            <h6>Austalia - Three Weeks</h6>
                                            <p className="card-text">
                                                {" "}
                                                Australia is a vast country, nearly as big as the USA, so,
                                                this intinerary includes visiting Australia’s two best
                                                cities: Sydney and Melbourne, the Great Barrier Reef, the
                                                Outback and the Great Ocean Road.
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a
                                                    href="australia.html"
                                                    role="button"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    More Information
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img
                                            className="card-img-top"
                                            alt="Koh Phi Phi Picture"
                                            style={{ height: 225, width: "100%", display: "block" }}
                                            src="https://i.imgur.com/ch1BSld.jpg"
                                            data-holder-rendered="true"
                                        />
                                        <div className="card-body">
                                            <h6>Asia - Four Weeks</h6>
                                            <p className="card-text">
                                                {" "}
                                                This trip package includes visiting 4 countries in South
                                                Asia: Vietnam, Cambodia, Philippines and Thailand, spending
                                                roughly a week on each of them. Get ready to know the beauty
                                                of Asia.{" "}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a
                                                    href="asia.html"
                                                    role="button"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    More Information
                                                </a>
                                            </div>
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
                                    <div className="carousel-inner">
                                        <div className="item carousel-item active">
                                            <div className="img-box">
                                                <img
                                                    src="/image/11.jpg"

                                                />
                                            </div>
                                            <p className="Our Team Member">
                                                Srishti Srivastava
                                            </p>

                                        </div>
                                        <div className="item carousel-item">
                                            <div className="img-box">
                                                <img
                                                    src="/image/ranu img.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            Ranu Singh
                                            <p />
                                            <p className="overview">
                                                <b>David Jones</b>, Web Developer
                                            </p>
                                        </div>
                                        <div className="item carousel-item">
                                            <div className="img-box">
                                                <img
                                                    src="https://i.imgur.com/lnwVigE.jpg"
                                                    alt="Mandy Hutzz's picture"
                                                />
                                            </div>
                                            <p className="testimonial">
                                                Thanks again for all you help. Everything was prefect. Even
                                                my concern with only an hour between connecting flights
                                                worked out ok, we walked off one plane and on to the next.
                                                Please don't hesitate to recommend Orient travel to your
                                                clients. This was our second trip with them and they are
                                                true professionals. Thanks again. You always make us feel
                                                safe in traveling..
                                            </p>
                                            <p className="overview">
                                                <b>Mandy Hutzz</b>, Designer
                                            </p>
                                        </div>
                                    </div>
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

    )
};

export default Aboutus