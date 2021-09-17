const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

//connecting DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB..."))
  .catch(() => console.log("Error connecting to DB"));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/sweets", require("./routes/sweetRoute.js"));
app.use("/api/categories", require("./routes/categoryRoute.js"));
app.use("/api/orders", require("./routes/orderRoute.js"));

// LISTENING to port
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log("Server running...");
});
