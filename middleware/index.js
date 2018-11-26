const {query} = require('../models/db');

let coursesCache = null;

module.exports.initLocals = async function(req, res, next) {
  // 将vip菜单数据存放至res.locals中
  if (!coursesCache) {
    try {
    const sql = 'SELECT * FROM kaikeba.vip_courses LIMIT 5;';
    const courses = await query(sql);
    courses.forEach(course => 
    course.cooperations = course.cooperations.split(','));
    console.log(courses);
    coursesCache = courses;
    res.locals.courses = coursesCache;
    next();
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    res.locals.courses = coursesCache;
    next();
  }
}