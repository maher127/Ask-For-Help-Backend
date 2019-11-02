const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");
//@route GET api/jobbers
//@des   Test router
// @acces Public

router.get("/", (req, res) => {
  //
  Categories.find()
    .then(categories => res.json(categories))
    .catch(err => console.log(err));
});
module.exports = router;
