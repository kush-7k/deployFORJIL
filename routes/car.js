// routes/cars.js
const express = require('express');
const router = express.Router();
const carController = require('../Controllers/carController');

// Middleware to check user authentication status
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Private pages related to cars
router.get('/private-page', isAuthenticated, carController.getPrivatePage);
router.post('/cars/add', isAuthenticated, carController.addCar);
router.get('/cars/edit/:id', isAuthenticated, carController.editCarPage);
router.post('/cars/edit/:id', isAuthenticated, carController.editCar);
router.get('/cars/delete/:id', isAuthenticated, carController.confirmDeleteCar);
router.post('/cars/delete/:id', isAuthenticated, carController.deleteCar);

module.exports = router;
