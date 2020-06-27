import { DATA } from "./types";
import Axios from "axios";

export const dataApi = () => async (dispatch) => {
  const response = await Axios.get("https://source.unsplash.com/random");
  dispatch({
    type: DATA,
    payload: response.data,
  });
};
