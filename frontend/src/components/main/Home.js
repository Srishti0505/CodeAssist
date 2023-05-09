import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
  <sectio className="nav">
    <h1>FRONTEND TRENDS</h1>
    <h3 className="span loader">
      <span className="m">B</span>
      <span className="m">E</span>
      <span className="m">N</span>
      <span className="m">E</span>
      <span className="m">F</span>
      <span className="m">I</span>
      <span className="m">T</span>
      <span className="m">S</span>
      <span className="m">&nbsp;</span>
      <span className="m">o</span>
      <span className="m">f</span>
      <span className="m">&nbsp;</span>
      <span className="m">T</span>
      <span className="m">E</span>
      <span className="m">C</span>
      <span className="m">H</span>
      <span className="m">N</span>
      <span className="m">O</span>
      <span className="m">L</span>
      <span className="m">O</span>
      <span className="m">G</span>
      <span className="m">I</span>
      <span className="m">E</span>
      <span className="m">S</span>
    </h3>
    <div className="nav-container">
      <a className="nav-tab" href="#tab-svelte">
        SVELTE
      </a>
      <a className="nav-tab" href="#tab-esbuild">
        ESBUILD
      </a>
      <a className="nav-tab" href="#tab-next">
        NEXT.JS
      </a>
      <a className="nav-tab" href="#tab-typescript">
        TYPESCRIPT
      </a>
      <a className="nav-tab" href="#tab-vite">
        VITE
      </a>
      <span className="nav-tab-slider" />
    </div>
  </sectio>
  <main className="main">
    <section className="slider" id="tab-svelte">
      <h1>SVELTE</h1>
      <h2>another frontend JS framework</h2>
    </section>
    <section className="slider" id="tab-esbuild">
      <h1>ESBUILD</h1>
      <h2>an extremely fast JavaScript bundler</h2>
    </section>
    <section className="slider" id="tab-next">
      <h1>NEXT.JS</h1>
      <h2>framework for Production</h2>
    </section>
    <section className="slider" id="tab-typescript">
      <h1>TYPESCRIPT</h1>
      <h2>giving you better tooling at any scale</h2>
    </section>
    <section className="slider" id="tab-vite">
      <h1>VITE</h1>
      <h2>a frontend build tool</h2>
    </section>
  </main>
  <canvas className="background" />
  {/* SGVsbG8hIE15IG5hbWUgaXMgU2FyYSBNYXphbC4gV2VsY29tZSB0byBteSBDb2RlUGVuIQ== */}
</>

  )
}

export default Home;