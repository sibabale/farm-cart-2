const {
  addNewProduct, 
  getProductById, 
  getAllProducts, 
  getProductsBySubCategory,
  getProductsByMainCategory
} =  require('../../models/products/products.model.js')

async function httpAddNewProduct (req, res) {

  const newProduct  = await addNewProduct( req.body);
  return res.status(201).json(newProduct)
  
};

async function httpGetProductById (req, res) {
  const product = await getProductById(req.params.id)
  return res.status(200).json(product)
}

async function httpGetAllProducts (req, res) {
  const products = await getAllProducts();
  return res.status(200).json(products);
}

async function httpGetProductsBySubCategory (req, res) {
  const productsBySubCategory = await getProductsBySubCategory(req.params.sub_category)
  return res.status(200).json(productsBySubCategory)
}

async function httpGetProductsByMainCategory (req, res) {
  const productsByMainCategory = await getProductsByMainCategory(req.params.main_category)
  return res.status(200).json(productsByMainCategory)
}

module.exports =  {
  httpAddNewProduct,
  httpGetProductById,
  httpGetAllProducts,
  httpGetProductsBySubCategory,
  httpGetProductsByMainCategory
}