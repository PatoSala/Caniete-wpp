var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check', (req, res) => {
  res.send(req.session.userLogged);
});

router.get('/register', usersController.registerForm);

router.get('/login', usersController.loginForm);

module.exports = router;
