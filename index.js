const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
console.log(process.env.MONGO_DB_URI);

//routes
app.use(express.json());
app.use('/product', require('./routes/productGetterRoutes'));
app.use('/product', require('./routes/productSetterRoutes'));
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log('Database connected');
  } catch (err) {
    console.log('Error:', err.masege);
  }
};
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

connectDB();
