import React, { Component } from 'react';

class RightCol extends Component {

  render() {
    return (
      // Portfolio mode, show right column bg color and dividing line
      <div className={`column ${(this.props.modeStatus === 'portfolio') ? 'right' : ''}`}>
        {this.props.modeStatus === 'portfolio' ? 
        <div className="cash-balance">
          {this.props.userobj ? `Cash Balance: $ ${parseFloat(this.props.userobj.cash).toFixed(2)}` : null}
        </div>
        : null}
      </div>
    )
  }
}

export default RightCol;
