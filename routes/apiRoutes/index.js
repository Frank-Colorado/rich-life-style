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

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
