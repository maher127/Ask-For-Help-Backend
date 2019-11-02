const mongoose = require("mongoose");
const AvisSchema = new mongoose.Schema({
  image: {
    type: String
  },
  userId: {
    type: String
  },
  nom: {
    type: String
  },
  prenom: {
    type: String
  },
  rating: {
    type: Number
  },
  jobberId: {
    type: String
  },
  avis: {
    type: String
  }
});
module.exports = Avis = mongoose.model("avis", AvisSchema);
