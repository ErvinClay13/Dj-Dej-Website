import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ContactMe from "./components/ContactMe";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import "./App.css";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showFullServices, setShowFullServices] = useState(false);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="main-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="logo">
          <img src={`${base}logo.png`} alt="DJ DEJ Logo" className="logo-img" />
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
<ul className={`nav-links ${showMenu ? "active" : ""}`}>
  <li><a href="#" onClick={() => setShowMenu(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setShowMenu(false)}>About</a></li>
  <li><a href="#mixes" onClick={() => setShowMenu(false)}>Mixes</a></li>
  <li><a href="#events" onClick={() => setShowMenu(false)}>Events</a></li>
  <li><a href="#gallery" onClick={() => setShowMenu(false)}>Gallery</a></li> {/* ✅ new */}
  <li><a href="#contact" onClick={() => setShowMenu(false)}>Book Me</a></li>
</ul>

      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          <div className="logo">
            <img src={`${base}logo.png`} alt="DJ DEJ Logo" className="logo-img2" />
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn light">BOOK ME</a>
          </div>
        </div>
      </header>

      {/* Info Sections */}
      <section className="info-section" id="about">
        <div className="info-block">
          <h2>ABOUT</h2>
          <div className={`text-collapse ${showFullAbout ? "expanded" : ""}`}>
            <p>
              DJ Dej is one of Chicago’s freshest faces in the DJ scene,
              bringing rhythm, soul, and pure energy to every event she touches.
              A lifelong lover of music and a proud percussionist from her high
              school drumline, DJ Dej’s journey into the world of DJing started
              the way all great stories do—at the request of friends and family
              who trusted her to set the vibe. And she delivered.
              {showFullAbout && (
                <>
                  <br />
                  Since her official debut in 2023 at Litmas V: The Debut of DJ Dej, she’s been making waves
                  across Chicago at venues like Bar22, Williams Inn Pizza & Sports Bar, and Bassline. Known
                  for her seamless blends of house, steppin’ grooves, R&B, and hip-hop, DJ Dej creates soundscapes
                  that move people—literally. Her sets are soulful, upbeat, and rooted in genres like gospel,
                  neo-soul, afrobeats, amapiano, reggae, pop, and Top 100 hits.
                  <br />
                  Whether it’s a birthday party, wedding, prom, graduation, corporate event, or bar night, DJ Dej
                  brings a vibrant, stress-free experience that keeps the dance floor full all night long.
                  <br />
                  Born with rhythm, backed by education, and driven by passion, DJ Dej holds a B.S. in Criminal
                  Justice from Alabama State University and an M.S. in Human Resources from DePaul University. She’s
                  also a proud lifetime member of Delta Sigma Theta Sorority, Inc.
                  <br />
                  When you book DJ Dej, you’re not just hiring a DJ—you’re curating a vibe. Expect professionalism,
                  authenticity, and music that speaks to the soul.
                </>
              )}
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowFullAbout(!showFullAbout);
            }}
          >
            {showFullAbout ? "read less" : "read more"}
          </a>
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
      <div id="events">
        <Events />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery />
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