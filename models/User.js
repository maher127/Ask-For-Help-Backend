const mongoose = rquire("mongoose");
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
  image: {
    type: String
  }
});
module.exports = User = mongoose.model("user", UserSchema);
