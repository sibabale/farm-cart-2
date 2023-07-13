const express  = require("express");

const {
  httpAddNewProduct,
  httpGetAllProducts,
  httpGetProductById,
  httpGetProductsBySubCategory,
  httpGetProductsByMainCategory
} = require("./products.controller")

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
productsRouter.post('/', httpAddNewProduct)
productsRouter.get('/:main_category/:sub_category/:id', httpGetProductById)
productsRouter.get('/:main_category/:sub_category', httpGetProductsBySubCategory)
productsRouter.get('/:main_category', httpGetProductsByMainCategory)

module.exports = productsRouter;