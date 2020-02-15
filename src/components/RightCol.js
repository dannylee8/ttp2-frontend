import React, { Component } from 'react';
var commaNumber = require('comma-number')

class RightCol extends Component {

  constructor (props) {
    super(props);
    this.state = { 
      ticker: '',
      quantity: ''
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
    const {ticker, quantity} = this.state
    console.log(ticker, quantity)
    // let user = {
    //   email: email,
    //   password: password
    // }
    // axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    // .then(response => {
    //   if (response.data.logged_in) {
    //     this.props.handleLogin(response.data)
    //     this.redirect()
    //   } else {
    //     this.setState({
    //       errors: response.data.errors,
    //       email: '',
    //       password: ''
    //     })
    //   }
    // })
    // .catch(error => console.log('api errors:', error))
  };

  render() {
    const {ticker, quantity} = this.state
    return (
      // Portfolio mode, show right column bg color and dividing line
      <div className={`column ${(this.props.modeStatus === 'portfolio') ? 'right' : ''}`}>
        {this.props.modeStatus === 'portfolio' ? 
        <div className="cash-balance">
          {this.props.userobj ? `Cash Balance: $ ${commaNumber(parseFloat(this.props.userobj.cash).toFixed(2))}` : null}
        </div>
        : null}
        <br />
        <div>
          <form className="w3-container stock-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="Ticker symbol"
              className="w3-input w3-border w3-light-grey"
              type="text"
              name="ticker"
              value={ticker}
              onChange={this.handleChange}
            />
            <br />
            <input
                placeholder="Quantity"
                className="w3-input w3-border w3-light-grey"
                type="text"
                name="quantity"
                value={quantity}
                onChange={this.handleChange}
            />
            <br />
            <button className="w3-btn w3-round-large w3-blue-grey" placeholder="submit" type="submit">
              Buy
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default RightCol;
