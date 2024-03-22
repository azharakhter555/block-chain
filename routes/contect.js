var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/contact', { title: 'Your Page Title', body: 'Your page content' });
});

module.exports = router;
