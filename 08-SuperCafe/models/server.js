const express = require("express");
const cors = require("cors");

require("../utils/mongoose");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usersPath = "/api/users";
    this.categoriesPath = "/api/categories";
    this.productsPath = "/api/products";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("./public"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
    this.app.use(this.categoriesPath, require("../routes/category.routes"));
    this.app.use(this.productsPath, require("../routes/product.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
