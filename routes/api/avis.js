const express = require("express");
const router = express.Router();
const Avis = require("../../models/avis");
//@route GET api/avis
//@des   Test router
// @acces Public
router.post("/", (req, res) => {
  const { nom, prenom, rating, jobberId, avis } = req.body;
  var newAvis = new Avis({
    nom,
    prenom,
    rating,
    jobberId,
    avis
  });
  newAvis
    .save()
    .then(avis => res.json(avis))
    .catch(err => console.log(err));
});
router.get("/", (req, res) => {
  //
  Avis.find()
    .then(avis => res.json(avis))
    .catch(err => console.log(err));
});

module.exports = router;
