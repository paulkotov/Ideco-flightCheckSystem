import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InfoInput from './InfoInput';
import './Item.css';

export default class Item extends Component {
  static propTypes = {
    flight: PropTypes.object.isRequired,
    editFlight: PropTypes.func.isRequired,
    deleteFlight: PropTypes.func.isRequired,
    completeFlight: PropTypes.func.isRequired
  };
  
    constructor(){
    super();  
    this.state = {
        editing: false,
        id: 0,
        depCity: '',
        arrCity: '',
        planeType: '',
        time: '',
        factTime: '',
        state: ''
      }
   };

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]: '' });
    }
  }   
  
  onBtnClickHandler = (flightId) => e => {
    //e.preventDefault();
    this.setState({id: flightId});
    const depCity = this.DepCityInput.state.text;
    const arrCity = this.ArrCityInput.state.text;
    const planeType = this.PlaneTypeInput.state.text;
    const time = this.TimeInput.state.text;
    const factTime = this.FactTimeInput.state.text;
    const state = this.StateInput.state.text;
        
    this.props.editFlight(this.state.id, {
                            depCity: depCity,
                            arrCity: arrCity,
                            planeType: planeType,
                            time: time,
                            factTime: factTime,
                            state: state});
    this.setState({ editing: false });
  }

  render() {
    const { flight, completeFlight, deleteFlight } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <div className="edit">
          <InfoInput text={flight.data.depCity}
                      ref={input => this.DepCityInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'depCityIsEmpty')}/>
          <InfoInput text={flight.data.arrCity}
                      ref={input => this.ArrCityInput = input} 
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'arrCityIsEmpty')}/>
          <InfoInput text={flight.data.planeType} 
                      ref={input => this.PlaneTypeInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'planeTypeIsEmpty')}/> 
          <InfoInput text={flight.data.time}
                      ref={input => this.TimeInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'timeIsEmpty')}/>
          <InfoInput text={flight.data.factTime}
                      ref={input => this.FactTimeInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'factTimeIsEmpty')} />
          <InfoInput text={flight.data.state} 
                      ref={input => this.StateInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'stateIsEmpty')} />
          <button className="Save" 
                      onClick={this.onBtnClickHandler(flight.id)} > Save </button>            
        </div>
    );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={flight.completed}
                 onChange={() => completeFlight(flight.id)} />
          <label>
            {`Flight Information: FlightID: ${flight.id},
                                  Departure: ${flight.data.depCity}, 
                                  Arrival: ${flight.data.arrCity},
                                  Plane: ${flight.data.planeType},
                                  Time: ${flight.data.time},
                                  FactTime: ${flight.data.factTime},
                                  State: ${flight.data.state}
            `}                  
          </label>
          <button className="editFlight" 
                  onClick={() => {this.setState({ editing: true })}} > Edit </button>
          <button className="delete" 
                  onClick={() => deleteFlight(flight.id)} > Delete </button>
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: flight.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
} 
