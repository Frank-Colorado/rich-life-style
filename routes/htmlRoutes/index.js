const router = require("express").Router();
const { displayHome } = require("../../controllers/htmlController");

router.get("/", displayHome);

module.exports = router;
