const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");
const visitRoutes = require("./routes/visitRoutes");

const app = express();

// Allowed frontend origins
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
  : ["http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to JeevRaksha API"
  });
});

// Routes
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/visits", visitRoutes);

module.exports = app;
