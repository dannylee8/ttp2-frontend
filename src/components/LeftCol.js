import React from 'react'

function LeftCol (props) {
  return (
    <div className='column left'>
      {console.log(props.modeStatus)}
      {props.modeStatus === 'transactions' ? 'Left' : null}
    </div>
  )
}

export default LeftCol;