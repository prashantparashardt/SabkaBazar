import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button className="btn" onClick={props.click}>
      {props.children}
    </button>
  );
}

export default Button;
