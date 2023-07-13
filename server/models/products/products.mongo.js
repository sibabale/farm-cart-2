const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  sold_at: {
    type: Date,
  },
  created_at: {
    type: Date,
    required: true,
  },
  main_category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema, 'products');