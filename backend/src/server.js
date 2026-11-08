import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Reuse the database connection across serverless invocations.
let dbConnectionPromise;

const connectDatabase = async () => {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectDB().catch((error) => {
      dbConnectionPromise = null;
      throw error;
    });
  }

  return dbConnectionPromise;
};

// Vercel serverless handler
export default async function handler(req, res) {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error("Database connection failed:", error);

    return res.status(500).json({
      success: false,
      message: "Server initialization failed",
    });
  }
}

// Local development server
if (process.env.VERCEL !== "1") {
  const startServer = async () => {
    try {
      await connectDatabase();

      app.listen(PORT, () => {
        console.log(`JeevRaksha server running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Server startup failed:", error.message);
      process.exit(1);
    }
  };

  startServer();
}
