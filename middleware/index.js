module.exports.initLocals = function(req, res, next) {
  // 将vip菜单数据存放至res.locals中
  res.locals.courses = [
    {
      url: '/vip-course/web',
      icon: 'https://img.kaikeba.com/web_menu.png',
      name: 'WEB全栈架构师',
      desc: '课程深度对标百度',
    },
    {
      url: '/vip-course/python',
      icon: 'https://img.kaikeba.com/python_menu.png',
      name: 'python爬虫',
      desc: '课程深度对标阿里',
    },
  ];
  next();
}