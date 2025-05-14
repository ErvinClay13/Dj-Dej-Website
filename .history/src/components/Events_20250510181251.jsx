import React from "react";
import "./Events.css";

const events = [
  { title: "Cool's Birthday Bash", img: "/flyers/flyer1.jpg" },
  { title: "Alpha Invasion Weekend In Philly Jawn", img: "/flyers/flyer2.jpg" },
  { title: "DSTined Turns 3", img: "/flyers/flyer3.jpg" },
  { title: "Litmas 2023", img: "/flyers/flyer4.jpg" },
  { title: "Fiesta Friday's", img: "/flyers/flyer5.jpg" },
  { title: "Birthday Bash", img: "/flyers/flyer6.jpg" },
  { title: "Social Soiree`", img: "/flyers/flyer7.jpg" },
  { title: "Diversity & Inclusion Derby Day", img: "/flyers/flyer8.jpg" },
  { title: "Chillout", img: "/flyers/flyer9.jpg" },
  { title: "Litmas 2024", img: "/flyers/flyer10.jpg" },
  { title: "Valentine's Dy", img: "/flyers/flyer11.jpg" },
{ title: "Electric Dreams", img: "/flyers/flyer12.jpg" },
];

const Events = () => {
  return (
    <section className="events-section" id="events">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="flyer-grid">
        {events.map((event, index) => (
          <div className="flyer-card" key={index}>
            <img src={event.img} alt={event.title} />
            <p>{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;


