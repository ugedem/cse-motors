const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact Us - CSE Motors',
    layout: 'layout',
    page: 'contact'  
  });
});

module.exports = router;
