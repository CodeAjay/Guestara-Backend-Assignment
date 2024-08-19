const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  taxApplicability: { type: Boolean, default: function() { return this.taxApplicability; } },
  tax: { type: Number, default: function() { return this.tax; } },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);
