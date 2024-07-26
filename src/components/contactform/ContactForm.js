import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p62lyn7', 'template_tck168v', form.current, 'ptdWZlFnG14LijrIj')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="w-full py-20 px-10 bg-gray-900 text-white">
      <h2 className="contact-title text-4xl font-bold mb-5 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-designColor" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-designColor" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
          <textarea id="message" name="message" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-designColor" rows="5" required></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-designColor text-white font-bold rounded-md hover:bg-pink-700">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
