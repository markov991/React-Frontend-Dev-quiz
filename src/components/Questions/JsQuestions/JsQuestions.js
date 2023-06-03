import React from "react";
import "./JsQuestions.css";
import Button from "../../UI/Button/Button";

const JsQuestions = ({ jsQuestions, className, disabled, onClick }) => {
  const half = Math.ceil(jsQuestions.length / 2);

  const firsthalf = jsQuestions.slice(0, half).map((question, index) => {
    return (
      <Button
        className={className}
        disabled={disabled}
        onClick={(event) => onClick(question, event.currentTarget)}
        index={index + 1}
        key={index + 300}
      ></Button>
    );
  });
  const secondHalf = jsQuestions.slice(half).map((question, index) => {
    return (
      <Button
        className={className}
        disabled={disabled}
        onClick={(event) => onClick(question, event.currentTarget)}
        index={index + 6}
        key={index + 6 + 300}
      ></Button>
    );
  });

  return (
    <div>
      <h2>JS</h2>
      <div className="Jsbuttons">
        <div>{firsthalf}</div>
        <div>{secondHalf}</div>
      </div>
    </div>
  );
};

export default JsQuestions;
