const mongoose = require('mongoose');
const productShema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});
const Product = mongoose.model('Product', productShema);

module.exports = Product;
