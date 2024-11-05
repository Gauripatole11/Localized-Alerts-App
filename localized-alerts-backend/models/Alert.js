// models/Alert.js
const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  message: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
