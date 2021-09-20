const { model, Schema } = require("mongoose");

const OrderSchema = Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Category",
  // },
  date: {
    type: Date,
    require: [true, "Date is required"],
  },
  description: {
    type: String,
  },
  // img: { type: String },
  // completion: {
  //   type: Boolean,
  //   default: false,
  //   value: "Incomplete",
  // },
});

module.exports = model("Order", OrderSchema);
