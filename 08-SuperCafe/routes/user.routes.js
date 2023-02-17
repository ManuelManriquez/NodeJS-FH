const { Router } = require("express");
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = Router();

router.get("/", getUsers);
router.get("/:name", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

module.exports = router;