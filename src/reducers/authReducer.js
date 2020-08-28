import {
  SIGN_IN,
  SIGN_OUT,
  UPDATE_DONOR,
  SIGN_UP,
  GET_USER,
  GET_ALL_USER,
  DELETE_DONOR,
  FILTER_DATA
} from '../actions/types';
const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGN_UP:
      return { ...state, isSignedIn: false, user: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null };
    case DELETE_DONOR:
      return { ...state, isSignedIn: false, user: null };
    case UPDATE_DONOR:
      return { ...state, isSignedIn: true, user: action.payload };
    case GET_USER:
      return { ...state, isSignedIn: true, user: action.payload };
    case GET_ALL_USER:
      return { ...state, users: action.payload };

    case FILTER_DATA:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
