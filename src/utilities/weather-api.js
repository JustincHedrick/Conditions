import sendRequest from './send-request';

const BASE_URL = '/api/weather'

export function getWeatherData(data) {
  return sendRequest(`${BASE_URL}`, 'POST', data)
}