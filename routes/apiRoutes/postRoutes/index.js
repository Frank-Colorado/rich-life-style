const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
} = require("../../../controllers/apiControllers/postController.js");

// This route will be called with /api/posts (POST)
router.post("/", createPost);

// This route will be called with /api/posts/:id (PUT)
router.put("/:id", updatePost);

// This route will be called with /api/posts/:id (DELETE)
router.delete("/:id", deletePost);

module.exports = router;
