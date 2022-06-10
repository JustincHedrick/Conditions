const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  user: { },
  crag: {type: String, required: true},
  lat: {type: Number, required: true},
  lon: {type: Number, required: true},
  current: {},
  weather: [{}],
  hourly: [{}],
})

module.exports = mongoose.model('Weather', weatherSchema);