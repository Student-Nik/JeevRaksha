
import mongoose from "mongoose";

// ========================================
// Medicine Schema
// ========================================

const medicineSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: "" },
    dosage: { type: String, trim: true, default: "" },
    route: { type: String, trim: true, default: "" },
    frequency: { type: String, trim: true, default: "" },
    duration: { type: String, trim: true, default: "" },
    instructions: { type: String, trim: true, default: "" }
  },
  { _id: false }
);

// ========================================
// Visit Schema
// ========================================

const visitSchema = new mongoose.Schema(
  {
    // Farmer details
    farmerName: { type: String, required: true, trim: true },
    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Enter a valid 10-digit phone number"]
    },
    email: { type: String, trim: true, lowercase: true, default: "" },
    address: { type: String, trim: true, default: "" },

    // Animal details
    animalType: {
      type: String,
      required: true,
      enum: ["COW", "BUFFALO", "GOAT", "SHEEP", "DOG", "CAT", "OTHER"]
    },
    animalName: { type: String, trim: true, default: "" },
    tagId: { type: String, trim: true, default: "" },
    breed: { type: String, trim: true, default: "" },
    age: { type: String, trim: true, default: "" },
    gender: {
      type: String,
      enum: ["", "MALE", "FEMALE", "UNKNOWN"],
      default: ""
    },
    weight: { type: String, default: "" },

    // Visit details
    visitDate: { type: String, required: true },
    visitTime: { type: String, required: true },
    visitType: {
      type: String,
      enum: ["FIRST_VISIT", "FOLLOW_UP", "EMERGENCY", "ROUTINE"],
      default: "FIRST_VISIT"
    },
    chiefComplaint: { type: String, default: "" },
    symptoms: { type: String, default: "" },
    illnessDuration: { type: String, default: "" },
    previousHistory: { type: String, default: "" },

    // Clinical examination
    temperature: { type: String, default: "" },
    heartRate: { type: String, default: "" },
    respiratoryRate: { type: String, default: "" },
    generalCondition: {
      type: String,
      enum: ["", "GOOD", "STABLE", "MODERATE", "CRITICAL"],
      default: ""
    },
    physicalExamination: { type: String, default: "" },
    clinicalObservations: { type: String, default: "" },

    // Diagnosis and treatment
    diagnosis: { type: String, required: true, trim: true },
    suspectedDisease: { type: String, default: "" },
    treatment: { type: String, default: "" },
    procedures: { type: String, default: "" },
    laboratoryTests: { type: String, default: "" },
    doctorNotes: { type: String, default: "" },

    // Medicines
    medicines: {
      type: [medicineSchema],
      default: []
    },

    // Follow-up
    followUpDate: { type: String, default: "" },
    homeCare: { type: String, default: "" },
    dietaryAdvice: { type: String, default: "" },
    remarks: { type: String, default: "" },
    doctorName: { type: String, required: true, trim: true },

    // Record and email status
    status: {
      type: String,
      enum: ["DRAFT", "FINALIZED"],
      default: "DRAFT"
    },
    emailStatus: {
      type: String,
      enum: ["NOT_SENT", "SENT", "FAILED"],
      default: "NOT_SENT"
    },
    emailSentAt: {
      type: Date,
      default: null
    },
    finalizedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

// ========================================
// Visit Model
// ========================================

const Visit = mongoose.model("Visit", visitSchema);

export default Visit;
