const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
const alertsRoute = require("./routes/alerts");
app.use("/api/alerts", alertsRoute);

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://gpatole:${process.env.DB_PASSWORD}@newcluster.qg6ht.mongodb.net/?retryWrites=true&w=majority&appName=NewCluster`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
