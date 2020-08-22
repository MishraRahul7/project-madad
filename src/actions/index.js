import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  DELETE_DONOR,
  UPDATE_DONOR,
  GET_USER,
  GET_ALL_USER,
} from "./types";
import history from "../history";
import apis from "../apis/apis";

export const signUp = (values) => async (dispatch) => {
  let response;
  try {
    response = await apis.post("/users/add", values);
    if (response.status === 201) {
      localStorage.setItem("jwt", response.data.token);
    }
    dispatch({
      type: SIGN_UP,
      payload: response.data,
    });
    alert("Thank You!");
    history.push("/");
  } catch (e) {}
};

export const signIn = (values) => async (dispatch) => {
  let response;
  try {
    response = await apis.post("/users/login", values);
    if (response.status === 200) {
      localStorage.setItem("jwt", response.data.token);
    }
    dispatch({
      type: SIGN_IN,
      payload: response.data,
    });
    history.push("/");
    console.log("Signed In");
  } catch (e) {}
};

export const getUser = () => async (dispatch) => {
  const response = await apis.get(
    "/users/me",
    (apis.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwt"))
  );
  dispatch({
    type: GET_USER,
    payload: response.data,
  });
  history.push("/profile");
};

export const getAllUser = () => async (dispatch) => {
  const response = await apis.get("/users/list");
  dispatch({
    type: GET_ALL_USER,
    payload: response.data,
  });
  history.push("/find-donor");
};

export const signOut = () => async (dispatch) => {
  await apis.post(
    "/users/logout",
    (apis.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwt"))
  );
  localStorage.removeItem("jwt");
  dispatch({
    type: SIGN_OUT,
  });
  history.push("/");
  console.log("Logout");
};

export const deleteUser = () => async (dispatch) => {
  await apis.delete(
    "/users/me",
    (apis.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwt"))
  );
  localStorage.removeItem("jwt");
  dispatch({
    type: DELETE_DONOR,
  });
  console.log("user Deleted");
  history.push("/");
};

export const updateUser = (values) => async (dispatch) => {
  const response = await apis.patch(
    "/users/me",
    values,
    (apis.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwt"))
  );
  localStorage.removeItem("jwt");
  dispatch({
    type: UPDATE_DONOR,
    payload: response.data,
  });
  history.push("/profile");
};
