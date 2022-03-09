// == Import
import './styles.css';
import logo from '../../assets/shared/logo.svg';

// == Composant
const Navbar = () => (
  <nav className="nav">
    <img src={logo} alt="logo" />
    <ul className="nav-list">
      <li className="nav-item"><span>00</span> HOME</li>
      <li className="nav-item"><span>01</span> DESTINATION</li>
      <li className="nav-item"><span>02</span> CREW</li>
      <li className="nav-item"><span>03</span> TECHNOLOGY</li>
    </ul>
  </nav>
);

// == Export
export default Navbar;
