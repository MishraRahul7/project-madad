import {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  FILTER_DATA
} from '../actions/types';

const INITIAL_STATE = {
  users: [],
  selectedUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    case GET_SINGLE_USER:
      return { ...state, selectedUser: action.payload };
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        )
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      };
    case FILTER_DATA:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
