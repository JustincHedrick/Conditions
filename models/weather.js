const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  latitude: {type: mongoose.Types.Decimal128, required: true},
  longitude: {type: mongoose.Types.Decimal128, required: true},
  current: {},
  weather: [],
  hourly: [],
})

module.exports = mongoose.model('Weather', weatherSchema);