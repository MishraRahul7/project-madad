import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slice/authSlice";
import rootSaga from "./rootSaga";
import storage from "redux-persist/lib/storage";

// Create the saga middleware
const saga = createSagaMiddleware();

// Persist config
const authPersistConfig = {
  key: "auth",
  storage
};

// Wrap the reducer with persist
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Configure store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false // Disable if persist causes warnings
    }).concat(saga)
});

// Run the saga
saga.run(rootSaga);

// Persistor for redux-persist
export const persistor = persistStore(store);
