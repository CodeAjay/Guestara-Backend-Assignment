const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  taxApplicability: { type: Boolean, required: true },
  tax: { type: Number, required: function() { return this.taxApplicability; } },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }
});

module.exports = mongoose.model('Item', ItemSchema);
