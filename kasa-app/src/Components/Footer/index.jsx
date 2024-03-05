import colors from "../../utils/styles/colors.js";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.png";
import styled from "styled-components";

const FooterContainer = styled.footer`
  color: ${colors.white};
  font-size: 24px;
  text-align: center;
  background-color: ${colors.black};
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <img src={logoWhite} alt="Logo kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}

export default Footer;
