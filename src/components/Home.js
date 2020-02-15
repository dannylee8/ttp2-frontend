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
      <div className='top-menu'>
        <span className='logo'>TTP Stock Trade</span>
        { props.loggedInStatus ? <Link to='/logout' onClick={handleClick}><button type="button" className="w3-btn w3-round-large w3-blue-grey">
          <span className="glyphicon glyphicon-log-out"></span> Log Out </button></Link> : null }
      </div>
      {props.loggedInStatus ? 
        <div className='row'>
          <div className='column left'>
              Left
          </div>
          <div className='column right'>
              Right
          </div>
        </div>
        :
        null
      }
    </div>
  )
};

export default Home
