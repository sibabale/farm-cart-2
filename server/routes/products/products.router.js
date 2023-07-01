const express  = require("express");

const {
  getProduct,
  httpAddNewProduct,
  httpGetAllProducts,
} = require("./products.controller")

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
// productsRouter.get('/:id', getProduct)
productsRouter.post('/', httpAddNewProduct)

module.exports = productsRouter;