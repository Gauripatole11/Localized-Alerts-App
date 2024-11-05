// backend/routes/alerts.js
const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert");

// POST /api/alerts - Create a new alert
router.post("/", async (req, res) => {
  try {
    const { location, alertMessage } = req.body;
    const newAlert = new Alert({ location, alertMessage });
    await newAlert.save();
    res.status(201).json(newAlert);
  } catch (error) {
    res.status(500).json({ error: "Error creating alert" });
  }
});

// GET /api/alerts - Get all alerts
router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching alerts" });
  }
});

module.exports = router;
