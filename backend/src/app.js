const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

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

app.use("/api/v1/auth", authRoutes);

module.exports = app;
