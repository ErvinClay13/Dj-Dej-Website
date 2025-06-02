import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useTypewriter } from "react-simple-typewriter";
import "./ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [verified, setVerified] = useState(false);

  // Typewriter placeholders
  const [firstNameText] = useTypewriter({
    words: [
      "Please enter your First Name",
      "o"
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [emailText] = useTypewriter({
    words: ["Email"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [detailsText] = useTypewriter({
  words: [
    "Tell me more about your event...",
    "What should I know to make it perfect?",
    "What's the vibe you're going for?",
  ],
  loop: true,
  typeSpeed: 50,
  deleteSpeed: 30,
  delaySpeed: 2000,
});
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
Phone: ${formEl["phone"].value}
Event Type: ${formEl["event_type"].value}
Event Date: ${formEl["event_date"].value}
Venue: ${formEl["venue"].value}
Guest Count: ${formEl["guest_count"].value}
Referral: ${formEl["referral"].value}
Message: ${formEl["additional_details"].value}
`;

    ["name", "email", "message"].forEach((field) => {
      const existing = formEl.querySelector(`input[name='${field}']`);
      if (existing) existing.remove();
    });

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
      .sendForm("service_3khdmx7", "template_7twwnwf", formEl, {
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
            placeholder={firstNameText}
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
          <input
            type="email"
            name="email"
            placeholder={emailText}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
          />
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
          name="additional_details"
          placeholder={detailsText}
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

//     const name = `${formEl["first_name"].value} ${formEl["last_name"].value}`;
//     const email = formEl["email"].value;

//     const message = `
// Phone: ${formEl["phone"].value}
// Event Type: ${formEl["event_type"].value}
// Event Date: ${formEl["event_date"].value}
// Venue: ${formEl["venue"].value}
// Guest Count: ${formEl["guest_count"].value}
// Referral: ${formEl["referral"].value}
// Message: ${formEl["additional_details"].value}
// `;

//     // Remove any previous hidden fields
//     ["name", "email", "message"].forEach((field) => {
//       const existing = formEl.querySelector(`input[name='${field}']`);
//       if (existing) existing.remove();
//     });

//     // Dynamically add hidden inputs
//     const hiddenInputs = [
//       { name: "name", value: name },
//       { name: "email", value: email },
//       { name: "message", value: message },
//     ];

//     hiddenInputs.forEach(({ name, value }) => {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = name;
//       input.value = value;
//       formEl.appendChild(input);
//     });

//     emailjs
//       .sendForm("service_3khdmx7", "template_7twwnwf", formEl, {
//         publicKey: "uoarmldLmdgLK6Idq",
//       })
//       .then(() => {
//         alert("Booking request sent successfully!");
//         formEl.reset();
//         setVerified(false);
//         window.grecaptcha?.reset();
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
//           <input
//             type="text"
//             name="first_name"
//             placeholder="First Name"
//             required
//           />
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Last Name"
//             required
//           />
//         </div>
//         <div className="row">
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="tel" name="phone" placeholder="Phone number" required />
//         </div>
//         <div className="row">
//           <input type="date" name="event_date" required />
//           <input
//             type="text"
//             name="venue"
//             placeholder="Event Venue & Location"
//             required
//           />
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
//           <input
//             type="number"
//             name="guest_count"
//             placeholder="Estimated Guest Count"
//             required
//           />
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
//         <textarea
//           name="additional_details"
//           placeholder="Tell me more about your event..."
//           required
//         />

//         <div
//           style={{
//             marginTop: "1.5rem",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
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