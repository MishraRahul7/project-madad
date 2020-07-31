import { SIGN_IN, SIGN_OUT, UPDATE_DONOR, SIGN_UP } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log("reducer");
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGN_UP:
      return { ...state, isSignedIn: false, user: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null };
    case UPDATE_DONOR:
      return { ...state, isSignedIn: true, user: action.payload };
    default:
      return state;
  }
};
