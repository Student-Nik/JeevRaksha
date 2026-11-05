
const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to JeevRaksha API"
  });
});

// Appointment routes
app.use("/api/v1/appointments", appointmentRoutes);

module.exports = app;
