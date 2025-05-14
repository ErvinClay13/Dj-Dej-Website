import React, { useState } from "react";
import "./Events.css";

const events = [
  { title: "Cool's Birthday Bash", img: "/flyers/flyer1.png" },
  { title: "Alpha Invasion Weekend In Philly Jawn", img: "/flyers/flyer2.png" },
  { title: "DSTined Turns 3", img: "/flyers/flyer3.png" },
  { title: "Litmas 2023", img: "/flyers/flyer4.png" },
  { title: "Fiesta Friday's", img: "/flyers/flyer5.png" },
  { title: "Birthday Bash", img: "/flyers/flyer6.png" },
  { title: "Social Soiree`", img: "/flyers/flyer7.png" },
  { title: "Diversity & Inclusion Derby Day", img: "/flyers/flyer8.png" },
  { title: "Chillout", img: "/flyers/flyer9.png" },
  { title: "Litmas 2024", img: "/flyers/flyer10.png" },
  { title: "Valentine's Day Comedy Show", img: "/flyers/flyer11.png" },
  { title: "Clay's Anniversary Party", img: "/flyers/flyer12.png" },
  { title: "Clay's Anniversary Party", img: "/flyers/flyer12.png" },
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
