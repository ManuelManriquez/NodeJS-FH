const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.port = process.env.PORT || 3000;
    this.usersPath = '/api/users';
    this.categoriesPath = '/api/categories';
    this.productsPath = '/api/products';

    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
  }
}
