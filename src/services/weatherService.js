const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const res = await fetch(url);
  return await res.json();
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, temp_min, temp_max },
    name,
    sys: { country },
    weather,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    temp_min,
    temp_max,
    name,
    country,
    icon,
    details,
  };
};

export const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return { ...formattedCurrentWeather };
};

export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
