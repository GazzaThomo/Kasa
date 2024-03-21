import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="ErrorMessageContainer">
      <h1 className="ErrorTitle">404</h1>
      <p className="ErrorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="StyledLink">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
