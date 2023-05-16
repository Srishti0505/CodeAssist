import React from 'react';
import './Home.css';

const Home = () => {
  return (
    
  <>
  <header className="site-header" role="banner">
    
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
      <div className='d-flex justify-content-center'>
      <div className="col third">
        <img
          src="/image.png"
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