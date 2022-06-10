import sendRequest from './send-request';

const BASE_URL = '/api/weather'

export function getWeatherData(data) {
  return sendRequest(`${BASE_URL}`, 'POST', data)
}

export function addWeatherData(weather) {
  return sendRequest(`${BASE_URL}/weather`, 'POST', weather)
}

export function getUserWeather() {
  return sendRequest(`${BASE_URL}/mycrags`)
}