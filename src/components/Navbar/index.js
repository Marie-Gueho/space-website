// == Import
import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/shared/logo.svg';

// == Composant
const Navbar = () => {
  const getActiveClassname = ({ isActive }) => (isActive ? 'nav-item nav-item--active' : 'nav-item');
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <ul className="nav-list">
        <NavLink className={getActiveClassname} to="/">
          <span>00</span> HOME
        </NavLink>
        <NavLink className={getActiveClassname} to="/destination">
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink className={getActiveClassname} to="/crew">
          <span>02</span> CREW
        </NavLink>
        <NavLink className={getActiveClassname} to="technology">
          <span>03</span> TECHNOLOGY
        </NavLink>
      </ul>
    </nav>
  );
};

// == Export
export default Navbar;
