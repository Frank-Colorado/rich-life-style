const withAuth = require("../../utils/auth");
const router = require("express").Router();



router.get("/", withAuth, displayHome);
router.get("/login", displayLogin);
router.get("/dashboard", displayDash);
router.get("/forum", displayForum);
router.get("/signup", displaySignUp);


module.exports = router;
