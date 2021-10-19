const express = require('express');
const router = express.Router();
const clients = require('../clients');


const usersController = require('../controllers/usersController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {req, clients});
});

router.get('/check', (req, res) => {
  res.send(req.session.userLogged);
});

router.get('/register', usersController.registerForm);

router.get('/login', usersController.loginForm);

module.exports = router;
