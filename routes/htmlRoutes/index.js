const withAuth = require("../utils/auth");
const router = require("express").Router();
const {
  displayHome,
  displayLogin,
} = require("../../controllers/htmlController");

router.get("/", withAuth, displayHome);
router.get("/login", displayLogin);

module.exports = router;
