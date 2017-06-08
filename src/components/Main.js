import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, DEPARTURE_CITY, ARRIVAL_CITY } from '../constants/FlightFilters'

const FLIGHT_FILTERS = {
  [SHOW_ALL]: () => true,
  [DEPARTURE_CITY]: flight => flight.text.depCity,
  [ARRIVAL_CITY]: flight => flight.text.arrCity
}

export default class Main extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  
 constructor(){
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
    const activeCount = flight.length - completedCount

    if (flight.length) {
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
    const { flight, actions } = this.props
    const { filter } = this.state

    const filteredTodos = flight.filter(FLIGHT_FILTERS[filter])
    const completedCount = flight.reduce((count, todo) =>
      flight.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="Flights-list">
          {filteredFlights.map(todo =>
            <Item key={flight.id} flight={flight} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
} 
