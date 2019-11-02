const express = require("express");
const router = express.Router();
const Jobbers = require("../../models/Jobbers");
//@route GET api/jobbers
//@des   Test router
// @acces Public
router.post("/", (req, res) => {
  const {
    nom,
    prenom,
    userName,
    ville,
    region,
    genre,
    etat,
    email,
    password,
    dateInscription,
    verfied,
    description,
    categories
  } = req.body;
  var newJobber = new Jobber({
    nom,
    prenom,
    userName,
    ville,
    region,
    genre,
    etat,
    email,
    password,
    dateInscription,
    verfied,
    description,
    categories
  });

  newJobber
    .save()
    .then(jobbers => res.json(jobbers))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  //
  Jobbers.find()
    .then(jobbers => res.json(jobbers))
    .catch(err => console.log(err));
});
module.exports = router;
