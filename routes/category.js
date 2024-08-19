const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Create a category
router.post('/', async (req, res) => {
  const { name, image, description, taxApplicability, tax, taxType } = req.body;
  try {
    const category = new Category({ name, image, description, taxApplicability, tax, taxType });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get category by ID or name
router.get('/:idOrName', async (req, res) => {
  const { idOrName } = req.params;
  try {
    const category = await Category.findOne({ $or: [{ _id: idOrName }, { name: idOrName }] });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit category
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const category = await Category.findByIdAndUpdate(id, updates, { new: true });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
