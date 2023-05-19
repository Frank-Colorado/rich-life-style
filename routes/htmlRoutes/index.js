const withAuth = require("../../utils/auth");
const router = require("express").Router();
const {
  displayDash,
  displayLogin,
  displaySignUp,
  displayHome,
  displayForum,
} = require("../../controllers/htmlController");

// This route will display the dashboard if the user is logged in, otherwise it will redirect the user to the login page
router.get("/", withAuth, displayDash);
// This route will display the login page
router.get("/login", displayLogin);
// This route will display the signup page
router.get("/signup", displaySignUp);
// This route will display the home page
router.get("/home", withAuth, displayHome);
// This route will display the forum page
router.get("/forum", withAuth, displayForum);

module.exports = router;
