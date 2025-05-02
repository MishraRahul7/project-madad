import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  UPDATE_USER,
  DELETE_USER
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
    case GET_USER:
    case UPDATE_USER:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGN_UP:
      return { ...state, isSignedIn: false, user: action.payload };
    case SIGN_OUT:
    case DELETE_USER:
      return { ...state, isSignedIn: false, user: null };
    default:
      return state;
  }
};
