
const Visit = require("../models/Visit");
const generateVisitPdf = require("../services/visitPdfService");
const sendVisitReportEmail = require("../services/visitEmailService");

const createVisit = async (req, res) => {
  try {
    const {
      farmerName,
      phone,
      email,
      animalType,
      diagnosis,
      treatment,
      doctorName,
      visitDate,
      visitTime
    } = req.body;

    // Required field validation
    if (
      !farmerName?.trim() ||
      !phone?.trim() ||
      !animalType ||
      !diagnosis?.trim() ||
      !doctorName?.trim() ||
      !visitDate ||
      !visitTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
      });
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid 10-digit phone number."
      });
    }

    const status = req.body.status || "DRAFT";

    if (!["DRAFT", "FINALIZED"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid visit status."
      });
    }

    // Finalization validation
    if (status === "FINALIZED") {
      if (!email?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Farmer email is required to finalize the visit."
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          message: "Enter a valid farmer email address."
        });
      }

      if (!treatment?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Treatment details are required to finalize the visit."
        });
      }
    }

    // Prepare visit data
    const visitData = {
      ...req.body,
      email: email?.trim().toLowerCase() || "",
      status,
      emailStatus: "NOT_SENT",
      finalizedAt: status === "FINALIZED" ? new Date() : null
    };

    // Step 1: Save visit in MongoDB
    const visit = await Visit.create(visitData);

    // Draft: Save only, do not generate PDF or send email
    if (status === "DRAFT") {
      return res.status(201).json({
        success: true,
        message: "Visit draft saved successfully.",
        data: visit,
        emailSent: false
      });
    }

    // Step 2: Generate PDF and send email
    try {
      const pdfBuffer = await generateVisitPdf(visit);

      await sendVisitReportEmail(visit, pdfBuffer);

      // Step 3: Update email status
      visit.emailStatus = "SENT";
      visit.emailSentAt = new Date();

      await visit.save();

      return res.status(201).json({
        success: true,
        message: "Visit finalized and PDF report emailed successfully!",
        data: visit,
        emailSent: true
      });

    } catch (emailError) {
      console.error("Visit PDF/Email error:", emailError);

      // Visit remains saved even if PDF/email fails
      visit.emailStatus = "FAILED";
      await visit.save();

      return res.status(201).json({
        success: true,
        message: "Visit saved and finalized, but PDF email delivery failed.",
        data: visit,
        emailSent: false
      });
    }

  } catch (error) {
    console.error("Create visit error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while saving the visit."
    });
  }
};

module.exports = { createVisit };
