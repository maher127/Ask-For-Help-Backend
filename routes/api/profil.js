const express = require("express");
const router = express.Router();
//@route GET api/profil
//@des   Test router
// @acces Public
router.get("/profil", (req, re) => {
  res.send("Profil route");
});
module.exports = router;
