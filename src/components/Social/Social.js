import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

const Social = () => {
  return (
    <div className="social-container">
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/alain-andr%C3%A9s-moraga-vargas/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#fff" size="2x" />
        </a>
      </div>
      <div className="icon-container">
        <a href="www.google.cl" target="_blank">
          <FontAwesomeIcon icon={faGithub} color="#fff" size="2x" />
        </a>
      </div>
      <div className="icon-container">
        <a href="www.google.cl" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} color="#fff" size="2x" />
        </a>
      </div>
      <div className="icon-container">
        <a href="www.google.cl" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} color="#fff" size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Social;
