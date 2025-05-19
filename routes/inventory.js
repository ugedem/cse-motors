const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('inventory', { title: 'Inventory - CSE Motors' });
});

module.exports = router;
