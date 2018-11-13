var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/', function(req, res, next) {
  // 传参方法三: Body
  console.log('===[ivandebug]===', req.body);
  res.send('received your POST data');

});

module.exports = router;
