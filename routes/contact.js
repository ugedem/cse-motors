const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact - CSE Motors' });
});

router.post('/', (req, res) => {
  // You can process form data here if needed
  res.render('thankyou', { title: 'Thank You - CSE Motors' });
});

module.exports = router;
