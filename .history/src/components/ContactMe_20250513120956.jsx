














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