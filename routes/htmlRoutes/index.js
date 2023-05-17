const router = require("express").Router();

const { displayHome, displayDash, displayForum, displaySignUp } = require("../../controllers/htmlController");

router.get("/", displayHome);
router.get("/dashboard", displayDash);
router.get("/forum", displayForum);
router.get("/signup", displaySignUp);


module.exports = router;
