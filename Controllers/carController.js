// controllers/carController.js

const Car = require('../Models/car');

exports.getPrivatePage = async (req, res) => {
  try {
    const cars = await Car.find();
    res.render('private-page', { cars });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.addCar = async (req, res) => {
  try {
    const { make, model, year } = req.body;
    await Car.create({ make, model, year });
    res.redirect('/private-page');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Implement other CRUD operations as needed
// ...

exports.confirmDeleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.render('confirm-delete-car', { car });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/private-page');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
