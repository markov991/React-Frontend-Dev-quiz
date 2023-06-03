import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = (props) => {
  const [contestorName, setContestorName] = useState("");

  useEffect(() => {
    let name = prompt("What is your name?");
    setContestorName(name);
  }, []);

  return (
    <header className="header">
      <button onClick={props.onClick} id="reset">
        Play again!!
      </button>
      <div id="contestorName">{contestorName}</div>
    </header>
  );
};

export default Header;
