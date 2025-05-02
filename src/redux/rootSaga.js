import { all } from 'redux-saga/effects';
import authSaga from './saga/authSaga';
import userSaga from './saga/userSaga'; // <-- Import userSaga
import donorSaga from './saga/donorSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    donorSaga() // <-- Include userSaga
  ]);
}
