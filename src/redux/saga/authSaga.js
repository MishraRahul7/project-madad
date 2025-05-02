import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginFailure,
  loginSuccess,
  logOutSuccess,
  setTokens,
  clearTokens
} from '../slice/authSlice';
import {
  loginRequest,
  logOutRequest,
  fetchLoggedInUserInfoRequest,
  fetchLoggedInUserInfoSuccess,
  fetchLoggedInUserInfoFailure
} from '../slice/authSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function* sendLoginRequestListener(action) {
  try {
    const response = yield call(() =>
      axios.post(`${BASE_URL}/users/login`, action.payload, {
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const data = response.data;
    yield put(setTokens({ accessToken: data.token }));
    yield put(loginSuccess({ data }));

    if (!data.user?.roles?.length) {
      alert('Role not assigned yet. Please contact administrator.');
      yield put(logOutRequest());
    }
  } catch (error) {
    alert('Invalid User Credentials');
    yield put(loginFailure(error.response));
  }
}

function* fetchLoggedInUserInfoListener() {
  try {
    const token = localStorage.getItem('jwt');
    const response = yield call(() =>
      axios.get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    );
    yield put(fetchLoggedInUserInfoSuccess(response.data));
  } catch (e) {
    yield put(fetchLoggedInUserInfoFailure());
  }
}

function* sendLogoutRequestListener() {
  try {
    const token = localStorage.getItem('jwt');
    yield call(() =>
      axios.post(`${BASE_URL}/users/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    );
    yield put(clearTokens());
    yield put(logOutSuccess());
  } catch (error) {
    console.log('Logout error:', error);
  }
}

export default function* authSaga() {
  yield takeEvery(loginRequest.type, sendLoginRequestListener);
  yield takeEvery(logOutRequest.type, sendLogoutRequestListener);
  yield takeEvery(
    fetchLoggedInUserInfoRequest.type,
    fetchLoggedInUserInfoListener
  );
}
