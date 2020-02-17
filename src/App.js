import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true, 
      isLoggedIn: false,
      user: {},
      mode: '',
      stocks: [],
      portfolioCost: 0,
      portfolioCurrentValue: 0
    };
  }

  componentDidMount() {
    this.loginStatus()
  }

  setMode = (modeText) => {
    this.setState({
      mode: modeText
    })
  }

  updateUser = (user) => {
    this.setState({
      user: user
    })
  }

  updateStocks = (stock, latestPrice) => {
    this.setState({
      stocks: [...this.state.stocks, { ...stock, current_price: latestPrice } ]
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error =>{
      console.log('api errors:', error)
    })
  }

  handleLogin = (data) => {
    this.setState((prevState, props) => ({
      isLoggedIn: true,
      user: data.user, 
      mode: 'portfolio'
    }))
    if (data.user) {
      this.getUserStocks(data.user.id)
    }
  }

  getUserStocks = (id) => {
    fetch(`http://localhost:3001/users/${id}`)
    .then (resp => resp.json())
    .then (json => {
      this.setState((prevState, props) => ({
        stocks: json.stocks,
        portfolioCost: json.portfolio_cost,
        portfolioCurrentValue: json.portfolio_current_value
      }))
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return (
      <div id='wrapper'>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              path='/' 
              render={props => (
              <Home {...props} {...this.state} updateUser={this.updateUser} updateStocks={this.updateStocks} handleLogout={this.handleLogout} userobj={this.state.user} setMode={this.setMode} modeStatus={this.state.mode} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;