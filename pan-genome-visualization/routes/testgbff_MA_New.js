var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('testgbff_MA_New', { title: '' });
  //res.sendfile(__dirname + '/public/clienthtml/index.html');
});

module.exports = router;
