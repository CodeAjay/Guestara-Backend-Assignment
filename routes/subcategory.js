const express = require('express');
const router = express.Router();
const Subcategory = require('../models/Subcategory');

// Create a subcategory under a category
router.post('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  const { name, image, description, taxApplicability, tax } = req.body;
  try {
    const subcategory = new Subcategory({ name, image, description, taxApplicability, tax, categoryId });
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all subcategories
router.get('/', async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate('categoryId');
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get subcategories under a category
router.get('/category/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const subcategories = await Subcategory.find({ categoryId });
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get subcategory by ID or name
router.get('/:idOrName', async (req, res) => {
  const { idOrName } = req.params;
  try {
    const subcategory = await Subcategory.findOne({ $or: [{ _id: idOrName }, { name: idOrName }] }).populate('categoryId');
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit subcategory
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const subcategory = await Subcategory.findByIdAndUpdate(id, updates, { new: true });
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
