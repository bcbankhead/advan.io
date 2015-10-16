var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Barry Bankhead | Full Stack Development | Industrial Design' });
});

module.exports = router;
