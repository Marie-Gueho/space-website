// == Import
import './styles.css';
import logo from '../../assets/shared/logo.svg';

// == Composant
const Navbar = () => (
  <nav className="nav">
    <img src={logo} alt="logo" />
    <ul className="nav-list">
      <li className="nav-item">00 HOME</li>
      <li className="nav-item">01 DESTINATION</li>
      <li className="nav-item">02 CREW</li>
      <li className="nav-item">03 TECHNOLOGY</li>
    </ul>
  </nav>
);

// == Export
export default Navbar;
