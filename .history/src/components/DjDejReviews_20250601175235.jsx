// DjDejReviews.jsx
import React from "react";
import "./DjDejReviews.css";

const reviews = [
  {
    name: "Ellen M.",
    rating: 5,
    text: "DJ Dej is amazing. She dj'd my daughter's sweet 16 and everyone loved her. She is family now and everyone asks for her number when they need a DJ. She's very professional and she makes the process really easy. My daughter lived working with her! If you are looking for a DJ, she's the one to hire!",
    image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.google.com%2Fmaps%2Fcontrib%2F112831077423799578943%2Freviews%3Fhl%3Den-US%26ved%3D1t%253A139470%26ictx%3D111&ved=0CBQQzsEIahcKEwjoh9L0p9GNAxUAAAAAHQAAAAAQBQ&opi=89978449", // replace with actual image URL
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