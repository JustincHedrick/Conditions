const express = require('express');
const router = express.Router();
const weatherCtrl = require('../../controllers/api/weather');

// Post 
router.post('/', weatherCtrl.getWeatherData);
// Post
router.post('/weather', weatherCtrl.addWeatherData); 
//Get
router.get('/', weatherCtrl.getUserWeather);
// Delete
router.delete('/:id', weatherCtrl.deleteUserWeather);

module.exports = router;