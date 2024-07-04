// este componente es la barra de navegacion para que el usario pueda 
import { Link } from 'react-router-dom';
import "../css/nav.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="https://i.pinimg.com/564x/00/7f/8c/007f8c8b09ad6c9c7ca2d800cc282ff2.jpg" alt=""className="navbar-logo" />
       
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
             <Link to="/register" className="nav-links">
              registrar
              </Link>

          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              crear una cuenta
            </Link>
          </li>
          <li className="nav-item">
            <Link to= "/contact" className="nav-links">
              contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to= "/home" className="nav-links">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link to= "/preguntaFrecuente" className="nav-links">
              Preguntas frecuentes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;