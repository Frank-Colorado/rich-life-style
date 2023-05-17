const withAuth = require("../../utils/auth");
const router = require("express").Router();
const {
  displayDash,
  displayLogin,
  displayHome,
  displayForum,
  displaySignUp,
} = require("../../controllers/htmlController");

router.get("/", withAuth, displayDash);
router.get("/login", displayLogin);
router.get("/home", displayHome);
router.get("/forum", displayForum);
router.get("/signup", displaySignUp);

module.exports = router;
