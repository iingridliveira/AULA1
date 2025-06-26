import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-logo">MinhaLogo</div>
          <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/card" className="navbar-link">
                Card
              </Link>
            </li>
            <li>
              <Link to="/contador" className="navbar-link">
                Contador
              </Link>
            </li>
            <li>
              <Link to="/semafaro" className="navbar-link">
                Semáforo
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="navbar-link">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}
 
export default Nav;