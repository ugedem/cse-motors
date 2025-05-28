const express = require('express');
const router = express.Router();

const inventoryModel = require('../models/inventoryModel');

// List all vehicles
router.get('/', async (req, res, next) => {
  try {
    const items = await inventoryModel.getAllInventory();
    res.render('inventory', {
      title: 'Inventory - CSE Motors',
      layout: 'layout',
      page: 'inventory',
      items
    });
  } catch (err) {
    next(err);
  }
});

// Detail page for a specific vehicle by ID
router.get('/detail/:id', async (req, res, next) => {
  try {
    const item = await inventoryModel.getInventoryById(req.params.id);
    if (!item) {
      return res.status(404).render('404', { title: '404 - Page Not Found' });
    }
    res.render('detail', {
      title: `${item.year} ${item.make} ${item.model} - Details`,
      layout: 'layout',
      page: 'detail',
      item
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
