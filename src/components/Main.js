import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './TodoItem'
//import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/FlightFilters'

const FLIGHT_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: flight => !flight.completed,
  [SHOW_COMPLETED]: flight => flight.completed
}

export default class MainSection extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

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
    const activeCount = todos.length - completedCount

    if (todos.length) {
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
