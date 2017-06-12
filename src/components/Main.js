import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Footer from './Footer';
//import { SHOW_ALL, CITY_FILTER } from '../constants/FilterTypes';

// const FILTERS = {
//   [SHOW_ALL] : () => true,
//   [CITY_FILTER] : flight => flight.data.depCity
// };

export default class Main extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  
 constructor(){
  super();
  this.state = { 
    filter: 'SHOW_ALL',
    city: '' 
  };
}
  
  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ 
      filter: 'CITY', 
      city: filter })
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
    const { flights } = this.props;
    const { city } = this.state;
    //const {filterFlightsByCity} = actions.filterFlightsByCity;
    const activeCount = flights.length - completedCount;

    if (flights.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={city}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }
    
  resetFilter = () => {
    this.setState({
      filter: 'SHOW_ALL',
      city: ''
    });
  }

  render() {
    const { flights, actions } = this.props;
//  const { filter } = this.state;
    const filteredFlights = flights.filter((elem) => {
      switch(this.state.filter){     
        case 'CITY': 
          console.log(elem.data.depCity);
          return ((elem.data.depCity || elem.data.arrCity) === this.state.city) ? true : false;

        default:
          return true;
      }
     }); 
    const completedCount = flights.reduce((count, flight) =>
      flight.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        <hr/>
        {this.renderToggleAll(completedCount)}
        <ul className="Flights-list">
          {filteredFlights.map(flight =>
            <Item key={flight.id} flight={flight} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
        <button onClick={this.resetFilter}> Reset </button>
      </section>
    )
  }
} 
