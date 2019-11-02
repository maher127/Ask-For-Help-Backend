const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  lastName: {
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
  image: {
    type: String
  }
});
module.exports = User = mongoose.model("user", UserSchema);
