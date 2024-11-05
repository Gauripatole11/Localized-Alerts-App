// server.js

const cors = require("cors");

const express = require("express");
const alertRoutes = require("./routes/alerts"); // Import your alert routes

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON bodies

// Use the alert routes
app.use("/api/alerts", alertRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
