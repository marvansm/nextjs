const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
