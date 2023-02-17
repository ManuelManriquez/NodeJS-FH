const { request, response } = require("express");
const User = require("../models/user"); 

const getUsers = async(req = request, res = response) => {
  const users = await User.find();
  res.json({
    message: users,
  });
};

const getUser = async(req = request, res = response) => {
  const users = await User.find(req.params);
  res.json({
    message: users,
  });
};

const postUser = async(req = request, res = response) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({
    message: "POST User",
  });
};

const putUser = (req = request, res = response) => {
  res.json({
    message: "PUT User",
  });
};

const deleteUser = (req = request, res = response) => {
  res.json({
    message: "DELETE User",
  });
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
