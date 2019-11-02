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
  var newMessage = new Message({
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

  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  //
  Jobbers.find()
    .then(jobbers => res.json(jobbers))
    .catch(err => console.log(err));
});
module.exports = router;
