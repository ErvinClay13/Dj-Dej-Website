import React from "react";
import "./Events.css";

const events = [
  { title: "Summer Bash", img: "/flyers/flyer1.jpg" },
  { title: "Night Vibes", img: "/flyers/flyer2.jpg" },
  { title: "Electric Dreams", img: "/flyers/flyer3.jpg" },
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


