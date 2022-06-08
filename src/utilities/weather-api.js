import sendRequest from './send-request';

const BASE_URL = '/api/weather'

export function getWeatherData(e) {
  return sendRequest(`${BASE_URL}/${e}`)
}