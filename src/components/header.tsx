import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import '../components-styles/header.css';
library.add(faCloud);

function Header() {
  return (
    <header>
      <h1>Weather App</h1>
      <FontAwesomeIcon icon={faCloud} className="header-icon" />
    </header>
  );
}

export default Header;