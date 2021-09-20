const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const orders = await Order.find();
  try {
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Could not get the orders" });
  }
});

// GET single
// router.get("/order/:id", async (req, res) => {
//   const { id } = req.params;
//   const singleOrder = await Order.findById(id);
//   try {
//     return res.status(200).json(singleOrder);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Couldn't find order, server error" });
//   }
// });

// POST order
router.post("/order", async (req, res) => {
  const orderToCreate = await Order.create(req.body);

  try {
    return res.status(201).json(orderToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't place the order" });
  }
});

// PUT order
router.put("/order/:id", async (req, res) => {
  const { id } = req.params;
  const orderToUpdate = await Order.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(orderToUpdate);
  } catch (error) {
    return res.status(500).json("Error, couldn't update the order");
  }
});

// DELETE order
router.delete("/order/:id", async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);
  try {
    return res.json({ message: "Order successfully Deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Order was not deleted, check server" });
  }
});

module.exports = router;
