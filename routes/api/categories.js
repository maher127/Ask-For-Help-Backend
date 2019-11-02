const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");
//@route GET api/jobbers
//@des   Test router
// @acces Public
router.post("/", (req, res) => {
  const { catName, iconLink, imageLink } = req.body;

  var newCategories = new Categories({
    catName,
    iconLink,
    imageLink
  });

  newCategories
    .save()
    .then(jobbers => res.json(jobbers))
    .catch(err => console.log(err));
});
router.get("/", (req, res) => {
  //
  Categories.find()
    .then(categories => res.json(categories))
    .catch(err => console.log(err));
});
module.exports = router;
