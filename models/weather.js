const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  latitude: {type: mongoose.Types.Decimal128, required: true},
  longitude: {type: mongoose.Types.Decimal128, required: true},
  current: {Type: String},
  weather: [{type: String}],
  hourly: [{type: String}],
})

module.exports = mongoose.model('Weather', weatherSchema);