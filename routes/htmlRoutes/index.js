const withAuth = require("../utils/auth");
const router = require("express").Router();

const { displayHome, displayDash, displayForum } = require("../../controllers/htmlController");

router.get("/", displayHome);
router.get("/dashboard", displayDash);
router.get("/forum", displayForum);

module.exports = router;
