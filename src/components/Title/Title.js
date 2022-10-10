import React from "react";

const Title = ({ text, size, color, weight }) => {

  const styles = {
    fontSize : size,
    color: color,
    fontWeight : weight
  }

  return <div className="title-container" style={styles}>{text}</div>;
};

export default Title;
