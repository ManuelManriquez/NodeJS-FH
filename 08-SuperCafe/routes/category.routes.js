const { Router } = require("express");
const {
  getCategories,
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const router = Router();

router.get("/", getCategories);
router.get("/:name", getCategory);
router.post("/", postCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
