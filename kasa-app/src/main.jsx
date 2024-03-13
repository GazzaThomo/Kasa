import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Apropos from "./Pages/A-propos";
import Error from "./Components/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import "./sass/layout.css";
import data from "./data.js";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Monserrat', Helvetica, sans-serif;
    }

    #root, body {
      min-height:100vh;
      display: flex;
      flex-direction:column;
    }

    body {
      margin: auto;
      max-width: 1440px;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/listing/:id" element={<Listing data={data} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
