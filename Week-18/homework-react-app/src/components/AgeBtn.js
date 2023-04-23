import React from "react";

function AgeBtn(props) {
  return (
    <div className="age-btn">
      <button onClick={props.AgeChange}>
        Click to change age
      </button>
    </div>
  );
}

export default AgeBtn;
