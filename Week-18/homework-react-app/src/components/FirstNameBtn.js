import React from "react";

function FirstNameBtn(props) {
  return (
    <div className="first-name-btn">
      <button onClick={props.FirstNameChange}>
        Click to change first name
      </button>
    </div>
  );
}

export default FirstNameBtn;
