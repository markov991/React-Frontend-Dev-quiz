import React from "react";
import "./LoadingBar.css";
const LoadingBar = (props) => {
  return (
    <div id="loading">
      <div id="loadingbox">
        <div style={{ width: `${props.percentage}%` }} id="loadbar"></div>
        <span id="percentage">{props.percentage}%</span>
      </div>
    </div>
  );
};

export default LoadingBar;
