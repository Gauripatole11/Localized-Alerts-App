// server.js
const express = require("express");
const cors = require("cors");
const alertRoutes = require("./routes/alerts"); // Import your alert routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use the alert routes
app.use("/api/alerts", alertRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
