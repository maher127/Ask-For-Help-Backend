const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");
//@route GET api/avis
//@des   Test router
// @acces Public
router.post("/add-message", (req, res) => {
  let messageFields = {};
  if (req.body.nom) messageFields.name = req.body.name;
  if (req.body.prenom) messageFields.prenom = req.body.prenom;
  if (req.body.userId) messageFields.userId = req.body.userId;
  if (req.body.jobberId) messageFields.jobberId = req.body.jobberId;
  if (req.body.message) messageFields.message = req.body.message;
  if (req.body.categorie) messageFields.categorie = req.body.categorie;
  if (req.body.image) messageFields.image = req.body.image;

  new Message(messageFields)
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});
router.get("/message", (req, res) => {
  //
  Avis.find()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

module.exports = router;
