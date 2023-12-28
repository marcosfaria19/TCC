import React from "react";
import "./Button.css";

const MainButton = ({ text, onClick }) => {
  return (
    <button
      className="main-button"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
