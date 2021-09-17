const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  name: {
    type: String,
    required: false,
    unique: true,
  },
});

module.exports = model("Category", CategorySchema);
