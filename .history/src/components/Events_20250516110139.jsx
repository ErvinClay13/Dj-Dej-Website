import React, { useState } from "react";
import "./Events.css";

const events = [
  { title: "Cool's Birthday Bash", img: `${import.meta.env.BASE_URL}flyers/flyer1.png` },
  { title: "Alpha Invasion Weekend In Philly Jawn", img: `${import.meta.env.BASE_URL}flyers/flyer2.png` },
  { title: "DSTined Turns 3", img: `${import.meta.env.BASE_URL}flyers/flyer3.png` },
  { title: "Litmas 2023", img: `${import.meta.env.BASE_URL}flyers/flyer4.png` },
  { title: "Fiesta Friday's", img: `${import.meta.env.BASE_URL}flyers/flyer5.png` },
  { title: "Birthday Bash", img: `${import.meta.env.BASE_URL}flyers/flyer6.png` },
  { title: "Social Soiree`", img: `${import.meta.env.BASE_URL}flyers/flyer7.png` },
  { title: "Diversity & Inclusion Derby Day", img: `${import.meta.env.BASE_URL}flyers/flyer8.png` },
  { title: "Chillout", img: `${import.meta.env.BASE_URL}flyers/flyer9.png` },
  { title: "Litmas 2024", img: `${import.meta.env.BASE_URL}flyers/flyer10.png` },
  { title: "Valentine's Day Comedy Show", img: `${import.meta.env.BASE_URL}flyers/flyer11.png` },
  { title: "Clay's Anniversary Party", img: `${import.meta.env.BASE_URL}flyers/flyer12.png` },
  { title: "Wellness Health Fair", img: `${import.meta.env.BASE_URL}flyers/flyer13.png` },
  { title: "Torreys 51st Birthday", img: `${import.meta.env.BASE_URL}flyers/flyer14.png` },
];


const Events = () => {
  const [modalImg, setModalImg] = useState(null);
  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <section className="events-section" id="events">
      <h2 className="events-title">Events</h2>
      <div className="flyer-grid">
        {events.map((event, index) => (
          <div className="flyer-card" key={index} onClick={() => openModal(event.img)}>
            <img src={event.img} alt={event.title} />
            <p>{event.title}</p>
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImg} alt="Flyer Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
