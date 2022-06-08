const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  current: {},
  weather: [],
  hourly: [],
})

module.exports = mongoose.model('Weather', weatherSchema);