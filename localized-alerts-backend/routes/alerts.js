// routes/alerts.js
const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert"); // Import the Alert model

// In-memory storage for alerts (optional, replace with database logic if needed)
let alerts = [];

// Define route for creating alerts
router.post("/", (req, res) => {
  const { title, location } = req.body;
  const newAlert = { title, location };
  alerts.push(newAlert); // Save alert to in-memory array
  console.log(`Alert created: ${title} at ${location}`);
  res.status(201).send({ message: "Alert created", alert: newAlert });
});

// Define route for getting alerts
router.get("/", (req, res) => {
  res.status(200).send(alerts); // Send all alerts
});

module.exports = router;
