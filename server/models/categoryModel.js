const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  type: {
    type: String,
    default: "Investment",
  },
  color: {
    type: String,
    default: "#fceb44",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
