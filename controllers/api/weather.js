const Weather = require('../../models/weather')
const fetch = require('node-fetch')

module.exports = {
  getWeatherData,
  addWeatherData,
  getUserWeather
}

const API_URL = 'https://api.openweathermap.org/'

async function getWeatherData(req, res) {
  const weatherData = await fetch(`${API_URL}data/2.5/onecall?lat=${req.body.latitude}8&lon=${req.body.longitude}&units=imperial&exclude=minutely&appid=${process.env.WEATHER_KEY}`).then(res => res.json());
  res.json(weatherData)
}

async function addWeatherData(req, res) {
  let newUserWeather = new Weather(req.body)
  newUserWeather.save((err, Weather))
  if (err) {
    res.send(err)
  }
  res.json(Weather)
}

async function getUserWeather(req, res) {
  const userWeather = await Weather.find()
  // console.log(userWeather)
}