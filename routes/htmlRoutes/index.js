// const { Post } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();
const {
  displayDash,
  displayLogin,
  displaySignUp,
  displayHome,
  displayForum,
} = require("../../controllers/htmlController");

// router.get("/forum", async (req, res) => {
//   try {
//     // Grab all posts from the Post model
//     const postData = await Post.findAll();
//     // Send it back so we can check it with Postman
//     res.status(200).json(postData);
//   } catch (err) {
//     console.error({ err });
//     res.status(500).json(err);
//   }
// });

// This route will display the dashboard if the user is logged in, otherwise it will redirect the user to the login page
router.get("/", withAuth, displayDash);
// This route will display the login page
router.get("/login", displayLogin);
// This route will display the signup page
router.get("/signup", displaySignUp);
// This route will display the home page
router.get("/home", withAuth, displayHome);
// This route will display a specific post and its comments based on the post's id
router.get("/forum/:id", withAuth, displayForum);

module.exports = router;
