const { request, response } = require("express");

const getUsers = (req, res = response) => {
  res.json("get API");
};

const postUsers = (req = request, res = response) => {
  const body = req.body;
  console.log(body);
  res.json("post API");
};

const putUsers = (req, res = response) => {
    const params = req.params;
    console.log(params);
    res.json("put API");
};

const deleteUsers = (req, res = response) => {
  res.json("delete API");
};
module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  putUsers,
};
