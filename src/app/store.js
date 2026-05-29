import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/slices/authSlice";
import registrationReducer from "../redux/slices/registrationSlice";
import wellnessReducer from "../redux/slices/wellnessSlice";

import {
  persistReducer,
  persistStore,
} from "redux-persist";

import storage from "../utils/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  wellness: wellnessReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "registration"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);