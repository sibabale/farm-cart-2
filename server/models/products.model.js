var moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const Products = require('../data/products.json');

const products = [...Products];

function addNewProduct(product) {
  const id =  uuidv4();
  return products.push({...product, id, created_at: moment().format()});
};

function getAllProducts() {
  return products;
};

function getProductById(productId) {
  return products.find(item =>  item.id === Number(productId));
};

function getProductsBySubCategory(subCategory) {
  return products.filter(item => item.sub_category === subCategory);
};

function getProductsByMainCategory(mainCategory) {
  return products.filter(item => item.main_category === mainCategory)
};

module.exports = {
  addNewProduct,
  getProductById,
  getAllProducts,
  getProductsBySubCategory,
  getProductsByMainCategory
};