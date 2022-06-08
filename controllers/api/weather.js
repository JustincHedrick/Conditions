const weather = require('../../models/weather')
const fetch = require('node-fetch')

module.exports = {
  getWeatherData
}

const API_URL = 'https://api.openweathermap.org/'

async function getWeatherData(req, res) {
  const weather = await fetch(`${API_URL}data/2.5/onecall?lat=${req.body.latitude}8&lon=${req.body.longitude}&units=imperial&exclude=minutely&appid=${process.env.WEATHER_KEY}`).then(res => res.json());
  res.json(weather)
  
}

