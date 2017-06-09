import * as types from '../constants/FlightTypes';

export const addFlight = data => ({ type: types.ADD_FLIGHT, ...data });
export const deleteFlight = id => ({ type: types.DELETE_FLIGHT, id });
export const editFlight = (id, data) => ({ type: types.EDIT_FLIGHT, id, ...data });
export const completeFlight = id => ({ type: types.COMPLETE_FLIGHT, id });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });