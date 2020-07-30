import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  DELETE_DONOR,
  UPDATE_DONOR,
} from "./types";
import history from "../history";
import apis from "../apis/apis";

export const signUp = (values) => async (dispatch) => {
  let response;
  try {
    response = await apis.post("/users", values);
    if (response.status === 201) {
      localStorage.setItem("jwt", response.data.token);
    }
    dispatch({
      type: SIGN_UP,
      payload: response.data,
    });
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
    history.push("/dashboard");
  } catch (e) {}
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
  console.log("success");
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
