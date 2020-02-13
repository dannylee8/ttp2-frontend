import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

redirect = () => {
    this.props.history.push('/')
  }

handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }

render() {
    const {username, email, password, password_confirmation} = this.state
    return (
      <div className='center'>
        <div id="login_div">
          <h4>Sign Up</h4>
          <form class="w3-container" onSubmit={this.handleSubmit}>
            <input
              placeholder="username"
              className="w3-input w3-border w3-light-grey"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input
              placeholder="email"
              className="w3-input w3-border w3-light-grey"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input 
              placeholder="password"
              className="w3-input w3-border w3-light-grey"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input
              placeholder="password confirmation"
              className="w3-input w3-border w3-light-grey"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
          
            <button className="w3-btn w3-blue-grey" placeholder="submit" type="submit">
              Sign Up
            </button>
            <div>
              or <Link to='/login'>login</Link>
            </div>
          </form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;