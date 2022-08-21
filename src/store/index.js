import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "./temperatures.store";

const store = configureStore({
  reducer: {
    temperatures: temperatureReducer,
  },
});

export default store;
