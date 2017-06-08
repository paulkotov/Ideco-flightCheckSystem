import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import * as FlightActions from '../actions'

const App = ({flights, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainS flight={flight} actions={actions} />
  </div>
);

App.propTypes = {
  flights: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(FlightActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App) 
