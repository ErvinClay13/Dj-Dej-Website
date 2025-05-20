import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [isHuman, setIsHuman] = useState(false);

  const [namePlaceholder] = useTypewriter({
    words: ["First name", "Enter your first name"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  const [emailPlaceholder] = useTypewriter({
    words: ["Enter your email here", "Kindly share your email here!"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  const [messagePlaceholder] = useTypewriter({
    words: ["Tell me more about your event!", "What should I know?"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isHuman) {
      alert("Please verify you're human.");
      return;
    }

    emailjs
      .sendForm("service_3khdmx7", "template_jrua9ll", form.current, "uoarmldLmdgLK6Idq")
      .then(() => {
        alert("Booking request sent successfully!");
        form.current.reset();
        setIsHuman(false);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="formContainer">
      <h1>Booking Inquiry</h1>
      <p className="contact-instructions">
        Feel free to contact me via the form below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
        <div className="row">
          <input type="text" name="first_name" placeholder={namePlaceholder} required />
          <input type="text" name="last_name" placeholder="Last name" required />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder={emailPlaceholder} required />
          <input type="tel" name="phone" placeholder="Phone number" required />
        </div>
        <div className="row">
          <input type="date" name="event_date" required />
          <input type="text" name="venue" placeholder="Event Venue & Location" required />
        </div>
        <div className="row">
          <select name="event_type" required>
            <option value="">Type of Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Club/Bar">Club/Bar</option>
            <option value="Other">Other</option>
          </select>
          <input type="number" name="guest_count" placeholder="Estimated Guest Count" required />
        </div>
        <div className="row">
          <select name="referral" required>
            <option value="">How did you hear about me?</option>
            <option value="Instagram">Instagram</option>
            <option value="Referral">Referral</option>
            <option value="Google">Google</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <textarea name="message" placeholder={messagePlaceholder} required />
        <Cursor />

        {/* 🧩 reCAPTCHA Component */}
        <ReCAPTCHA
          sitekey="6Lei60ErAAAAALfiBeEwSs_mV4LjjZoGtjxrDD7F"
          onChange={() => setIsHuman(true)}
          onExpired={() => setIsHuman(false)}
        />

        <button type="submit" disabled={!isHuman}>Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
