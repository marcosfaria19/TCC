import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const MainButton = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="main-button">
      {text}
    </Link>
  );
};

export default MainButton;
