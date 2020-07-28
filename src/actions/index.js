import { DATA, SIGN_IN } from "./types";
import Axios from "axios";
import apis from "../apis/api";
import history from "../history";
export const dataApi = () => async (dispatch) => {
  const response = await Axios.get("https://source.unsplash.com/random");
  dispatch({
    type: DATA,
    payload: response.data,
  });
};
export const signIn = (values) => async (dispatch) => {
  let response;
  try {
    response = await apis.post("/user/add", values);
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
