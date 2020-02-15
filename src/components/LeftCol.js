import React from 'react'
import SingleStock from './SingleStock'
import SingleTransaction from './SingleTransaction'

var commaNumber = require('comma-number')

function LeftCol (props) {
  return (
    <div className='column left'>
      <br />
      <br />
      {props.modeStatus === 'portfolio' ? 
      <>
        <h2>Portfolio (${commaNumber(props.portfolioValue)})</h2>
        <table id='stocks'>
          <tbody>
            {props.stocks.map((s) => { 
              return <SingleStock key={s.id} symbol={s.symbol} shares={s.shares} price={s.price} />
            })}
          </tbody>
        </table>
      </>
      : 
      <>
        <h2>Transactions</h2>
        <table id='stocks'>
          <tbody>
            {props.stocks.map((s) => { 
              return <SingleTransaction key={s.id} symbol={s.symbol} shares={s.shares} price={s.price} />
            })}
          </tbody>
        </table>
      </>
      }
    </div>
  )
}

export default LeftCol;