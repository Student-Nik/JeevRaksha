
import cors from "cors";

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",")
      .map((url) => url.trim().replace(/\/+$/, ""))
      .filter(Boolean)
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header
    if (!origin) {
      return callback(null, true);
    }

    // Allow configured frontend origins
    if (allowedOrigins.includes(origin.replace(/\/+$/, ""))) {
      return callback(null, true);
    }

    // Allow localhost during development
    if (
      process.env.NODE_ENV === "development" &&
      origin === "http://localhost:5173"
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: ["Content-Type", "Authorization"],

  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
