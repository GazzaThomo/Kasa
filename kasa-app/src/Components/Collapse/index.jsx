import React, { useState } from "react";
import arrowUp from "../../assets/arrow-up.svg"; // Update path to your SVG

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        <img
          src={arrowUp}
          alt="Toggle"
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
