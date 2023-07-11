var moment = require('moment');
const { v4: uuidv4 } = require('uuid');
// import { uid } from 'uid';

const product = {
  "id": 1234423432,
  "owner": {
    "uid": "121212121232",
    "verified": false,
    "personal_information": {
      "image": "https://shorturl.at/cjlG2",
      "email": "jd@email.com",
      "last_name": "Doe",
      "first_name": "John",
      "cell_number": "081 317 0529"
    },
    "location": {
      "city": "Carmineton",
      "country": "Elnahaven",
      "zip_code": "87617",
      "latitude": "-58.3066",
      "longitude": "-12.0041"
    }
  },
  "breed": "Boran",
  "price": 50000,
  "title": "Boran Bull",
  "images": [
    "https://bit.ly/41C5Ri9", 
    "https://bit.ly/3or8DIH", 
    'https://shorturl.at/euwHK',
    "https://shorturl.at/sUYZ6",
    "https://shorturl.at/rvO39"
  ],
  "weight": 200,
  "sold_at": null,
  "created_at": "20 Jan 2023",
  "category": {
    "main": "animals",
    "sub": "cows"
  },
  "quantity": 3,
  "description": "Fugiat quis et eu esse reprehenderit pariatur dolore commodo cillum.d",
};

const products = new Map();

products.set(product.id, product);

function addNewProduct(product) {
  const id =  uuidv4();

  return products.set(
    id,
    Object.assign(product, {
      id, 
      created_at: moment().format()
    })
  );
  
};

function getAllProducts() {
  return Array.from(products.values());
};

module.exports = {
  addNewProduct,
  getAllProducts
};