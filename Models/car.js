// models/car.js

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  // Add more fields as needed
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

