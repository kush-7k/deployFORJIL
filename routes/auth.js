// routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// Signup route
router.post('/signup', (req, res) => {
  // Handle signup logic and redirect to login
  res.redirect('/login');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Export the router
module.exports = router;
