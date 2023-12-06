var express = require('express');
var router = express.Router();

// Placeholder user data (replace this with a database)
const users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user signup. */
router.post('/signup', function(req, res, next) {
  const { username, password } = req.body;

  // Check if username is already taken
  if (users.some(user => user.username === username)) {
    return res.status(400).send('Username already taken');
  }

  // Save the new user (you should hash the password in a real application)
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).send('User signed up successfully');
});

/* POST user login. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body;

  // Check if the user exists
  const user = users.find(user => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).send('Invalid username or password');
  }

  // Here you might want to use a more secure method for session management, like JWT
  req.session.user = user;

  res.send('User logged in successfully');
});

/* GET user logout. */
router.get('/logout', function(req, res, next) {
  // Clear the session (assuming you are using express-session for session management)
  req.session.destroy();

  res.send('User logged out successfully');
});

module.exports = router;
