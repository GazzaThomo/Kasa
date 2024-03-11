import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div>
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/a-propos" className="link">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
