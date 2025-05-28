const inventoryModel = require('../models/inventoryModel');
const { handle404 } = require('../utilities/errorHandler');

exports.getAllInventory = async (req, res) => {
  try {
    const items = await inventoryModel.getAllInventory();
    res.render('inventory', { title: 'Inventory', items });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getInventoryDetail = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await inventoryModel.getInventoryById(id);
    if (!item) return handle404(req, res);
    res.render('detail', { title: `Details - ${item.make} ${item.model}`, item });
  } catch (err) {
    next(err); 
  }
};
