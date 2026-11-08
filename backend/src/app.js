import express from "express";

import corsMiddleware from "./config/cors.js";

import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import visitRoutes from "./routes/visitRoutes.js";

const app = express();

// CORS configuration
app.use(corsMiddleware);

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to JeevRaksha API",
  });
});

// API routes
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/visits", visitRoutes);

export default app;
