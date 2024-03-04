import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import colors from "../../utils/styles/colors.js";

const HomeLogo = styled.img`
  height: 68px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinks = styled(Link)`
  margin-left: 47px;
  color: ${colors.black};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <div>
        <StyledLinks to="/">Accueil</StyledLinks>
        <StyledLinks to="/a-propos">A Propos</StyledLinks>
      </div>
    </NavContainer>
  );
}

export default Header;
