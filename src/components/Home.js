import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        props.handleLogout()
        props.history.push('/login')
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <div className='w3-bar top-menu'>
        <span className='logo'>TTP Stock Trade</span>
        {props.loggedInStatus
          ?    
          <>       
            <Link to='/logout' onClick={handleClick}>
              <button className="w3-bar-item w3-button w3-pale-blue w3-right w3-hover-pale-red"><span className='glyphicon glyphicon-log-out' /> Log Out</button>
            </Link>
            <button className="w3-bar-item w3-button w3-light-grey w3-right w3-hover-pale-red">Portfolio</button>
            <button className="w3-bar-item w3-button w3-sand w3-right w3-hover-pale-red">Transactions</button>
          </>
          : null}
      </div>
      {props.loggedInStatus
        ? <div className='row'>
          <div className='column left'>
              Left
          </div>
          <div className='column right'>
              Right
          </div>
          </div>
        : null}
    </div>
  )
}

export default Home
