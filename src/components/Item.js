import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextInput from './TodoTextInput'

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
        <TextInput text={flight.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(flight.id, text)} />
      )
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
                  onClick={() => deleteFlight(todo.id)} />
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
