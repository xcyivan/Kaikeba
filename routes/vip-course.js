var express = require('express');
var router = express.Router();

/* GET open courses HTML page. */
router.get('/:course', function(req, res, next) {
  const title = getTitle(res, req.params.course);
  if (title) {
    res.render('vip-course/' + req.params.course,
             {title});  
  } else {
    // 错误处理方1： 404页面
    // 进入错误刘恒，传递error obj
    // 对应app.js最后两个中间件，如果不传递err obj，则进入404，否则500
    // next(new Error('No matching course title!'));

    // 错误处理方式2：重定向
    res.redirect('/');
  }
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
