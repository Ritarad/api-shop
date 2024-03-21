function updateProduct() {
  const { Types } = require('mongoose');
  const {
    updateProductValidation,
  } = require('../validation/updateProductValidatiom');
  const Product = require('../models/productModel');
  async function updateProduct(id, data) {
    updateProductValidation(id, data);
    const reponse = await Product.findByIdAndUpdate(id, data);
  }

  return response;
}

module.exports = updateProduct;
