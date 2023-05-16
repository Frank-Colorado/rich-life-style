const router = require("express").Router();
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../../../controllers/userController");

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
