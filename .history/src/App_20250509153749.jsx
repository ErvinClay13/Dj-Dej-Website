// DJ Portfolio - React + Plain CSS Full Layout (Hero + Sections)

import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="DJ DEJ Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#"></a></li>
          <li><a href="#">Releases</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          {/* <div className="logo">
          <img src="/logo.png" alt="DJ DEJ Logo" className="logo-img" />
        </div> */}
          <p className="tagline">THE BEST PARTY THIS YEAR</p>
          <p className="date">12 JUNE, 2025</p>
          <div className="hero-buttons">
            {/* <button className="btn dark">READ MORE</button> */}
            <button className="btn light">BOOK ME</button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <section className="info-section">
        <div className="info-block">
          <h2>ABOUT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <a href="#">read more</a>
        </div>
        <div className="info-block">
          <h2>TRACKS</h2>
          <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.</p>
          <a href="#">read more</a>
        </div>
        <div className="info-block">
          <h2>NEWS</h2>
          <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
          <a href="#">read more</a>
        </div>
      </section>
    </div>
  );
};

export default App;









// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="main-container">
//       {/* Top Navigation */}
//       <nav className="navbar">
//         <div className="logo">Dj DEJ</div>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Blog</a></li>
//           <li><a href="#">Releases</a></li>
//           <li><a href="#">Contacts</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         <div className="hero-overlay">
//           <h1 className="dj-name">DJ DEJ</h1>
//           <p className="tagline">THE BEST PARTY THIS YEAR</p>
//           <p className="date">12 JUNE, 2025</p>
//           <div className="hero-buttons">
//             <button className="btn dark">READ MORE</button>
//             <button className="btn light">JOIN US!</button>
//           </div>
//         </div>
//       </header>

//       {/* Sections */}
//       <section className="info-section">
//         <div className="info-block">
//           <h2>ABOUT</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
//           <a href="#">read more</a>
//         </div>
//         <div className="info-block">
//           <h2>TRACKS</h2>
//           <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.</p>
//           <a href="#">read more</a>
//         </div>
//         <div className="info-block">
//           <h2>NEWS</h2>
//           <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
//           <a href="#">read more</a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
