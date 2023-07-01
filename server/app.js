const cors = require('cors');
const express = require('express');

const productsRouter = require('./routes/products/products.router');

const app = express();  

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/products', productsRouter);

module.exports = app