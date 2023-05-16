const router = require("express").Router();
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../../../controllers/userController");

// This route will be called with /api/users/signup
router.post("/signup", createUser);
// This route will be called with /api/users/:id (PUT)
router.put("/:id", updateUser);
// This route will be called with /api/users/:id (DELETE)
router.delete("/:id", deleteUser);

module.exports = router;
