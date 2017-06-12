import * as types from '../constants/FlightTypes';
import * as filterTypes from '../constants/FilterTypes';

export const addFlight = data => ({ type: types.ADD_FLIGHT, payload: data });
export const deleteFlight = id => ({ type: types.DELETE_FLIGHT, id });
export const editFlight = (flightId, flightData) => ({ type: types.EDIT_FLIGHT, id: flightId, data: flightData} );
export const completeFlight = id => ({ type: types.COMPLETE_FLIGHT, payload: id });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const filterFlightsByCity = (city) => ({type: filterTypes.CITY_FILTER, payload: city});