import React from "react";
import "./CssQuestions.css";
import Button from "../../UI/Button/Button";

const CssQuestions = ({ cssQuestions, className, disabled, onClick }) => {
  return (
    <div>
      <h2>HTML</h2>
      {cssQuestions.map((question, index) => {
        return (
          <Button
            className={className}
            disabled={disabled}
            onClick={(event) => onClick(question, event.currentTarget)}
            index={index + 1}
            key={index + 200}
          />
        );
      })}
    </div>
  );
};

export default CssQuestions;
