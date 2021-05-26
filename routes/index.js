var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/chef', function(req, res, next) {
  res.render('chef', { title: 'Read about a chef'});
});

router.get('/recipes', function(req, res, next) {
  res.render('recipes', { title: 'A few recipes'});
});

router.get('/biscuits', function(req, res, next) {
  res.render('biscuits', { title: 'Buttermilk Biscuits!'});
});

router.get('/naan', function(req, res, next) {
  res.render('naan', { title: 'Fresh Naan!'});
});

router.get('/strawbPie', function(req, res, next) {
  res.render('strawbPie', { title: 'Strawberry Pie!'});
});

module.exports = router;
