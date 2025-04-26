
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <a className = 'navbar-links' href="index.html">Inicio</a>
    <a className = 'navbar-links' href="nosotros.html">Nosotros</a>
    <a className = 'navbar-links' href="productos.html">Productos</a>
    <a className = 'navbar-links' href="contacto.html">Contacto</a>
    <button className="navbar-button">Iniciar Sesión</button>
  </nav>
);

export default NavBar;