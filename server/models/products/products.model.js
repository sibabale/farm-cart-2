var moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const Products = require('./products.mongo')

async function addNewProduct(product) {
  const id =  uuidv4();
  const newProduct = await Products.create({...product, id, created_at: moment().format()})
  return newProduct;
};

async function getAllProducts() {
  try {
    const products = await Products.find();
    return products
  } catch (error) {
    console.error(error);
    return error
  }
};

async function getProductById(productId) {
  try {
    const product = await Products.findById({_id: `${productId}` })
    return product
    } catch (error) {
      console.error(error);
    }
};

async function getProductsBySubCategory(subCategory) {
  try {
    const productsBySubCategory = await Products.find({sub_category:  subCategory});
    return productsBySubCategory;
  } catch (error) {
    console.error(error);
  }
};

async function getProductsByMainCategory(mainCategory) {
  try {
    const productsByMainCategory = await Products.find({main_category:  mainCategory});
    return productsByMainCategory;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addNewProduct,
  getProductById,
  getAllProducts,
  getProductsBySubCategory,
  getProductsByMainCategory
};