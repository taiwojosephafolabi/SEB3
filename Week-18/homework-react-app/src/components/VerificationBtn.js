import React from "react";

function VerificationBtn(props) {
  return (
    <div className="verification-btn">
      <button onClick={props.VerificationStatus}>
        Click to verify status
      </button>
    </div>
  );
}

export default VerificationBtn;
