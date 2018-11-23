const {query} = require('../models/db');

let coursesCache = null;

module.exports.initLocals = function(req, res, next) {
  // 将vip菜单数据存放至res.locals中
  if (!coursesCache) {
    const sql = 'SELECT * FROM kaikeba.vip_courses LIMIT 5;';
    query(sql, null, (err, courses) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      courses.forEach(course => 
        course.cooperations = course.cooperations.split(','));
      console.log(courses);
      // Async
      coursesCache = courses;
      res.locals.courses = coursesCache;
      next();
    });
  } else {
    res.locals.courses = coursesCache;
    next();
  }
}