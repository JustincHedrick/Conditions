const express = require('express');
const router = express.Router();
const weatherCtrl = require('../../controllers/api/weather');

// GET /api/
router.post('/', weatherCtrl.getWeatherData);
// GET /api/:id
// router.get('/weather_address/:id', weatherCtrl.show)

// router.post('/search', weatherCtrl.search);

module.exports = router;