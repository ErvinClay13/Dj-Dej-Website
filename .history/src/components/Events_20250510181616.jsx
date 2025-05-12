import React from "react";
import "./Events.css";

const events = [
  { title: "Cool's Birthday Bash", img: "/flyers/flyer1.p" },
  { title: "Alpha Invasion Weekend In Philly Jawn", img: "/flyers/flyer2.p" },
  { title: "DSTined Turns 3", img: "/flyers/flyer3.p" },
  { title: "Litmas 2023", img: "/flyers/flyer4.p" },
  { title: "Fiesta Friday's", img: "/flyers/flyer5.p" },
  { title: "Birthday Bash", img: "/flyers/flyer6.p" },
  { title: "Social Soiree`", img: "/flyers/flyer7.p" },
  { title: "Diversity & Inclusion Derby Day", img: "/flyers/flyer8.p" },
  { title: "Chillout", img: "/flyers/flyer9.p" },
  { title: "Litmas 2024", img: "/flyers/flyer10.p" },
  { title: "Valentine's Day Comedy Show", img: "/flyers/flyer11.p" },
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


