const express = require("express");
const router = express.Router();
const Jobbers = require("../../models/Jobbers");
//@route GET api/jobbers
//@des   Test router
// @acces Public

router.get("/jobbers", (req, res) => {
  //
  Jobbers.find()
    .then(jobbers => res.json(jobbers))
    .catch(err => console.log(err));
});
module.exports = router;
