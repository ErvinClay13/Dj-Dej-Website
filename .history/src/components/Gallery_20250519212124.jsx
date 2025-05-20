import React, { useState } from "react";
import "./Gallery.css";

const mediaItems = [
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image1.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image2.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image3.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image4.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image5.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image6.png` },
  { type: "image", src: `${import.meta.env.BASE_URL}gallery/image6.png` },
  
 
  { type: "video", src: `${import.meta.env.BASE_URL}gallery/video1.mp4` },
  { type: "video", src: `${import.meta.env.BASE_URL}gallery/video2.mp4` },
  // Add more as needed
];

const Gallery = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const closeExpanded = () => setExpandedItem(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {mediaItems.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => setExpandedItem(index)}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Gallery ${index}`} />
            ) : (
              <video src={item.src} muted loop playsInline />
            )}
          </div>
        ))}
      </div>

      {expandedItem !== null && (
        <div className="gallery-overlay">
          <div className="gallery-expanded">
            <button className="close-btn" onClick={closeExpanded}>Close</button>
            {mediaItems[expandedItem].type === "image" ? (
              <img src={mediaItems[expandedItem].src} alt="Expanded View" />
            ) : (
              <video src={mediaItems[expandedItem].src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
