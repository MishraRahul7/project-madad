import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logOutRequest
} from "../slice/authSlice";

function* sendLoginRequestListner(action) {
  try {
    const basePath = process.env.REACT_APP_BASE_URL;
    let path = `${basePath}auth/api/v1/em/login`;
    const response = yield call(() =>
      axios.post(path, action.payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
    if (response.data.statusCode === "1011") {
      yield put(loginSuccess(response?.data));
      if (response?.data?.data?.emp?.roles?.length == 0) {
        alert("Role not assigned yet. Please contact to administrator");
        yield put(logOutRequest());
      }
    }
  } catch (error) {
    let obj = error?.response?.data;
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
      alert("Invalid User Credentials");
    } else {
      alert("Invalid User Credentials");
    }
    yield put(loginFailure(error?.response));
  }
}

function* authSaga() {
  yield takeEvery(loginRequest.type, sendLoginRequestListner);
}

export default authSaga;
