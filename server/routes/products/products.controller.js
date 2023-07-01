const {getAllProducts, addNewProduct} =  require('../../models/products.model.js')

function httpAddNewProduct (req, res) {
  const newProduct = req.body;

  newProduct.created_at = new Date(newProduct.created_at);

  addNewProduct(newProduct);

  return res.status(201).json(newProduct)
  
};

function httpGetAllProducts (req, res) {
  return res.status(200).json(getAllProducts())
}

module.exports =  {
  httpGetAllProducts,
  httpAddNewProduct,
}