const Weather = require('../../models/weather')
const fetch = require('node-fetch')

module.exports = {
  getWeatherData,
  addWeatherData,
  getUserWeather,
  deleteUserWeather
}

const API_URL = 'https://api.openweathermap.org/'

async function getWeatherData(req, res) {
  const weatherData = await fetch(`${API_URL}data/2.5/onecall?lat=${req.body.latitude}8&lon=${req.body.longitude}&units=imperial&exclude=minutely&appid=${process.env.WEATHER_KEY}`).then(res => res.json());
  res.json(weatherData)
}

async function addWeatherData(req, res) {
  
    req.body.user = req.user._id
    const newWeather = new Weather(req.body)
    await newWeather.save()
    res.json(newWeather)
}

async function getUserWeather(req, res) {
  const userSavedWeather = await Weather.find({user: req.user._id})
  res.json(userSavedWeather)
}

async function deleteUserWeather(req, res) {
  const removeWeather = await Weather.findByIdAndDelete(req.params.id)
  res.json(removeWeather)
}