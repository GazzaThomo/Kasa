import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} className="logo" alt="Logo" />
      </NavLink>
      <div className="linkDiv">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
