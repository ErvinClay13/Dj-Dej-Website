// DJ Portfolio - React + Plain CSS Full Layout (Hero + Sections)

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ContactMe from "./components/ContactMe";
import Events from "./components/Events";
import "./App.css";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="main-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="DJ DEJ Logo" className="logo-img" />
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setShowMenu(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#tracks" onClick={() => setShowMenu(false)}>
              Tracks
            </a>
          </li>
          <li>
            <a href="#mixes" onClick={() => setShowMenu(false)}>
              Mixes
            </a>
          </li>
          <li>
            <a href="#events" onClick={() => setShowMenu(false)}>
              Events
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setShowMenu(false)}>
              Book Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          <div className="logo">
            <img src="/logo.png" alt="DJ DEJ Logo" className="logo-img2" />
          </div>
          <div className="hero-buttons">
            <button className="btn light">BOOK ME</button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <section className="info-section" id="about">
        <div className="info-block">
          <h2>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <a href="#">read more</a>
        </div>
        <div className="info-block" id="service">
          <h2>SERVICE</h2>
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius.
          </p>
          <a href="#">read more</a>
        </div>
      
      </section>

      {/* Mixes Section */}
      <section className="mixes-section" id="mixes">
        <h2 className="mixes-title">Mixes</h2>

        <div className="mixcloud-embed">
          <iframe
            width="100%"
            height="120"
            style={{ border: "none" }}
            allow="autoplay"
            title="Mix 1"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2FApeCode%2Fdj-dej-mix-1%2F&hide_cover=0&light=0"
          ></iframe>
        </div>

        <div className="mixcloud-embed">
          <iframe
            width="100%"
            height="120"
            style={{ border: "none" }}
            allow="autoplay"
            title="Mix 2"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2FApeCode%2Fhouse_juke%2F&hide_cover=0&light=0"
          ></iframe>
        </div>

        <div className="mixcloud-embed">
          <iframe
            width="100%"
            height="120"
            style={{ border: "none" }}
            allow="autoplay"
            title="Mix 3"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2FApeCode%2Fthrowbacks%2F&hide_cover=0&light=0"
          ></iframe>
        </div>
      </section>

      {/* Event Section */}
      <div>
        <Events />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactMe />
      </div>

      <footer></footer>
    </div>
  );
};

export default App;

