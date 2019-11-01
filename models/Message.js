const mongoose = rquire("mongoose");
const MessageSchema = new mongoose.Schema({
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
  categorie: {
    type: String
  },
  jobberId: {
    type: String
  },
  message: {
    type: String
  }
});
module.exports = Message = mongoose.model("message", MessageSchema);
