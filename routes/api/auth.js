const express = require("express");
const router = express.Router();
//@route GET api/auth
//@des   Test router
// @acces Public
router.get("/", (req, res) => {
  res.send("Auth route");
});
module.exports = router;
