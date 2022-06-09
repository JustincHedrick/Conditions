const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  users: {},
  crag: {type: String, required: true},
  lat: {type: Number, required: true},
  long: {type: Number, required: true},
  current: {Type: String},
  weather: [{type: String}],
  hourly: [{type: String}],
})

module.exports = mongoose.model('Weather', weatherSchema);