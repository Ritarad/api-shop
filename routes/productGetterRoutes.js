const { Router } = require('express');
const { getAllProducts } = require('../controllers/index.js');
const getProductById = require('../controllers/getProductById.js');

const router = Router();

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const data = getProductById();
  res.json(data);
});

module.exports = router;
