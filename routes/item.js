const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create an item
router.post('/', async (req, res) => {
  const { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, categoryId, subcategoryId } = req.body;
  try {
    const item = new Item({ name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, categoryId, subcategoryId });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().populate('categoryId').populate('subcategoryId');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get items under a category
router.get('/category/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const items = await Item.find({ categoryId }).populate('categoryId').populate('subcategoryId');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get items under a subcategory
router.get('/subcategory/:subcategoryId', async (req, res) => {
  const { subcategoryId } = req.params;
  try {
    const items = await Item.find({ subcategoryId }).populate('categoryId').populate('subcategoryId');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get item by ID or name
router.get('/:idOrName', async (req, res) => {
  const { idOrName } = req.params;
  try {
    const item = await Item.findOne({ $or: [{ _id: idOrName }, { name: idOrName }] }).populate('categoryId').populate('subcategoryId');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const item = await Item.findByIdAndUpdate(id, updates, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search item by name
router.get('/search', async (req, res) => {
  const { name } = req.query;
  try {
    const items = await Item.find({ name: new RegExp(name, 'i') }).populate('categoryId').populate('subcategoryId');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
