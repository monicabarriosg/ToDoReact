import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          hahah
        </a>
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
              Necesito ayuda
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;