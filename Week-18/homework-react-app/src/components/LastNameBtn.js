import React from "react";

function LastNameBtn(props) {
  return (
    <div className="last-name-btn">
      <button onClick={props.LastNameChange}>
        Click to change last name
      </button>
    </div>
  );
}

export default LastNameBtn;
