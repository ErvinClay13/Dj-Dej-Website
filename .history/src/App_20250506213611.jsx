import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const App = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <h1 className="hero-title">DJ NAME</h1>
        <p className="tagline">Live. Mix. Elevate.</p>

        {/* SoundCloud Embed */}
        <iframe
          title="soundcloud-player"
          width="100%"
          height="120"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          className="soundcloud-embed"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500"
        ></iframe>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>
          <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
            Linktree
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

