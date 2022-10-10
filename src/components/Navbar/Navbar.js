import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { data } from "../../data/data";
import { GeneralContext } from "../../context/GeneralContext";

const Navbar = () => {
  const { language, setLanguage } = useContext(GeneralContext);

  const handleSelectLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-links-container">
        <div className="link-container">
          <Link to="/">{data.navbar_home[language]} </Link>
        </div>
        <div className="link-container">
          <Link to="/about">{data.navbar_about[language]} </Link>
        </div>
        <div className="link-container">
          <Link to="/about">{data.navbar_resume[language]}</Link>
        </div>
        <div className="link-container">
          <Link to="/about">{data.navbar_cv[language]}</Link>
        </div>
      </div>
      <div className="navbar-language-container">
        <label>Idioma:</label>
        <select onChange={handleSelectLanguage}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
