import { ADD_FLIGHT, DELETE_FLIGHT, EDIT_FLIGHT, COMPLETE_FLIGHT } from '../constants/FlightTypes';


const initialState = [
  {
    data: {
      depCity: 'Ekaterinburg',
      arrCity: 'Moscow',
      planeType: 'Airbus',
      time: '00:00',
      factTime: '01:00',
      state: 'delayed'
      },
    completed: false,
    id: 0
  }
];

export default function flights(state = initialState, action) {
  switch (action.type) {
    case ADD_FLIGHT:
      return [
        {
          id: state.reduce((maxId, flight) => Math.max(flight.id, maxId), -1) + 1,
          completed: false,
          data: action.data
        },
        ...state
      ]

    case DELETE_FLIGHT:
      return state.filter(flight =>
        flight.id !== action.id
      )

    case EDIT_FLIGHT:
      return state.map(flight =>
        flight.id === action.id ?
          { ...flight, data: action.data } :
          flight
      )

    case COMPLETE_FLIGHT:
      return state.map(flight =>
        flight.id === action.id ?
          { ...flight, completed: !flight.completed } :
          flight
      )

    default:
      return state
  }
}
