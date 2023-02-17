const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

productSchema = new Schema({
  name: String,
  unitPrice: Number,
  category: mongoose.ObjectId,
  available: Boolean,
  user: mongoose.ObjectId,
});

module.exports = model("product", productSchema);
