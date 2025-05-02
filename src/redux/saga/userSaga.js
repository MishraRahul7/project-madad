import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from '../slice/userSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

// Helper for Auth headers
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
  }
});

// Create user
function* handleCreateUser(action) {
  try {
    const response = yield call(() =>
      axios.post(`${BASE_URL}/users/add`, action.payload)
    );
    yield put(createUserSuccess(response.data));
  } catch (error) {
    yield put(createUserFailure(error.response?.data));
  }
}

// Get all users
function* handleFetchUsers(action) {
  try {
    const data = action.payload;
    const response = yield call(() =>
      axios.post(`${BASE_URL}/users`, { data })
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.response?.data));
  }
}

// Update user
function* handleUpdateUser(action) {
  try {
    const response = yield call(() =>
      axios.patch(`${BASE_URL}/users/me`, action.payload, authHeader())
    );
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(updateUserFailure(error.response?.data));
  }
}

// Delete user
function* handleDeleteUser() {
  try {
    yield call(() => axios.delete(`${BASE_URL}/users/me`, authHeader()));
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFailure(error.response?.data));
  }
}

export default function* userSaga() {
  yield takeEvery(fetchUsersRequest.type, handleFetchUsers);
  yield takeEvery(createUserRequest.type, handleCreateUser);
  yield takeEvery(updateUserRequest.type, handleUpdateUser);
  yield takeEvery(deleteUserRequest.type, handleDeleteUser);
}
