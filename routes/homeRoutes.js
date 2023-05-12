const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res) => {
  console.log("working");
  res.send("Hello");
});
