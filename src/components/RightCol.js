import React from 'react'

function RightCol (props) {
  return (
    // Portfolio mode, show right column bg color and dividing line
    <div className={`column ${(props.modeStatus === 'portfolio') ? 'right' : ''}`}>
      {props.modeStatus === 'portfolio' ? 
      <div className="cash-balance">
        Cash Balance: {`$ ${parseFloat(props.user.cash).toFixed(2)}`}
      </div>
      : null}
    </div>
  )
}

export default RightCol;
