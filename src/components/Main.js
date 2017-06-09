import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Footer from './Footer';
import { SHOW_ALL, DEPARTURE_CITY, ARRIVAL_CITY } from '../constants/FlightFilters';

const FLIGHT_FILTERS = {
  [SHOW_ALL]: () => true,
  [DEPARTURE_CITY]: flight => flight.data.depCity,
  [ARRIVAL_CITY]: flight => flight.data.arrCity
}

export default class Main extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  
 constructor(props){
  super(props);
  this.state = { 
    filter: SHOW_ALL 
  };
}
  
  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { flights, actions } = this.props
    if (flights.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === flights.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount) {
    const { flights } = this.props
    const { filter } = this.state
    const activeCount = flights.length - completedCount

    if (flights.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { flights, actions } = this.props
    const { filter } = this.state

    const filteredFlights = flights.filter(FLIGHT_FILTERS[filter])
    const completedCount = flights.reduce((count, flight) =>
      flight.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="Flights-list">
          {filteredFlights.map(flight =>
            <Item key={flight.id} flight={flight} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
} 
