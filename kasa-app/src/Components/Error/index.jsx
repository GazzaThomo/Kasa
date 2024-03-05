import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const ErrorMessageContainer = styled.div`
  margin: auto;
  text-align: center;
  color: ${colors.primary};
`;

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
`;

const ErrorText = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  &:visited {
    color: ${colors.black};
  }
`;

function Error() {
  return (
    <>
      <Header />
      <ErrorMessageContainer>
        {" "}
        <ErrorTitle>404</ErrorTitle>
        <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
        <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
      </ErrorMessageContainer>
    </>
  );
}

export default Error;
