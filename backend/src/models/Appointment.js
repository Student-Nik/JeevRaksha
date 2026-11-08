import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Enter a valid 10-digit phone number"],
    },

    animalType: {
      type: String,
      required: true,
      enum: ["DOG", "CAT", "COW", "BUFFALO", "GOAT", "SHEEP", "OTHER"],
    },

    animalName: {
      type: String,
      trim: true,
      default: "",
    },

    service: {
      type: String,
      required: true,
      enum: [
        "GENERAL_CHECKUP",
        "VACCINATION",
        "TREATMENT",
        "LIVESTOCK_CARE",
        "HEALTH_CHECKUP",
        "OTHER",
      ],
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "COMPLETED", "REJECTED", "CANCELLED"],
      default: "PENDING",
    },

    notificationSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
