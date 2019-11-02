const mongoose = require("mongoose");
const CategorieSchema = new mongoose.Schema({
  catName: {
    type: String
  },
  iconLink: {
    type: String
  },
  imageLink: {
    type: String
  }
});
module.exports = Categorie = mongoose.model("categorie", CategorieSchema);
