import React from "react";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import "./Container.css";

const Container = ({ children, background }) => {
  const styles = {
    backgroundImage: `url('${background}')`,
  };
  return (
    <div className="container" style={styles}>
      <Navbar />
      {children}
      <Social />
    </div>
  );
};

export default Container;
