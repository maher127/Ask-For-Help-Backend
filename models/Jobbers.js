const mongoose = rquire("mongoose");
const JobberSchema = new mongoose.Schema({
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
    type: string
  },
  ville: {
    type: string
  },
  dateInscription: {
    type: date,
    default: Date.now
  },
  genre: {
    type: string
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
  }
});
module.exports = Jobber = mongoose.model("jobber", JobberSchema);
