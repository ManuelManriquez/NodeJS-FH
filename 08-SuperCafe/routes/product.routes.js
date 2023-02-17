const { Router } = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = Router();

router.get("/", getProducts);
router.get("/:name", getProduct);
router.post("/", postProduct);
router.put("/:name", putProduct);
router.delete("/:name", deleteProduct);

module.exports = router;
