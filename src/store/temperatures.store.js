import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export const temperatureSlice = createSlice({
  name: "temperatures",
  initialState: [],
  reducers: {
    addTemperature(state, action) {
      const tempCollectionRef = collection(db, "temperatures");
      const { payload } = action;

      addDoc(tempCollectionRef, {
        name: payload.name,
        temp_min: payload.temp_min,
        temp_max: payload.temp_max,
        currentTemp: payload.temp,
      });

      const temperature = state.find(
        (x) =>
          x.city === payload.name &&
          x.temp_min === payload.temp_min &&
          x.temp_max === payload.temp_max
      );

      if (temperature == null) {
        state.push({
          temp_min: payload.temp_min,
          temp_max: payload.temp_max,
          city: payload.name,
        });
      }
    },
  },
});

const { actions, reducer } = temperatureSlice;
export const { addTemperature } = actions;
export default reducer;
