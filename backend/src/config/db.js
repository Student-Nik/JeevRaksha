
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error(
        "MONGODB_URI is missing in environment variables."
      );
    }

    // Reuse existing MongoDB connection
    if (mongoose.connection.readyState === 1) {
      return;
    }

    // Wait for an existing connection attempt
    if (mongoose.connection.readyState === 2) {
      await mongoose.connection.asPromise();
      return;
    }

    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
