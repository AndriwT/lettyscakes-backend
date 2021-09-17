const express = require("express");
const Sweet = require("../models/Sweet");
const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const Sweets = await Sweet.find();
  try {
    return res.status(200).json(Sweets);
  } catch (error) {
    return res.status(500).json({ message: "Error couldn't get the sweets" });
  }
});

// GET SingleSweet
router.get("/sweet/:id", async (req, res) => {
  const { id } = req.params;
  const singleSweet = await Sweet.findById(id);
  try {
    return res.status(200).json(singleSweet);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't not get the sweet" });
  }
});

// POST Sweet
router.post("/sweet", async (req, res) => {
  const sweetToCreate = await Sweet.create(req.body);
  try {
    return res.status(201).json(sweetToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Could not create the sweet" });
  }
});

// PUT Sweet
router.put("/sweet/:id", async (req, res) => {
  const { id } = req.params;
  const sweetToUpdate = await Sweet.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(sweetToUpdate);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Couldn't update sweet, check the server" });
  }
});

// DELETE Sweet
router.delete("/Sweet/:id", async (req, res) => {
  const { id } = req.params;
  await Sweet.findByIdAndDelete(id);
  try {
    return res.json({ message: "Sweet successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: "ERROR could not delete sweet" });
  }
});

module.exports = router;
