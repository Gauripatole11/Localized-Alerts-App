const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert");

// In-memory storage for alerts
let alerts = [];

// Define route for creating alerts
router.post("/", (req, res) => {
  const { title, location } = req.body;
  const newAlert = { title, location };
  alerts.push(newAlert); // Save alert to in-memory array
  console.log(`Alert created: ${title} at ${location}`);
  res.status(201).send({ message: "Alert created", alert: newAlert });
});

// Defining route for getting alerts
router.get("/", (req, res) => {
  res.status(200).send(alerts); // Sending all alerts
});

module.exports = router;
