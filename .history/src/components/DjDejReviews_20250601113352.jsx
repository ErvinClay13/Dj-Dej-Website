// DjDejReviews.jsx
import React from "react";
import "./DjDejReviews.css";

const reviews = [
  {
    name: "Tasha M.",
    rating: 5,
    text: "DJ Dej turned our night into a movie! Everyone loved her set!",
    image: "https://example.com/tasha.jpg", // replace with actual image URL
  },
  {
    name: "Marcus J.",
    rating: 5,
    text: "She’s the best DJ in the city hands down.",
    image: "https://example.com/marcus.jpg",
  },
  {
    name: "Angela S.",
    rating: 5,
    text: "The energy, the music, the vibe — 10/10.",
    image: "https://example.com/angela.jpg",
  },
  // Add more reviews as needed
];

export default function DjDejReviews() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What People Are Saying About DJ Dej</h2>
      <p className="reviews-subtitle">
        Real 5-star reviews from Google, Facebook, and more!
      </p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              className="review-image"
              src={review.image}
              alt={`${review.name}'s profile`}
            />
            <div className="review-stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
      <a
        className="reviews-button"
        href="https://g.page/r/CZ7o7bM4GskTEBM/review"
        target="_blank"
        rel="noreferrer"
      >
        Read More on Google
      </a>
    </section>
  );
}