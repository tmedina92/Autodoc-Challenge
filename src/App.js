import React from "react";
import { TopButtons } from "./components/TopButtons";
import { TemperatureAndDetails } from "./components/TemperatureAndDetail";
import { getFormattedWeatherData } from "./services/weatherService";
import { useState, useEffect } from "react";
import { ShowMinMaxTemp } from "./components/ShowMinMaxTemp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTemperature } from "./store/temperatures.store";

export function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [weather, setWeather] = useState(null);

  const units = "metric";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        dispatch(addTemperature(data));
      });
    };

    fetchWeather();
  }, [query, units, dispatch]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    if (weather.temp <= 24) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br rounded-xl h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
            >
              <TopButtons setQuery={setQuery} />

              {weather && <TemperatureAndDetails weather={weather} />}
            </div>
          }
        />
        <Route
          path="/minmax"
          element={
            <div
              className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br rounded-xl  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
            >
              <ShowMinMaxTemp />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
