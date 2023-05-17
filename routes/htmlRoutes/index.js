const withAuth = require("../../utils/auth");
const router = require("express").Router();
const {
  displayHome,
  displayLogin,
  displayDash,
  displayForum,
  displaySignUp,
} = require("../../controllers/htmlController");

router.get("/", withAuth, displayHome);
router.get("/login", displayLogin);
router.get("/dashboard", displayDash);
router.get("/forum", displayForum);
router.get("/signup", displaySignUp);

module.exports = router;
