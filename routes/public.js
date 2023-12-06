// routes/public.js
const express = require('express');
const router = express.Router();
const Car = require('../Models/car');

// Public page displaying a list of cars
router.get('/public', async (req, res) => {
  try {
    const cars = await Car.find();
    res.render('public', { cars });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
