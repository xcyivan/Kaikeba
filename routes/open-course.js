var express = require('express');
var router = express.Router();

/* GET open courses HTML page. */
router.get('/', function(req, res, next) {
  res.render('open-course', 
      { author: 'ivanxia' });
});

module.exports = router;
