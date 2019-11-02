const mongoose = require("mongoose");
const JobberSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  dateNaissance: {
    type: String
  },
  region: {
    type: String
  },
  ville: {
    type: String
  },
  dateInscription: {
    type: String,
    default: Date.now
  },
  genre: {
    type: String
  },
  verfied: {
    type: Boolean
  },
  etat: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  rating: {
    type: Number
  },
  categories: {
    type: Array
  }
});
module.exports = Jobber = mongoose.model("jobber", JobberSchema);
