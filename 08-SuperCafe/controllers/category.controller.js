const { request, response } = require("express");
const Category = require("../models/category");

const getCategories = async (req = request, res = response) => {
  const categories = await Category.find();
  res.json({
    message: categories,
  });
};

const getCategory = async (req = request, res = response) => {
  const categories = await Category.find(req.params);
  res.json({
    message: categories,
  });
};

const postCategory = async(req = request, res = response) => {
  const newCategory = await new Category(req.body);
  await newCategory.save();
  res.json({
    message: "POST Category",
  });
};

const putCategory = (req = request, res = response) => {
  res.json({
    message: "PUT Category",
  });
};

const deleteCategory = (req = request, res = response) => {
  res.json({
    message: "DELETE Category",
  });
};

module.exports = {
  getCategories,
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
};
