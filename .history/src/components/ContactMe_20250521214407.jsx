import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [verified, setVerified] = useState(false);

  const handleRecaptcha = (token) => {
    setVerified(!!token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!verified) {
      alert("Please verify that you're human.");
      return;
    }

    const formEl = form.current;

    const name = `${formEl["first_name"].value} ${formEl["last_name"].value}`;
    const email = formEl["email"].value;

    const message = `
      Phone: ${formEl["phone"].value} br
      Event Type: ${formEl["event_type"].value}
      Event Date: ${formEl["event_date"].value}
      Venue: ${formEl["venue"].value}
      Guest Count: ${formEl["guest_count"].value}
      Referral: ${formEl["referral"].value}
      Message: ${formEl["message"].value}
    `;

    // Remove any previous hidden fields
    ["name", "email", "message"].forEach((field) => {
      const existing = formEl.querySelector(`input[name='${field}']`);
      if (existing) existing.remove();
    });

    // Dynamically add hidden inputs
    const hiddenInputs = [
      { name: "name", value: name },
      { name: "email", value: email },
      { name: "message", value: message },
    ];

    hiddenInputs.forEach(({ name, value }) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      formEl.appendChild(input);
    });

    emailjs
      .sendForm("service_1ecvu9k", "template_7twwnwf", formEl, {
        publicKey: "uoarmldLmdgLK6Idq",
      })
      .then(() => {
        alert("Booking request sent successfully!");
        formEl.reset();
        setVerified(false);
        window.grecaptcha?.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        alert("There was an error sending your request. Please try again.");
      });
  };

  return (
    <div className="formContainer">
      <h1>Booking Inquiry</h1>
      <p>Feel free to contact me via the form below.</p>

      <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
        <div className="row">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone number" required />
        </div>
        <div className="row">
          <input type="date" name="event_date" required />
          <input
            type="text"
            name="venue"
            placeholder="Event Venue & Location"
            required
          />
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
          <input
            type="number"
            name="guest_count"
            placeholder="Estimated Guest Count"
            required
          />
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
        <textarea
          name="message"
          placeholder="Tell me more about your event..."
          required
        />

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReCAPTCHA
            sitekey="6LewA0IrAAAAAIXP9uzb4PrPsyINtjJ2CGAcFhWl"
            onChange={handleRecaptcha}
          />
        </div>

        <button type="submit" disabled={!verified}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
// import "./ContactMe.css";

// function ContactMe() {
//   const form = useRef();
//   const [verified, setVerified] = useState(false);

//   const handleRecaptcha = (token) => {
//     setVerified(!!token);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!verified) {
//       alert("Please verify that you're human.");
//       return;
//     }

//     const formEl = form.current;

//     // Grab form values
//     const name = `${formEl["first_name"].value} ${formEl["last_name"].value}`;
//     const email = formEl["email"].value;
//     const title = "New Booking Inquiry";

//     const message = `
//       Phone: ${formEl["phone"].value}
//       Event Type: ${formEl["event_type"].value}
//       Event Date: ${formEl["event_date"].value}
//       Venue: ${formEl["venue"].value}
//       Guest Count: ${formEl["guest_count"].value}
//       Referral: ${formEl["referral"].value}
//       Message: ${formEl["message"].value}
//     `;

//     // Dynamically set the hidden fields for EmailJS
//     formEl["name"]?.remove();
//     formEl["email_field"]?.remove();
//     formEl["title"]?.remove();
//     formEl["compiled_message"]?.remove();

//     const hiddenFields = [
//       { name: "name", value: name },
//       { name: "email", value: email, id: "email_field" },
//       { name: "message", value: message, id: "compiled_message" },
//     ];

//     hiddenFields.forEach(({ name, value, id }) => {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = name;
//       input.value = value;
//       if (id) input.id = id;
//       formEl.appendChild(input);
//     });

//     emailjs
//       .sendForm("service_1ecvu9k", "template_7twwnwf", formEl, {
//         publicKey: "uoarmldLmdgLK6Idq",
//       })
//       .then(() => {
//         alert("Booking request sent successfully!");
//         formEl.reset();
//         setVerified(false);
//       })
//       .catch((error) => {
//         console.error("FAILED...", error.text);
//         alert("There was an error sending your request. Please try again.");
//       });
//   };

//   return (
//     <div className="formContainer">
//       <h1>Booking Inquiry</h1>
//       <p>Feel free to contact me via the form below.</p>

//       <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
//         <div className="row">
//           <input type="text" name="first_name" placeholder="First Name" required />
//           <input type="text" name="last_name" placeholder="Last Name" required />
//         </div>
//         <div className="row">
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="tel" name="phone" placeholder="Phone number" required />
//         </div>
//         <div className="row">
//           <input type="date" name="event_date" required />
//           <input type="text" name="venue" placeholder="Event Venue & Location" required />
//         </div>
//         <div className="row">
//           <select name="event_type" required>
//             <option value="">Type of Event</option>
//             <option value="Birthday">Birthday</option>
//             <option value="Wedding">Wedding</option>
//             <option value="Corporate">Corporate</option>
//             <option value="Club/Bar">Club/Bar</option>
//             <option value="Other">Other</option>
//           </select>
//           <input type="number" name="guest_count" placeholder="Estimated Guest Count" required />
//         </div>
//         <div className="row">
//           <select name="referral" required>
//             <option value="">How did you hear about me?</option>
//             <option value="Instagram">Instagram</option>
//             <option value="Referral">Referral</option>
//             <option value="Google">Google</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <textarea name="message" placeholder="Tell me more about your event..." required />

//         <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
//           <ReCAPTCHA
//             sitekey="6LewA0IrAAAAAIXP9uzb4PrPsyINtjJ2CGAcFhWl"
//             onChange={handleRecaptcha}
//           />
//         </div>

//         <button type="submit" disabled={!verified}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactMe;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import ReCAPTCHA from "react-google-recaptcha"; // ✅ Make sure this is installed
// import "./ContactMe.css";

// function ContactMe() {
//   const form = useRef();
//   const [verified, setVerified] = useState(false);

//   const [namePlaceholder] = useTypewriter({
//     words: ["First name", "Enter your first name"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const [emailPlaceholder] = useTypewriter({
//     words: ["Enter your email here", "Kindly share your email here!"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const [messagePlaceholder] = useTypewriter({
//     words: ["Tell me more about your event!", "What should I know?"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const handleRecaptcha = (token) => {
//     setVerified(!!token);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!verified) {
//       alert("Please complete the reCAPTCHA to verify you're human.");
//       return;
//     }

//     emailjs
//       .sendForm("service_3khdmx7", "template_jrua9ll", form.current, {
//         publicKey: "uoarmldLmdgLK6Idq",
//       })
//       .then(() => {
//         alert("Booking request sent successfully!");
//         form.current.reset();
//         setVerified(false); // Reset reCAPTCHA
//       })
//       .catch((error) => {
//         console.log("FAILED...", error.text);
//         alert("There was an error sending your request. Please try again.");
//       });
//   };

//   return (
//     <div className="formContainer">
//       <h1>Booking Inquiry</h1>
//       <p className="contact-instructions">
//         Feel free to contact me via the form below.
//       </p>

//       <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
//         <div className="row">
//           <input type="text" name="first_name" placeholder={namePlaceholder} required />
//           <input type="text" name="last_name" placeholder="Last name" required />
//         </div>
//         <div className="row">
//           <input type="email" name="email" placeholder={emailPlaceholder} required />
//           <input type="tel" name="phone" placeholder="Phone number" required />
//         </div>
//         <div className="row">
//           <input type="date" name="event_date" required />
//           <input type="text" name="venue" placeholder="Event Venue & Location" required />
//         </div>
//         <div className="row">
//           <select name="event_type" required>
//             <option value="">Type of Event</option>
//             <option value="Birthday">Birthday</option>
//             <option value="Wedding">Wedding</option>
//             <option value="Corporate">Corporate</option>
//             <option value="Club/Bar">Club/Bar</option>
//             <option value="Other">Other</option>
//           </select>
//           <input type="number" name="guest_count" placeholder="Estimated Guest Count" required />
//         </div>
//         <div className="row">
//           <select name="referral" required>
//             <option value="">How did you hear about me?</option>
//             <option value="Instagram">Instagram</option>
//             <option value="Referral">Referral</option>
//             <option value="Google">Google</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <textarea name="message" placeholder={messagePlaceholder} required />
//         {/* <Cursor /> */}

//         {/* reCAPTCHA visible above button */}
//         <div className="recaptcha" style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
//           <ReCAPTCHA
//             sitekey="6LewA0IrAAAAAIXP9uzb4PrPsyINtjJ2CGAcFhWl" // 🔁 Replace with your real site key
//             onChange={handleRecaptcha}
//           />
//         </div>

//         <button type="submit" disabled={!verified}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactMe;

("");

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import "./ContactMe.css";

// function ContactMe() {
//   const form = useRef();

//   const [namePlaceholder] = useTypewriter({
//     words: ["First name", "Enter your first name"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const [emailPlaceholder] = useTypewriter({
//     words: ["Enter your email here", "Kindly share your email here!"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const [messagePlaceholder] = useTypewriter({
//     words: ["Tell me more about your event!", "What should I know?"],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm("service_3khdmx7", "template_jrua9ll", form.current, "uoarmldLmdgLK6Idq")
//       .then(() => {
//         alert("Booking request sent successfully!");
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.error("FAILED...", error.text);
//         alert("Something went wrong. Please try again.");
//       });
//   };

//   return (
//     <div className="formContainer">
//       <h1>Booking Inquiry</h1>
//       <p className="contact-instructions">
//         Feel free to contact me via the form below.
//       </p>

//       <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
//         <div className="row">
//           <input type="text" name="first_name" placeholder={namePlaceholder} required />
//           <input type="text" name="last_name" placeholder="Last name" required />
//         </div>
//         <div className="row">
//           <input type="email" name="email" placeholder={emailPlaceholder} required />
//           <input type="tel" name="phone" placeholder="Phone number" required />
//         </div>
//         <div className="row">
//           <input type="date" name="event_date" required />
//           <input type="text" name="venue" placeholder="Event Venue & Location" required />
//         </div>
//         <div className="row">
//           <select name="event_type" required>
//             <option value="">Type of Event</option>
//             <option value="Birthday">Birthday</option>
//             <option value="Wedding">Wedding</option>
//             <option value="Corporate">Corporate</option>
//             <option value="Club/Bar">Club/Bar</option>
//             <option value="Other">Other</option>
//           </select>
//           <input type="number" name="guest_count" placeholder="Estimated Guest Count" required />
//         </div>
//         <div className="row">
//           <select name="referral" required>
//             <option value="">How did you hear about me?</option>
//             <option value="Instagram">Instagram</option>
//             <option value="Referral">Referral</option>
//             <option value="Google">Google</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <textarea name="message" placeholder={messagePlaceholder} required />
//         <Cursor />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactMe;

// import React from "react";
// import { useRef } from "react"; // Hook to reference DOM elements
// import emailjs from "@emailjs/browser"; // EmailJS for sending form data as email
// import { useTypewriter, Cursor } from "react-simple-typewriter"; // Typewriter animation effect

// // ContactMe component definition
// function ContactMe() {
//   // Animated placeholder for name input
//   const [newName] = useTypewriter({
//     words: [
//       "Hello What is your name?",
//       "Please enter your name here!",
//       "Feel free to enter your name here",
//     ],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   // Animated placeholder for email input
//   const [eMail] = useTypewriter({
//     words: [
//       "You can enter email in this field! ",
//       "Please enter your name here!",
//       "Enter your email address inside!",
//     ],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   // Animated placeholder for message textarea
//   const [text] = useTypewriter({
//     words: [
//       "Hello! Feel free to send me a message.",
//       "I'm excited to hear from you!",
//       "Let's build something amazing together!",
//     ],
//     loop: true,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//   });

//   // Reference to the form DOM element
//   const form = useRef();

//   // Handles form submission and sends the data using EmailJS
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevents page reload on form submit

//     emailjs
//       .sendForm("service_spzbvv5", "template_eso2v3n", form.current, {
//         publicKey: "nXe5clY5imZRjmuNb", // Public API key
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!"); // On success
//           console.log("Message Sent");
//         },
//         (error) => {
//           console.log("FAILED...", error.text); // On failure
//         }
//       );
//   };

//   // JSX to render the contact form
//   return (
//     <div className="formContainer">
//       <h1>Contact Me</h1>

//       <div className="styled-contact-form">
//         <form ref={form} onSubmit={sendEmail}>
//           {/* Name input with animated placeholder */}
//           <label>Name</label>
//           <input type="text" name="user_name" placeholder={newName} />

//           {/* Email input with animated placeholder */}
//           <label>Email</label>
//           <input type="email" name="user_email" placeholder={eMail} />

//           {/* Message input with animated placeholder */}
//           <label>Message</label>
//           <textarea name="message" placeholder={text} />

//           {/* Cursor animation shown with the typewriter effect */}
//           <Cursor />

//           {/* Submit button */}
//           <input type="submit" value="Send" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactMe;
