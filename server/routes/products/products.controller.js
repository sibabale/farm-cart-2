const {
  addNewProduct, 
  getProductById, 
  getAllProducts, 
  getProductsBySubCategory,
  getProductsByMainCategory
} =  require('../../models/products.model.js')

function httpAddNewProduct (req, res) {
  const newProduct = req.body;

  newProduct.created_at = new Date(newProduct.created_at);

  addNewProduct(newProduct);

  return res.status(201).json(newProduct)
  
};

function httpGetProductById (req, res) {
  return res.status(200).json(getProductById(req.params.id))
}

function httpGetAllProducts (req, res) {
  return res.status(200).json(getAllProducts())
}

function httpGetProductsBySubCategory (req, res) {
  return res.status(200).json(getProductsBySubCategory(req.params.sub_category))
}

function httpGetProductsByMainCategory (req, res) {
  console.log(req.params.id);
  return res.status(200).json(getProductsByMainCategory(req.params.id))
}

module.exports =  {
  httpAddNewProduct,
  httpGetProductById,
  httpGetAllProducts,
  httpGetProductsBySubCategory,
  httpGetProductsByMainCategory
}