import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoInput from './InfoInput';
//import classnames from 'classnames';
//import { SHOW_ALL, DEPARTURE_CITY, ARRIVAL_CITY } from '../constants/FlightFilters';
import './Footer.css';


export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  }

  constructor(){
    super()
    this.state = {
      cityFilter: ''
    };
  }
  renderFlightCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'flight found' : 'flights found'

    return (
      <span className="flights-count">
        <strong>{activeCount || 'No'}</strong> {itemWord}
      </span>
    )
  }
    onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } 
  }

  onBtnClickHandler = e => {
    e.preventDefault();
    const {onShow} = this.props;
    onShow(this.CityFilterInput.state.text);
}

  render() {
    return (
      <footer className="footer">
        {this.renderFlightCount()}
        <hr/>
        <br/>City filter: 
        <InfoInput type="text" 
                ref={input => this.CityFilterInput = input}
                onChange={this.onFieldChange.bind(this, 'CityFilterIsEmpty')}
                placeholder="Enter city" />{' '}
        <button className="Set Filter" 
                      onClick={this.onBtnClickHandler}> Set </button>   
      </footer>
    )
  }
} 
