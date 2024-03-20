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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/listing/:id" element={<Listing data={data} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
