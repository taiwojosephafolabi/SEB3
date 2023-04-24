import React from 'react'

function AgeIncreaseBtn(props) {
  return (
    <div className="age-increase-btn">
      <button onClick={props.AgeIncrease}>
        Click to increase
      </button>
    </div>
  )
}

export default AgeIncreaseBtn
