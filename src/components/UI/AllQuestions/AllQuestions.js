import React from "react";
import "./AllQuestions.css";

const AllQuestions = (props) => {
  return <div className="questions">{props.children}</div>;
};

export default AllQuestions;
