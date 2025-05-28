const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'CSE Motors',
    layout: 'layout',
    page: 'home'  
  });
});

module.exports = router;
