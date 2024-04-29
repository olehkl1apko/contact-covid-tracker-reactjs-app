import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
