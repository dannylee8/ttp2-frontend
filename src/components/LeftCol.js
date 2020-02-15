import React from 'react'

function LeftCol (props) {
  return (
    <div className='column left'>
      {console.log(props.stocks)}
      {props.modeStatus === 'transactions' ? 'Left' : null}
    </div>
  )
}

export default LeftCol;