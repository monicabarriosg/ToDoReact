// este componente es para crear el pie de pagina
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
            <a href="/services">Services</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;todos los derechos reservados 2024</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;