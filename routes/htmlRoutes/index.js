const withAuth = require("../../utils/auth");
const router = require("express").Router();

const {
  displayHome,
  displayLogin,
  displayDash,
  displayForum,
} = require("../../controllers/htmlController");

router.get("/", withAuth, displayHome);
router.get("/login", displayLogin);
router.get("/dashboard", displayDash);
router.get("/forum", displayForum);

module.exports = router;
