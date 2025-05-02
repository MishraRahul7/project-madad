import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slice/authSlice';
import userReducer from './slice/userSlice';
import donorReducer from './slice/donorSlice';
// <-- add this line
import rootSaga from './rootSaga';

// Create the saga middleware
const saga = createSagaMiddleware();

// Persist config
const authPersistConfig = {
  key: 'auth',
  storage
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Configure store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
    donor: donorReducer // <-- add user reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(saga)
});

// Run the saga
saga.run(rootSaga);

// Persistor
export const persistor = persistStore(store);
