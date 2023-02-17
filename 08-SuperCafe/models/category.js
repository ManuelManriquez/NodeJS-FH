const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const categorySchema = new Schema({
  name: String,
  user: mongoose.ObjectId,
});

module.exports = model("category", categorySchema);
