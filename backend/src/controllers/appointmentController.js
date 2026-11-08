
import Appointment from "../models/Appointment.js";
import { sendAppointmentNotification } from "../services/emailService.js";

export const createAppointment = async (req, res) => {
  try {
    const {
      ownerName,
      phone,
      animalType,
      animalName,
      service,
      date,
      time,
      address,
      message
    } = req.body;

    // Validate required fields
    if (
      !ownerName ||
      !phone ||
      !animalType ||
      !service ||
      !date ||
      !time ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required appointment details."
      });
    }

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number."
      });
    }

    // Save appointment in MongoDB
    const appointment = await Appointment.create({
      ownerName,
      phone,
      animalType,
      animalName,
      service,
      date,
      time,
      address,
      message
    });

    // Send email notification to doctor
    let notificationSent = false;

    try {
      await sendAppointmentNotification(appointment);
      notificationSent = true;
    } catch (emailError) {
      console.error("Appointment email failed:", emailError.message);
    }

    // Update email notification status
    appointment.notificationSent = notificationSent;
    await appointment.save();

    return res.status(201).json({
      success: true,
      message: notificationSent
        ? "Appointment request submitted successfully!"
        : "Appointment saved successfully, but email notification could not be sent.",
      data: appointment
    });

  } catch (error) {
    console.error("Create appointment error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while booking the appointment."
    });
  }
};
