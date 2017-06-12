import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoInput from './InfoInput';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    addFlight: PropTypes.func.isRequired
  }

    constructor(){
    super();
    this.state = {
      depCity: '',
      arrCity: '',
      planeType: '',
      time: '',
      factTime: '',
      state: ''
    };
  }
  
  handler = text => {
    if (text.length !== 0) {
      this.props.addFlight(text)
    }
  };

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]: '' });
    }
  }

  onBtnClickHandler = e => {
  e.preventDefault();
  const depCity = this.DepCityInput.state.text;
  const arrCity = this.ArrCityInput.state.text;
  const planeType = this.PlaneTypeInput.state.text;
  const time = this.TimeInput.state.text;
  const factTime = this.FactTimeInput.state.text;
  const state = this.StateInput.state.text;
      
  this.props.addFlight({depCity,
                        arrCity,
                        planeType,
                        time,
                        factTime,
                        state  
                      });
  }

  render() {
    return (
      <div>
        <h1 className="title">Flight panel information</h1>
        <header className="header">
          Departure city:
          <InfoInput newFlight
                        ref={input => this.DepCityInput = input}
                        onChange={this.onFieldChange.bind(this, 'depCityIsEmpty')}
                        placeholder="Departure city" />{' '}
          Arrival city:
          <InfoInput newFlight
                        ref={input => this.ArrCityInput = input}
                        onChange={this.onFieldChange.bind(this, 'arrCityIsEmpty')}
                        placeholder="Arrival city" />{' '}
          Plane type:
          <InfoInput newFlight
                        ref={input => this.PlaneTypeInput = input}
                        onChange={this.onFieldChange.bind(this, 'planeTypeIsEmpty')}
                        placeholder="Plane" />{' '}
          Time:               
          <InfoInput newFlight
                        ref={input => this.TimeInput = input}
                        onChange={this.onFieldChange.bind(this, 'timeIsEmpty')}
                        placeholder="Time" />{' '}
          Fact time:               
          <InfoInput newFlight
                        ref={input => this.FactTimeInput = input}
                        onChange={this.onFieldChange.bind(this, 'factTimeIsEmpty')}
                        placeholder="Fact time" />{' '}
          State:               
          <InfoInput newFlight
                        ref={input => this.StateInput = input}
                        onChange={this.onFieldChange.bind(this, 'stateIsEmpty')}
                        placeholder="State" />{' '}   
          <button className="add" 
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'>Add Flight</button>                    
        </header>
      </div>
    )
  }
}
