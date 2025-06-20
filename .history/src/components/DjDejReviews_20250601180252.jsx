// DjDejReviews.jsx
import React from "react";
import "./DjDejReviews.css";

const reviews = [
  {
    name: "Ellen M.",
    rating: 5,
    text: "DJ Dej is amazing. She dj'd my daughter's sweet 16 and everyone loved her. She is family now and everyone asks for her number when they need a DJ. She's very professional and she makes the process really easy. My daughter lived working with her! If you are looking for a DJ, she's the one to hire!",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLUePV48rOmumpadHkxes7TMAcyFLyiGCxld18jqDgYGsZ9vA=w72-h72-p-rp-mo-br100", // replace with actual image URL
  },
  {
    name: "Ashley P.",
    rating: 5,
    text: "I’ve been to multiple DJ Dej events and each one is better than the last! She has a way of making sure everyone hears exactly what they need to get them up and dancing. Hip hop, R&B, Reggae, Afro Beats, the old school classics? She has them and she knows how to mix them. She really pays attention to her audience. As a person, she’s kind, respectful and honestly a joy to be around. Her personality lights up any room and any event. Just go ahead and book her. You won’t regret it! 10/10.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJbsy3-MQ_KLTJYgGNay--mgHOkcBW4D1dV1c9hES00cJX_iQ=w72-h72-p-rp-mo-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Kayla C.",
    rating: 5,
    text: "She knows how to keep a party going from start to finish and how to cater to various crowds and events. She always shows up on time. Would hire her for any event.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "I C.",
    rating: 5,
    text: "DJ Dej is exceptionally rare! A vibe like no other, she can create mixes for all ages, groups and genres. I attended a few parties that she DJ'd, she created dope mixes for a 1yr old birthday party, anniversary parties, & even walked in a restaurant & to my surprise she was dj'ing! She is professional, respectful & most importantly on time. Dont hesitate to book, she is literally the best on the turn tables.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  
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