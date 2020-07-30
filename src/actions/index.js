<<<<<<< HEAD
import { DATA, SIGN_IN } from "./types";
import Axios from "axios";
import apis from "../apis/api";
import history from "../history";
export const dataApi = () => async (dispatch) => {
  const response = await Axios.get("https://source.unsplash.com/random");
=======
import {
  IMAGE_DATA,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  DELETE_DONOR,
  UPDATE_DONOR,
} from "./types";
import Axios from "axios";
import history from "../history";
import apis from "../apis/apis";

export const imageDataApi = () => async (dispatch) => {
  const response = await Axios.get("https://source.unsplash.com/");
>>>>>>> updateCode
  dispatch({
    type: IMAGE_DATA,
    payload: response.data,
  });
};
<<<<<<< HEAD
export const signIn = (values) => async (dispatch) => {
  let response;
  try {
    response = await apis.post("/user/add", values);
=======

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
>>>>>>> updateCode
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
<<<<<<< HEAD
=======

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
>>>>>>> updateCode
