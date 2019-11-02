const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");
//@route GET api/avis
//@des   Test router
// @acces Public
router.post("/", (req, res) => {
  const { nom, prenom, userId, jobberId, message, categorie, image } = req.body;
  var newMessage = new Message({
    nom,
    prenom,
    userId,
    jobberId,
    message,
    categorie,
    image
  });

  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});
router.get("/", (req, res) => {
  //
  Message.find()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

module.exports = router;
