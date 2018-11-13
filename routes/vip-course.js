var express = require('express');
var router = express.Router();

/* GET open courses HTML page. */
router.get('/:course', function(req, res, next) {
  res.render('vip-course/' + req.params.course,
             {title: getTitle(res, req.params.course)});
});

router.get('/', function(req, res, next) {
  res.render('vip-course', { name: 'ivanxia' });
});

const getTitle = (res, course) => {
  let ret = '';
  res.locals.courses.forEach(c => {
    if (c.url.indexOf(course) !== -1) {
      ret = c.name;
    }
  });
  console.log(ret);
  return ret;
};
module.exports = router;
