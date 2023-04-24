import React from 'react'

function AgeDecreaseBtn(props) {
  return (
    <div className="age-decrease-btn">
      <button onClick={props.AgeDecrease}>
        Decrease Age
      </button>
    </div>
  )
}

export default AgeDecreaseBtn
