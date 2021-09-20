const { model, Schema } = require("mongoose");

const SweetSchema = Schema({
  name: {
    type: String,
    required: [true, "The name field is required"],
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img: { type: String },
});

module.exports = model("Sweet", SweetSchema);
