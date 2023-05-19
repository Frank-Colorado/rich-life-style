const router = require("express").Router();
const {
    createComment,
    updateComment,
    deleteComment,
} = require("../../../controllers/apiControllers/commentController.js");

// This route will be called with /api/posts (POST)
router.post("/", createComment);

// This route will be called with /api/posts/:id (PUT)
router.put("/:id", updateComment);

// This route will be called with /api/posts/:id (DELETE)
router.delete("/:id", deleteComment);

module.exports = router;