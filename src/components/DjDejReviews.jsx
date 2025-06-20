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
    image: "https://lh3.googleusercontent.com/a/ACg8ocKZ0Q93Yu_X5arqpZ2tUEeCMjZPOWiSZrQsO9acjvxi8EzkSw=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Tiara W.",
    rating: 5,
    text: "DJ Dej knows what she’s doing! Every event I’ve been to that she DJs I literally cannot get off the dance floor!! She’s amazing at reading the room playing hit after hit and throwbacks you forgot about. Can’t have any other DJ at my parties. Don’t think twice…book her ASAP!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWN0FgcND7shg3E5CiUXbCc2XNO9646WO1Kn-qzvWfjo4cJNQRd=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Seneca J.",
    rating: 5,
    text: "My favorite DJ in the Chicago area!!! She keeps the party lit the entire time and caters to different age groups, so she’s perfect for any kind of event. I particularly love her house music sets. Definitely will book her for one of my own events in the future.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVUv2nWoSoToXf-5mUkFZ5IkhKL73EVg6UFCyLI_VQ9LC5QsCiQ=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Goldyn W.",
    rating: 5,
    text: "I’ve attended several DJ Dej events, and each time has been a fantastic experience! She has a remarkable ability to read the crowd and play the music that gets everyone out of their seats and dancing. Not only is she talented, but she is also easy to work with and always punctual. I highly recommend her, not just for partygoers seeking a good time, but also for anyone looking to hire an excellent and reliable DJ for their event.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWHJO5tpBwxs_VXtSgMVVfNGaxqB-45uOJDq_st8BstzL6L6e9G=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Sharie R.",
    rating: 5,
    text: "I’ve been to numerous events where Dj Dej performed and her stage presence is truly unmatched! If you’re looking for someone to bring the energy, keep the party going, and cater to all of your music needs Dj Dej is your girl!",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKlM1hrseT1xF1pg2o85SmHjAiPxIZZkkhP2oabeDnVPJDyuw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Onyx Avenue Ent.",
    rating: 5,
    text: "DJ Dej was a DJ at a friend's party and I didn't sit down, the music was off the chain and the jams kept coming, I recommend her for your next party or occasion for sure you won't be disappointed.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJNXOwlI9d-NE61ySCoXvLwt8hlupd96W2CPwca0U-BiN8T3w=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Lance B.",
    rating: 5,
    text: "We hired DJ DEJ for our event, and she absolutely crushed it! From the moment the music started, the energy in the room was electric. The playlist was perfectly tailored to our crowd, the transitions were seamless, and she kept everyone on the dance floor all night. Super professional, arrived early for setup, and was easy to communicate with throughout the entire process. If you're looking for a DJ who truly knows how to read the room and elevate your event, look no further. Highly recommend!",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLNYtDC3rsd0usOBCSOElFjqIcFd72BIilvf-houaif4GXoMg=w72-h72-p-rp-mo-br100",
  },
  
];

export default function DjDejReviews() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What People Are Saying About DJ Dej</h2>
      <p className="reviews-subtitle">
        Real 5-star reviews from Google!
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
        href="https://www.google.com/search?client=ms-android-tmus-us-revc&sca_esv=e9924e7293653108&sxsrf=AE3TifOtT0PKtI51oCUw6g16xljJsCaC6g:1748793794986&q=dj+dej+reviews&uds=AOm0WdEgB-l8XybJQ9iqfQpCocnP7DF4KLngk_kSwEKyueJtN7Shl46SfcmVIejz4DeVaFwW5Zvu_TzP4IwXTFQbkSRGKcHRH_1Bj8oQetPOrS_wU-Pn3h6BNN9nXF11zUoN-QGqRaMlaH1RDOYmjpL2cCsIYFBhdjVXF4mVl4YJHqWnBHSDuUoGyxXvvYaQgNkLyD8ID9lA13IIONxA0lar264nq2ya7yLge6hZeSSYdvPCtcx2DjVTYJd6P3KF-pB4Cy8WeABCEgpJehty2QvLFidNgkqZ8uCi0zbU8OUF63Z2cgliBtg20_P8OVXJkjfQSnyuDq3OYtzPgB8NlK7p5aghsBtGzaUz8hRswVrJ4FyS6veqliREm-fSVv327TKjRNsGpgeMFryi3jC80KGOHUZi-BP5evtnqFSf-ja3PHrzaov93CaoXbST-ExaWN08mmP2l9A0&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0LAqxfdTbqsU8OoJWEIgaPj0jNTR3azZJqSlH4Gfdi9UTPxzwWOYxS6JyFXB061t6pDCtK-tr6RWzAUnj4Asp010yXj&sa=X&ved=2ahUKEwje6b3HzNCNAxXZjokEHdEYBnwQk8gLegQIIhAB&ictx=1&biw=360&bih=643&dpr=3#ebo=3"
        target="_blank"
        rel="noreferrer"
      >
        Read More on Google
      </a>
    </section>
  );
}