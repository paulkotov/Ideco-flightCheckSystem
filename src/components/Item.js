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
  
    constructor(props){
    super(props);  
    this.state = {
        editing: false,
          text: {
          depCity: '',
          arrCity: '',
          planeType: '',
          time: '',
          factTime: '',
          state: ''
        }
    }
   };

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteFlight(id)
    } else {
      this.props.editFlight(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { flight, completeFlight, deleteFlight } = this.props

    let element;
    if (this.state.editing) {
      element = (
        <div className="edit">
          <InfoInput text={flight.data.depCity} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.depCity)} 
          /><br/>
          <InfoInput text={flight.data.arrCity} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.arrCity)} 
          /><br/>
          <InfoInput text={flight.data.planeType} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.planeType)} 
          /><br/>
          <InfoInput text={flight.data.time} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.time)} 
           /><br/>
          <InfoInput text={flight.data.factTime} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.factTime)} /><br/>
          <InfoInput text={flight.text.state} 
                      editing={this.state.editing} 
                      onSave={(text) => this.handleSave(flight.id, flight.data.state)} />
        </div>
    );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={flight.completed}
                 onChange={() => completeFlight(flight.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {`Flight Information: FlightID: ${flight.id},
                                  Departure: ${flight.data.depCity}, 
                                  Arrival: ${flight.data.arrCity},
                                  Plane: ${flight.data.planeType},
                                  Time: ${flight.data.time},
                                  FactTime: ${flight.data.factTime},
                                  State: ${flight.data.state}
            `}                  
          </label>
          <button className="delete" 
                  onClick={() => deleteFlight(flight.id)} >Delete</button>
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
