const { Schema, model } = require("mongoose");

userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  google: Boolean,
  role: String,
  img: String,
  status: Boolean,
});

module.exports = model("user", userSchema);
