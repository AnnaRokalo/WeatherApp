import axios from 'axios'; //library for ajax requests

const API_KEY = '435c006495c4130092d1bbca352b96b4';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=metric`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}