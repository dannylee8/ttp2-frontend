import React from 'react'
var commaNumber = require('comma-number')

function SingleStock (props) {
  return (
    <tr>
      <td>
        {props.symbol}
      </td>
      <td>
        {props.shares} shares
      </td>
      <td>
        $ {commaNumber((props.shares * props.price).toFixed(2))}
      </td>
    </tr>
  )
}

export default SingleStock
