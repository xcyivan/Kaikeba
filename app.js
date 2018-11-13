var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {initLocals} = require('./middleware');

var indexRouter = require('./routes/index');
var openCourseRouter = require('./routes/open-course');
var vipCourseRouter = require('./routes/vip-course');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// __dirname 当前文件的绝对路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 应用、指定中间件，线性处理
app.use(logger('dev')); // 日志
app.use(express.json()); // 获取ajax传递json
app.use(express.urlencoded({ extended: false })); // 解析url参数
app.use(cookieParser()); // cookie解析
// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')));

// 导入自定义的中间件
app.use(initLocals);

// 导入路由模块，也是中间件
app.use('/', indexRouter);
app.use('/open-course', openCourseRouter);
app.use('/vip-course', vipCourseRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
