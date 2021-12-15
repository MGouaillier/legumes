const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: {
      type: String,
    },
    quantity: {
      type: String,
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
