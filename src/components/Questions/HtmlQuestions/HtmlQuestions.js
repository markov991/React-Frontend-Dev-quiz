import React from "react";
import "./HtmlQuestions.css";
import Button from "../../UI/Button/Button";

const HtmlQuestions = ({ htmlQuestions, className, disabled, onClick }) => {
  return (
    <div>
      <h2>HTML</h2>
      {htmlQuestions.map((question, index) => {
        return (
          <Button
            className={className}
            disabled={disabled}
            onClick={(event) => onClick(question, event.currentTarget)}
            index={index + 1}
            key={index + 100}
          />
        );
      })}
    </div>
  );
};

export default HtmlQuestions;
