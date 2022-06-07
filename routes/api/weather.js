const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const APIKEY = process.env.WEATHER_KEY;
const rootURL = 'https://api.openweathermap.org/'

router.get('/', function (req, res, next) {

    const latitude = req.query.latitude;
    const longitude = req.query.longitude

    if (!latitude) return res.render('index', {latitude: null});
    if (!longitude) return res.render('index', {longitude: null});

    fetch(`${rootURL}/data/2.5/onecall?lat=${latitude}8&lon=${longitude}&units=imperial&exclude=minutely&appid=${APIKEY}`)
    .then((res) => res.json())
    .then((data) => res.render('index', { data }))
    
  })