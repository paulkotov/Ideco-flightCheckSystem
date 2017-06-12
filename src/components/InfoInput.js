import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class InfoInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newFlight: PropTypes.bool
  }
  
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }
  
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newFlight) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'newflight': this.props.newFlight
        })}
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
} 
