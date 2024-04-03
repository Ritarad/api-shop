const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

//routes
app.use(cors());
app.use(express.json());

app.use('/product', require('./routes/productGetter.routes'));
app.use('/product', require('./routes/productSetter.routes'));
app.use('/user', require('./routes/user.routes'));
app.get('/', (req, res) => res.send('Express on Vercel'));

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
