// este componente es un formulario donde el usuario puede dejar quejas, dudas o cualquier mensaje que desee
// importacion del useState
import React, { useState } from "react";
// importacion de la hoja de estilos
import "../css/ContactForm.css";
// esta funcion es para declarar las variables y recopilar los datos que se requieren del usario
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // esta constante lo que hace es recopilar los datos del form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // esta constante lo que hace es prevenir errores de la etiqueta "form"
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-container h2">Contact Me</h2>

      <p>
        Desde aquí resolveremos todas las dudas que tengas sobre nuestro
        servicio de venta online, te respoderemos lo mas antes posible
      </p>
      {/* form para que el usuario pueda contactar a la administracion de la pagina */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form input"
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
            className="contact-form input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="contact-form label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-form textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="contact-form button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
