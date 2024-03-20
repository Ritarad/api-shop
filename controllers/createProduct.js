const Product = require('../models/productModel');
const {
  createProductValidation,
} = require('../validation/createProductValidation');

async function createProduct(props) {
  console.log(props);

  createProductValidation(props);

  const response = await Product.create({
    title: props.title,
    description: props.description,
  });

  return response;
}
module.exports = createProduct;
