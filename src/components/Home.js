import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        props.handleLogout()
        props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <div className='top-menu'>
        {props.loggedInStatus ? null : 
          <div>
            <Link to='/login'>Log In</Link>
            <br />
            <Link to='/signup'>Sign Up</Link> 
          </div>
        }
        { props.loggedInStatus ? <Link to='/logout' onClick={handleClick}><button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-log-out"></span> Log Out
        </button></Link> : null }
      </div>
    </div>
  )
};

export default Home
