var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('', function(req, res, next) {
  res.render('event', { title: 'Your Page Title', body: 'Event page content' });
});

module.exports = router;
