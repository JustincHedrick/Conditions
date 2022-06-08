const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  Crag: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},

})