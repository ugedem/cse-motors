const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about', {
    title: 'About Us - CSE Motors',
    layout: 'layout',
    page: 'about'  
  });
});

module.exports = router;
