const router = require("express").Router();
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../../../controllers/userController");

router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
