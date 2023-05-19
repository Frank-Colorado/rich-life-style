const router = require("express").Router();
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../../../controllers/apiControllers/commentController.js");

// This route will be called with /api/comments (POST)
router.post("/", createComment);

// This route will be called with /api/comments/:id (PUT)
router.put("/:id", updateComment);

// This route will be called with /api/comments/:id (DELETE)
router.delete("/:id", deleteComment);

module.exports = router;
