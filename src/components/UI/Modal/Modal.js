import React from "react";
import "./Modal.css";

const Modal = ({ question, pAnswers, onChange, onClick }) => {
  return (
    <div className="modal">
      <h3>Question:</h3>
      <p id="question">{question}</p>
      <form>
        <div className="input_value">
          {pAnswers.map((pa, i) => {
            return (
              <label key={i + 1100}>
                <input
                  type="radio"
                  // checked={i}
                  name="answers"
                  onChange={onChange}
                  value={i}
                  // key={i + 1000}
                />
                {`${pa}`}
              </label>
            );
          })}
        </div>

        <div id="btnSubmit">
          <button onClick={onClick} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
