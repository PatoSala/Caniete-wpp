var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersController.registerProcess);

router.post('/login', usersController.loginProcess);

module.exports = router;
