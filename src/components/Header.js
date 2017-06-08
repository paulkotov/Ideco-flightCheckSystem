import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfoInput from './InfoInput'

export default class Header extends Component {
  static propTypes = {
    addFlight: PropTypes.func.isRequired
  }

  handler = text => {
    if (text.length !== 0) {
      this.props.addFlight(text)
    }
  };

  render() {
    return (
      <header className="header">
        <h1>Flight panel information</h1>
        <InfoInput newFlight
                       onSave={this.handler}
                       placeholder="Please enter your flight information" />
      </header>
    )
  }
}
