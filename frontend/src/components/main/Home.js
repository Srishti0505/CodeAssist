import React from 'react';
import './Home.css';

const Home = () => {
  return (
    
  <>
  <header className="site-header" role="banner">
    <div className="topbar">
      <h1 className="site-title">
        <a href="#">
          {/* Logo begin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="0"
            width="0"
            viewBox="0 323.8 2626.7 304.20002"
            className="logo-small"
          >
            <defs>
              <radialGradient
                gradientUnits="userSpaceOnUse"
                r="152.094"
                fy="475.972"
                fx="2412.87"
                cy="475.972"
                cx="2412.87"
                id="b"
                xlinkHref="#a"
                gradientTransform="translate(4.02)"
              />
              <linearGradient id="a">
                <stop offset={0} stopColor="#fff" />
                <stop offset="0.2" stopColor="#f7c553" stopOpacity="0.8" />
                <stop offset="0.7" stopColor="#f7c553" stopOpacity="0.7" />
                <stop offset={1} stopColor="#f7c553" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path
              d="M35.1 418.5h-23c-8 0-12.1-3.4-12.1-10.3s4-10.3 12.1-10.3h23v-20.1c0-35 17.8-52.2 53.4-52.2 14.3 0 26.4 2.9 36.2 8 12.1 7.5 18.4 18.4 18.4 32.1 0 9.2-3.4 13.2-10.3 13.2-4.6 0-8.6-2.9-10.9-8-2.9-9.2-5.7-14.3-7.5-16.6-4-5.2-12.6-8-25.3-8-21.8 0-32.1 10.9-32.1 32.1v19.5h41.9c9.2 0 13.8 3.4 13.8 10.3s-4.6 10.3-13.8 10.3h-42v131.4c0 8-3.4 12.1-10.3 12.1s-10.3-4-10.3-12.1V418.5h-1.2zM221.6 538.4V418.5h-31c-8.6 0-12.6-3.4-12.6-10.3s4-10.3 12.6-10.3h41.3c6.9 0 10.9 6.3 10.9 17.8 12.6-13.8 26.4-21.2 40.7-21.2 12.1 0 21.2 3.4 28.1 10.9 6.9 7.5 10.3 17.2 10.3 28.7 0 8-3.4 12.1-10.3 12.1-4 0-6.9-2.9-8.6-8-2.9-9.8-4.6-14.9-5.2-15.5-2.9-5.2-8.6-8-16.1-8-8 0-15.5 2.9-22.4 8.6-4 2.9-9.8 9.2-17.2 18.4v95.8h39c8.6 0 12.6 3.4 12.6 9.8 0 6.9-4 10.9-12.6 10.9h-91.2c-8.6 0-12.6-3.4-12.6-10.3s4-10.3 12.6-10.3h31.6v.8zM378.2 482.2v23c0 24.7 17.2 36.7 52.2 36.7 12.6 0 23-1.1 31-4 4-1.1 11.5-5.2 21.2-12.1 6.3-5.7 10.9-8.6 12.6-8.6 5.7 0 8.6 2.9 8.6 9.2 0 6.3-4 12.6-12.6 19.5-13.8 10.9-34.4 16.6-62 16.6-48.2 0-72.3-18.9-72.3-56.8v-57.4c0-13.2 5.2-24.7 14.9-33.9 13.2-12.6 32.7-18.4 59.1-18.4 47.1 0 70.6 23.5 70.6 70 0 11.5-4.6 17.2-13.2 17.2H378.2v-1zm0-20.7h102.7c0-31-17.2-46.5-52.2-46.5-12.6 0-24.1 2.9-34.4 8.6-10.3 7.5-16.1 16.1-16.1 25.8v12.1zM558.4 482.2v23c0 24.7 17.2 36.7 52.2 36.7 12.6 0 23-1.1 31-4 4-1.1 11.5-5.2 21.2-12.1 6.3-5.7 10.9-8.6 12.6-8.6 5.7 0 8.6 2.9 8.6 9.2 0 6.3-4 12.6-12.6 19.5-13.8 10.9-34.4 16.6-62 16.6-48.2 0-72.3-18.9-72.3-56.8v-57.4c0-13.2 5.2-24.7 14.9-33.9 13.2-12.6 32.7-18.4 59.1-18.4 47.1 0 70.6 23.5 70.6 70 0 11.5-4.6 17.2-13.2 17.2H558.4v-1zm0-20.7h102.7c0-31-17.2-46.5-52.2-46.5-12.6 0-24.1 2.9-34.4 8.6-10.9 7.5-16.1 16.1-16.1 25.8v12.1zM719.7 495.4v-89.5c0-47.1 24.7-70 74.6-70 20.1 0 36.2 4.6 48.8 13.2 14.3 10.9 21.2 25.8 21.2 44.2 0 8.6-3.4 13.2-10.9 13.2-5.2 0-8.6-4-10.9-12.6-1.1-6.9-4-13.8-8-20.1-6.3-11.5-20.1-16.6-41.9-16.6-18.4 0-31.6 4.6-39.6 13.8-7.5 8.6-11.5 21.8-11.5 40.7v74.5c0 19.5 4 33.3 12.1 41.9 8.6 9.2 21.8 14.3 40.2 14.3 28.1 0 44.2-9.8 48.2-29.3 1.7-7.5 2.3-10.9 2.3-11.5 1.7-4 4.6-6.3 8.6-6.3 6.9 0 10.9 4.6 10.9 13.2 0 17.8-7.5 31.6-22.4 42.5-12.1 8-27.5 12.1-47.1 12.1-23 0-40.7-5.2-53.9-16.1-13.8-12-20.7-29.2-20.7-51.6zM897.6 508v-59.1c0-36.2 24.1-53.9 72.3-53.9 48.2 0 72.3 17.8 72.3 53.9V508c0 36.2-23.5 53.9-71.2 53.9-49.3 0-73.4-17.7-73.4-53.9zm123.4 0v-59.1c0-22.4-17.2-33.9-52.2-33.9-33.3 0-50.5 11.5-50.5 33.9V508c0 22.4 17.2 33.9 51.6 33.3 34.4 0 51.1-10.9 51.1-33.3zM1200 542.4c-9.8 7.5-18.4 12.1-25.8 14.9-8 2.9-17.8 4.6-29.3 4.6-19.5 0-35-4-47.1-12.1-13.8-9.2-20.7-23-20.7-41.9v-60.3c0-17.8 6.9-31.6 20.1-40.7 11.5-8 27-12.1 45.3-12.1 12.1 0 22.4 1.1 30.4 4s16.6 8 25.8 15.5v-74c0-9.8 3.4-14.9 9.8-14.9 6.9 0 10.9 5.2 10.9 14.9v210.6c0 7.5-3.4 10.9-9.8 10.9-4 0-6.9-2.3-8-6.9-1-3.3-1.6-7.3-1.6-12.5zm-1.1-24.1v-82.6c-10.3-7.5-18.4-12.6-24.7-14.9-8.6-3.4-17.8-5.2-28.1-5.2-13.2 0-24.1 2.3-32.1 7.5-10.3 6.3-15.5 15.5-15.5 27v56.8c0 12.1 5.2 21.2 16.1 27.5 8.6 4.6 19.5 7.5 32.7 7.5 10.9 0 20.7-1.7 28.7-5.2 6.8-4.6 14.3-10.3 22.9-18.4zM1278.1 482.2v23c0 24.7 17.2 36.7 52.2 36.7 12.6 0 23-1.1 31-4 4-1.1 11.5-5.2 21.2-12.1 6.3-5.7 10.9-8.6 12.6-8.6 5.7 0 8.6 2.9 8.6 9.2 0 6.3-4 12.6-12.6 19.5-13.8 10.9-34.4 16.6-62 16.6-48.2 0-72.3-18.9-72.3-56.8v-57.4c0-13.2 5.2-24.7 14.9-33.9 13.2-12.6 32.7-18.4 59.1-18.4 47.1 0 70.6 23.5 70.6 70 0 11.5-4.6 17.2-13.2 17.2H1278l.1-1zm0-20.7h102.7c0-31-17.2-46.5-52.2-46.5-12.6 0-24.1 2.9-34.4 8.6-10.9 7.5-16.1 16.1-16.1 25.8v12.1zM1439.4 495.4v-89.5c0-47.1 24.7-70 74.6-70 20.1 0 36.2 4.6 48.8 13.2 14.3 10.9 21.2 25.8 21.2 44.2 0 8.6-3.4 13.2-10.9 13.2-5.2 0-8.6-4-10.9-12.6-1.1-6.9-4-13.8-8-20.1-6.3-11.5-20.1-16.6-41.9-16.6-18.4 0-31.6 4.6-39.6 13.8-7.5 8.6-11.5 21.8-11.5 40.7v74.5c0 19.5 4 33.3 12.1 41.9 8.6 9.2 21.8 14.3 40.2 14.3 28.1 0 44.2-9.8 48.2-29.3 1.7-7.5 2.3-10.9 2.3-11.5 1.7-4 4.6-6.3 8.6-6.3 6.9 0 10.9 4.6 10.9 13.2 0 17.8-7.5 31.6-22.4 42.5-12.1 8-27.5 12.1-47.1 12.1-23 0-40.7-5.2-53.9-16.1-13.3-12-20.7-29.2-20.7-51.6zM1733.2 542.4c-10.3 7.5-18.4 12.6-24.1 14.9-7.5 2.9-16.6 4.6-28.1 4.6-17.2 0-31.6-3.4-42.5-10.9-12.6-8.6-19.5-21.2-19.5-37.9s6.9-29.8 20.1-39c11.5-8.6 26.4-12.6 43.6-12.6 14.3 0 30.4 3.4 48.8 9.8V446c0-12.1-5.7-20.7-17.2-25.8-8-3.4-17.8-5.2-29.3-5.2-27 0-41.3 7.5-44.2 22.4-1.1 6.9-2.3 10.3-2.3 10.9-1.7 3.4-4.6 5.2-8.6 5.2-7.5 0-11.5-4-11.5-12.1 0-10.9 4-20.7 12.6-29.8 10.3-11.5 29.3-17.2 55.7-17.2 21.2 0 36.7 3.4 47.1 10.3 12.1 8.6 18.4 23 18.4 43v73.5c0 8.6 1.7 14.3 5.2 17.2.6.6 4 2.3 9.8 4.6 3.4 1.7 5.2 4.6 5.2 9.8 0 5.7-2.9 8.6-9.2 8.6-1.7 0-4.6-.6-9.2-2.3-8-2.9-13.2-4.6-14.3-5.2-3.1-1.7-5.4-5.7-6.5-11.5zm-1.2-21.8v-30.4c-16.1-5.2-31.6-8-45.3-8-31 0-46.5 9.8-46.5 29.8 0 10.3 4.6 18.4 13.8 23 7.5 4 16.6 6.3 28.1 6.3 9.8 0 18.9-1.7 27-5.7 6.3-2.3 13.8-7.5 22.9-15zM1813.5 412.2c5.2-6.3 9.8-10.9 13.2-12.6 4.6-2.9 10.3-4.6 17.8-4.6 11.5 0 21.2 5.7 29.8 17.8 5.7-6.9 10.9-11.5 15.5-13.8 5.2-2.9 12.1-4 20.1-4 24.7 0 37.3 12.1 37.3 36.2v116.5c0 9.8-3.4 14.3-10.9 14.3-6.9 0-10.3-4.6-10.3-14.3V438c0-14.9-6.3-23-18.4-23-9.2 0-18.4 5.7-26.4 16.6v115.9c0 9.8-3.4 14.3-10.3 14.3s-10.3-4.6-10.3-14.3V440.3c0-16.6-6.9-24.7-20.1-24.7-8.6 0-16.6 5.7-25.3 16.6v115.4c0 9.8-3.4 14.3-10.9 14.3-6.9 0-10.3-4.6-10.3-14.3V405.3c0-6.9 2.9-10.3 8.6-10.3 2.9 0 5.7 2.3 7.5 6.3 2.3 2.8 3.4 6.8 3.4 10.9zM2000 412.2c16.1-11.5 35-17.2 55.7-17.2 43.6 0 65.4 18.4 65.4 54.5v59.7c0 17.2-6.3 30.4-18.4 40.2-10.9 8.6-25.8 13.2-44.8 13.2-22.4 0-41.3-5.7-58-17.8v67.7c0 10.3-3.4 15.5-10.3 15.5s-10.3-5.2-10.3-15.5v-202c0-10.3 2.9-15.5 8.6-15.5 2.9 0 5.7 2.3 8 6.3 1.3 3.4 3 7.4 4.1 10.9zm0 109c14.9 13.2 33.3 20.1 54.5 20.1 13.2 0 23.5-2.3 31.6-7.5 9.8-5.7 14.3-14.3 14.3-25.3v-59.7c0-12.6-5.2-21.2-15.5-27-8-4-18.9-6.3-32.1-6.3-12.1 0-21.8 1.7-29.3 5.2-6.9 2.9-14.3 9.2-23.5 18.4v82.1zM2192.3 464.4c0-45.3 15.5-85.5 47.1-121.1 11.5-13.2 20.7-19.5 27-19.5 2.3 0 4.6.6 6.3 2.3 1.7 1.7 2.9 3.4 2.9 5.7 0 3.4-4 8.6-12.1 16.6-32.7 31.6-49.4 70.6-49.4 117.1 0 51.6 17.2 93.5 51.1 125.7 6.9 6.3 10.3 11.5 10.3 15.5 0 2.3-1.1 4.6-2.9 6.3-1.7 1.7-4 2.9-6.3 2.9-8 0-18.9-9.2-33.3-27.5-27.5-33.9-40.7-75.2-40.7-124zM2626.7 475.9c0 45.3-15.5 85.5-47.1 121.1-11.5 13.2-20.7 19.5-27 19.5-2.3 0-4.6-.6-6.3-2.3-1.7-1.7-2.9-4-2.9-6.3 0-3.4 4-8.6 12.1-16.1 32.7-31.6 49.4-70.6 49.4-117.1 0-51.6-17.2-93.5-51.1-125.7-6.9-6.3-10.3-11.5-10.3-15.5 0-2.3 1.1-4.6 2.9-6.3 1.7-1.7 4-2.9 6.3-2.9 7.5 0 18.9 9.2 33.3 27.5 26.9 34.5 40.7 75.9 40.7 124.1z"
              fill="#6da768"
            />
            <g fill="#f2b139">
              <path d="M2314.5 576.9h199.2M2513.1 588.9H2314c-6.3 0-12.1-5.2-12.1-12.1 0-6.9 5.2-12.1 12.1-12.1h199.1c6.3 0 12.1 5.2 12.1 12.1-.1 7-5.2 12.1-12.1 12.1z" />
            </g>
            <path
              d="M2474.9 416.1c-3.2-10.8-8.3-21-16.1-29-2.1-2.1-4.3-4.1-6.5-6.1-1.7-1.6-6-4.1-6.9-6.2 4.6 10.7 9.1 21.8 5.7 33.6-1.6 5.3-7.4 18.1-15.1 14.8-7.2-3.1-6.4-18.3-7-24.4-1.5-15.1-4.9-30.1-12.9-43.1-4.4-7.1-10.1-13.4-17.3-17.7-9.5-5.6-19.3-9.4-30.1-5.3 2.4-.9 8.6 6.3 9.8 7.7 3.8 4.5 6.9 9.8 8.6 15.4 3.4 11.4.4 24.5-3.6 35.4-8.3 22.6-22.1 42.9-28.7 66.1-2.3 8.1-3.9 16.4-4.3 24.8-1.4 26.5 12.4 50.8 34.2 65.6 4.9 3.4 13.7 7.6 20 5.4-18.3-9.8-24.4-17.8-27.2-29.3-6.6-26.7 18.4-43.7 29.2-64.8 2.9-5.6 5-11.8 4.2-18.2-.3-2.4-3-14.1-6.6-13.5 10.9-1.7 18 5.5 21.7 14.9 3.9 10 6.3 20.2 4.5 30.8-.6 3.5-3.2 14.6 1.9 15.3 7.1 1 13.1-8.4 11.7-17.4-.7-4.2-1.5-10.6-1.5-10.6 7.5 9.2 10.9 18.5 12 28.6 2 18.1-5.8 42-20.3 56.8 6.1-6.2 13.9-10.5 19.8-17.2 6-6.8 10.6-14.6 14.2-23 8.1-18.6 12.8-39.6 11.4-59.9-.5-9.7-1.9-19.9-4.8-29.5z"
              fill="#f2b139"
            />
            <circle
              r="152.094"
              cy="475.972"
              cx="2416.891"
              fill="url(#b)"
              className="svg-fire"
            />
          </svg>
          {/* Logo end */}
        </a>
      </h1>
      
    </div>
    <div className="header-image">
      <div className="header-image-text">
        <h2 className="header-title">CodeAssist</h2>
        <p className="header-description">
          Let's learn to code by building projects for nonprofits
        </p>
        <a className="button button-yellow" href="#">
          Start learning to code (it's free!)
        </a>
        <a className="button button-blue" href="#">
          My nonprofit needs coding help
        </a>
      </div>
    </div>
  </header>
  <main role="main" className="site-main">
    <section className="fixed-width highlighted-bg">
      <h2>How it Works</h2>
      <div className="col fourth">
        <h2>Increase Efficiency</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_connect.svg"
          alt=""
          className="landing-icon"
        />
        <p>It helps developers to write code faster and more efficiently by providing suggestions.</p>
      </div>
      <div className="col fourth">
        <h2>Reduce Errors</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_learn.svg"
          alt=""
          className="landing-icon"
        />
        <p>It can help to reduce errors and bugs by offering suggestions.</p>
      </div>
      <div className="col fourth">
        <h2>Enable Code</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_portfolio.svg"
          alt=""
          className="landing-icon"
        />
        <p>It helps developers to write more reusable code and proving tools for managing dependicies.</p>
      </div>
      <div className="col fourth">
        <h2>Show Outputs</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_nonprofits.svg"
          alt=""
          className="landing-icon"
        />
        <p>It will also show the output in the same page.</p>
      </div>
    </section>
    <section className="fixed-width">
      <h2>Skills You'll Learn</h2>
      <div className="col fourth highlighted-bg small-box">
        <h3>HTML</h3>
        <div className="icon icon-large ion-social-html5" />
      </div>
      <div className="col fourth highlighted-bg small-box">
        <h3>CSS</h3>
        <div className="icon icon-large ion-social-css3" />
      </div>
      <div className="col fourth highlighted-bg small-box">
        <h3>JavaScript</h3>
        <div className="icon icon-large ion-social-javascript" />
      </div>
      <div className="col fourth highlighted-bg small-box">
        <h3>Databases</h3>
        <div className="icon icon-large ion-stats-bars" />
      </div>
      
      <div className="col fourth highlighted-bg small-box">
        <h3>Node.js</h3>
        <div className="icon icon-large ion-social-nodejs" />
      </div>
      <div className="col fourth highlighted-bg small-box">
        <h3>Angular.js</h3>
        <div className="icon icon-large ion-social-angular" />
      </div>
        
    </section>
    <section className="fixed-width highlighted-bg">
      <h2>Campers You'll Hang Out With</h2>
      <div className="col third">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/testimonial-jen.jpg"
          alt=""
          className="landing-icon testimonial-avatar"
        />
        <p>
          Getting back on track with Free Code Camp and committing to a new
          career in 2015! -{" "}
          <a href="https://twitter.com/jenbestyoga">@jenbestyoga</a>
        </p>
      </div>
      <div className="col third">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/testimonial-tate.jpg"
          alt=""
          className="landing-icon testimonial-avatar"
        />
        <p>
          Just built my company's website with skills I've learned from Free
          Code Camp! -{" "}
          <a href="https://twitter.com/TateThurston">@TateThurston</a>
        </p>
      </div>
      
    </section>
    <section className="fixed-width">
      <h2>Why you should join our open source community right now:</h2>
      <ul className="large-list">
        <li className="icon ion-code">
          You'll get help in real time from our community chat rooms.
        </li>
        <li className="icon ion-code">
          You'll meet up with other coders in your city.
        </li>
        <li className="icon ion-code">
          You'll learn to code at your own pace, in your browser or on your
          phone.
        </li>
        <li className="icon ion-code">
          You'll work through our focused, interactive courses and tutorials.
        </li>
        <li className="icon ion-code">
          You'll learn state-of-the-art <strong>full stack JavaScript</strong>{" "}
          technologies.
        </li>
        <li className="icon ion-code">
          You'll build projects that help nonprofits carry out their missions
          more effectively.
        </li>
        <li className="icon ion-code">
          You'll assemble a portfolio of real apps used by real people.
        </li>
        <li className="icon ion-code">Learn to code today (it's free)</li>
      </ul>
      <a href="" className="button button-yellow">
        Learn to code today (it's free!)
      </a>
    </section>
    <section className="fixed-width">
      <h2>As featured in</h2>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/as-seen-on.png"
        alt=""
        className="featured-in-image"
      />
    </section>
  </main>
  <footer className="site-footer" role="contentinfo">
    <ul className="inline-list">
      <li>
        <a href="" className="icon ion-speakerphone">
          Blog
        </a>
      </li>
      <li>
        <a href="" className="icon ion-social-github">
          Github
        </a>
      </li>
      <li>
        <a href="" className="icon ion-social-twitch">
          Twitch
        </a>
      </li>
      <li>
        <a href="" className="icon ion-social-linkedin">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="" className="icon ion-social-facebook">
          Facebook
        </a>
      </li>
      <li>
        <a href="" className="icon ion-social-twitter">
          Twitter
        </a>
      </li>
      <li>
        <a href="" className="icon ion-locked">
          Privacy
        </a>
      </li>
    </ul>
  </footer>
  {/* Login */}
  <div id="modal-bg" className="login-modal-bg toggle-hide" />
  <div id="login" className="login-container">
    <div className="col half">
      <h3>Sign in with email</h3>
      <form>
        <div className="input-group">
          <input id="email" type="email" placeholder="Email" />
          <label className="icon-label" htmlFor="email">
            <i className="icon ion-email" />
          </label>
        </div>
        <div className="input-group">
          <input id="password" type="password" placeholder="Password" />
          <label className="icon-label" htmlFor="password">
            <i className="icon ion-key" />
          </label>
        </div>
        <input
          type="submit"
          defaultValue="Sign In"
          className="button button-red full-width"
        />
        <p className="small">
          <a href="#">Forgot your password?</a>
          <br />
          <a href="#">Sign up using your email address</a>
        </p>
      </form>
    </div>
    <div className="col half highlighted-bg">
      <button className="button full-width button-twitter">
        <i className="icon ion-social-twitter" />
        Sign in with Twitter
      </button>
      <button className="button full-width button-github">
        <i className="icon ion-social-github" />
        Sign in with Github
      </button>
      <button className="button full-width button-facebook">
        <i className="icon ion-social-facebook" />
        Sign in with Facebook
      </button>
      <button className="button full-width button-google">
        <i className="icon ion-social-google" />
        Sign in with Google
      </button>
      <button className="button full-width button-linkedin">
        <i className="icon ion-social-linkedin" />
        Sign in with LinkedIn
      </button>
    </div>
    <button className="button button-red close-button toggle-hide">
      <i className="icon ion-close-circled" /> Close
    </button>
  </div>
</>
  )
}

export default Home;