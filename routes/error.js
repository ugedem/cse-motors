const express = require('express');
const router = express.Router();

router.get('/trigger-error', (req, res, next) => {
  const err = new Error('Intentional 500 error for testing purposes.');
  next(err); 
});

module.exports = router;
