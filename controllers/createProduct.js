const { Schema, model, default: mongoose } = require('mongoose');
const productShema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
const Product = mongoose.model('Product', productShema);

async function createProduct(props) {
  console.log(props);
  const response = await Product.create({
    title: 'test',
    description: 'asdasd',
  });

  return response;
}
module.exports = createProduct;
