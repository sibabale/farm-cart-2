const cors = require('cors');
const express = require('express');

const productsRouter = require('./routes/products/products.router');

const app = express();  

app.use(cors({
  origin: ['http://localhost:3000', 'https://farm-cart-22b37.web.app/']
}));
app.use(express.json());

app.use('/products', productsRouter);

module.exports = app