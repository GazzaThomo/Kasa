import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logoWhite} alt="Logo kasa" className="footerLogo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
