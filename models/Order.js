const { model, Schema } = require("mongoose");

const OrderSchema = Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    unique: false,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    unique: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  description: {
    type: String,
  },
  img: { type: String },
});

module.exports = model("Order", OrderSchema);
