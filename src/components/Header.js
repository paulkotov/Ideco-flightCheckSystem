import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoInput from './InfoInput';
import './Header.css';

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
      <div>
        <h1 className="title">Flight panel information</h1>
        <header className="header">
          Departure city:
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="Departure city" />{' '}
          Arrival city:
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="Arrival city" />{' '}
          Plane type:
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="Plane" />{' '}
          Time:               
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="Time" />{' '}
          Fact time:               
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="Fact time" />{' '}
          State:               
          <InfoInput newFlight
                        onSave={this.handler}
                        placeholder="State" />{' '}                       
        </header>
      </div>
    )
  }
}
