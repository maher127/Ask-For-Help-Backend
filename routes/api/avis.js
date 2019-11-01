const express = require("express");
const router = express.Router();
const Avis = require("../../models/avis");
//@route GET api/avis
//@des   Test router
// @acces Public
router.post("/add-avis", (req, res) => {
  let avisFields = {};
  if (req.body.nom) avisFields.name = req.body.name;
  if (req.body.prenom) avisFields.prenom = req.body.prenom;
  if (req.body.rating) avisFields.rating = req.body.rating;
  if (req.body.jobberId) avisFields.jobberId = req.body.jobberId;
  if (req.body.avis) avisFields.avis = req.body.avis;

  new Avis(avisFields)
    .save()
    .then(avis => res.json(avis))
    .catch(err => console.log(err));
});
router.get("/avis", (req, res) => {
  //
  Avis.find()
    .then(avis => res.json(avis))
    .catch(err => console.log(err));
});

module.exports = router;
