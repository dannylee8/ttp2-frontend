import React from 'react'

function RightCol (props) {
  return (
    <div className='column right'>
      {console.log(props.modeStatus)}
      {props.modeStatus === 'portfolio' ? 'Right' : null}
    </div>
  )
}

export default RightCol;
