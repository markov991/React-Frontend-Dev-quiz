import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`button ${props.className}`}
    >
      Question {`${props.index}`}
    </button>
  );
};

export default Button;
