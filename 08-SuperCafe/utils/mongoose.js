const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/nodejscrud")
  .then(() => console.log("Mongodb connected..."))
  .catch((err) => console.log(err));
