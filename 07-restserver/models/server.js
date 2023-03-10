const express = require("express");
const cors = require("cors");


class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.port = process.env.PORT || 3000;
    this.usuariosPath = '/api/users/';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("./public"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
