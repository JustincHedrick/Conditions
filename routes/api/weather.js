const express = require('express');
const router = express.Router();
const weatherCtrl = require('../../controllers/api/weather');

// post 
router.post('/', weatherCtrl.getWeatherData);
// Post
router.post('/', weatherCtrl.addWeatherData); 
//Get
router.get('/mycrags', weatherCtrl.getUserWeather);

module.exports = router;