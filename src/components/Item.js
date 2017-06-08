import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InfoInput from './InfoTextInput'

export default class Item extends Component {
  static propTypes = {
    flight: PropTypes.object.isRequired,
    editFlight: PropTypes.func.isRequired,
    deleteFlight: PropTypes.func.isRequired,
    completeFlight: PropTypes.func.isRequired
  }
    constructor(){
    this.state = {
      editing: false
    }
   }

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

    let element
    if (this.state.editing) {
      element = (
        <div>
          <TextInput text={flight.text.depCity} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text.depCity)} />
          <TextInput text={flight.text.arrCity} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text.arrCity)} />
          <TextInput text={flight.text.planeType} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text.planeType)} />
          <TextInput text={flight.text.time} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text.time)} />
          <TextInput text={flight.text.factTime} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text.factTime)} />
          <TextInput text={flight.text.state} editing={this.state.editing} onSave={(text) => this.handleSave(flight.id, text)} />
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
            {flight.text}
          </label>
          <button className="delete"
                  onClick={() => deleteFlight(flight.id)} />
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
