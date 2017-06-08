import { ADD_FLIGHT, DELETE_FLIGHT, EDIT_FLIGHT, COMPLETE_FLIGHT } from '../constants/ActionTypes';

const initialState = [
  {
    text: {
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
]

export default function flights(state = initialState, action) {
  switch (action.type) {
    case ADD_FLIGHT:
      return [
        {
          id: state.reduce((maxId, flight) => Math.max(flight.id, maxId), -1) + 1,
          completed: false,
          text: action.text
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
          { ...flight, text: action.text } :
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
