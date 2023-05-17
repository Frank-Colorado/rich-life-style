const withAuth = require("../utils/auth");
const router = require("express").Router();
const { displayHome } = require("../../controllers/htmlController");

router.get("/", withAuth, displayHome);

module.exports = router;
