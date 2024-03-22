var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const account = req.query.account;
  console.log("avot", account);
  res.render('pages/about', { title: 'Your Page Title', body: 'Your page content' });
});

module.exports = router;
