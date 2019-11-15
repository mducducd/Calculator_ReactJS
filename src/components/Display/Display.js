import React    from "react";
import template from "./Display.jsx";

const Display = props => {
  const { display, input } = props.state;
  const displayClass = `display`;
  const inputClass = `input-display`;
  return (
    <div className="display-container">
      <div className={inputClass}>
        <p>{input}</p>
      </div>
      <div className={displayClass} id="display">
        {display.length > 10 ? Number(display).toExponential(6) : display}
      </div>
      <div
        className="calc-button clear-button"
        id="clear"
        onClick={props.onClick}
      >
        C
      </div>
    </div>
  );
};

export default Display;
