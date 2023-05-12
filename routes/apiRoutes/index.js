const router = require("express").Router();

// Users
const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

// Posts
const postRoutes = require("./postRoutes");
router.use("/posts", postRoutes);

// Comments
const commentRoutes = require("./commentRoutes");
router.use("/comments", commentRoutes);

module.exports = router;
