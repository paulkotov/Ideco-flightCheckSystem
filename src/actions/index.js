import * as types from '../constants/ActionTypes'

export const addFlight = text => ({ type: types.ADD_FLIGHT, text });
export const deleteFlight = id => ({ type: types.DELETE_FLIGHT, id });
export const editFlight = (id, text) => ({ type: types.EDIT_FLIGHT, id, text });
export const completeFlight = id => ({ type: types.COMPLETE_FLIGHT, id });
