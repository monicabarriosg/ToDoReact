import React, { useState } from 'react';
import '../css/ContactForm.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='contact-container'>
      <h2 className='contact-container h2'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
             className='contact-form input'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className='contact-form input'
            value={formData.email}
            onChange={handleChange}
            required

          />
        </div>
        <div>
          <label htmlFor="message" className='contact-form label'>Message:</label>
          <textarea
            id="message"
            name="message"
            className='contact-form textarea'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='contact-form button'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

