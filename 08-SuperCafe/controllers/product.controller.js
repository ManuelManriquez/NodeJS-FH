const { request, response } = require("express");
const Product = require("../models/product");

const getProducts = async (req = request, res = response) => {
  const products = await Product.find();
  res.json({
    message: products,
  });
};

const getProduct = async (req = request, res = response) => {
  const products = await Product.find(req.params);
  res.json({
    message: products,
  });
};

const postProduct = async (req = request, res = response) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({
    message: "POST Product",
  });
};

const putProduct = (req = request, res = response) => {
  const product = Product.findByIdAndUpdate(req.params.name, req.body);
  res.json({
    message: "PUT Product",
  });
};

const deleteProduct = (req = request, res = response) => {
  res.json({
    message: "DELETE Product",
  });
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
