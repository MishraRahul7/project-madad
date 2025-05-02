// saga/donorSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  registerDonorRequest,
  registerDonorSuccess,
  registerDonorFailure
} from '../slice/donorSlice';
import { toast } from 'react-toastify';

function* handleRegisterDonor(action) {
  try {
    const basePath = 'http://localhost:4000';
    const path = `${basePath}/users/add`; // ✅ Change as per API

    yield call(() =>
      axios.post(path, action.payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );

    yield put(registerDonorSuccess());
    alert('Registration successful!');
  } catch (error) {
    console.log('🚀 ~ function*handleRegisterDonor ~ error:', error);
    yield put(registerDonorFailure(error?.response?.data || 'Unknown error'));
    toast.error(error.response?.data?.error);
    // alert(
    //   error?.response?.data?.error || 'Registration failed. Please try again.'
    // );
  }
}

export default function* donorSaga() {
  yield takeEvery(registerDonorRequest.type, handleRegisterDonor);
}
