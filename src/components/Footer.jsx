// este componente es el pie de pagina 
import "../css/Footer.css"
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <a href="/"></a>
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/preguntasFrecuentes">consultas regulares</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-social">
          <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/tu_cuenta_de_twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">Instagram</a>

          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;todos los derechos reservados 2024</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;