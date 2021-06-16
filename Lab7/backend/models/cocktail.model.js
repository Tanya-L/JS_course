const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  name: { type: String, required: true },
  instruction: { type: String, required: true },
  typeDrink: { type: String },
  typeGlass: { type: String },
  ingredient: { type: String },
  measure: { type: Number },
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);
module.exports = Cocktail;
