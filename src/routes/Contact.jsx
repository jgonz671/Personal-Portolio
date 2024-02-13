import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ovi3kx5', 'template_hop8p2l', form.current, 'LmIpWAtd9yOrqMqWC')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });
    e.target.reset(); 
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name:</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_email">Email:</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
