const express = require('express');
const router = express.Router();
const {query} = require('../models/db');

/* GET open courses HTML page. */
router.get('/', async function(req, res, next) {
  try {
    const results = await query('SELECT * FROM open_courses LIMIT 5;');
    console.log(results);
    res.render('open-course', {
      title: '公开课',
      author: 'ivanxia',
      courses: results,
    }); 
  } catch(err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
