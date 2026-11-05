
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Convert values into readable names
const formatLabel = (value) => {
  if (!value) return "Not provided";

  return value
    .toLowerCase()
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Convert 24-hour time to 12-hour format
const formatTime = (time) => {
  if (!time) return "Not provided";

  const [hours, minutes] = time.split(":");
  const date = new Date();

  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};

// Prevent HTML injection in dynamic values
const escapeHtml = (value) => {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const sendAppointmentNotification = async (appointment) => {
  const animalType = formatLabel(appointment.animalType);
  const service = formatLabel(appointment.service);
  const time = formatTime(appointment.time);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="
      margin: 0;
      padding: 20px;
      background-color: #f1f5f2;
      font-family: Arial, sans-serif;
      color: #26352d;
    ">

      <div style="
        max-width: 600px;
        margin: auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #e1e9e3;
      ">

        <!-- Header -->
        <div style="
          background-color: #123D32;
          padding: 28px 20px;
          text-align: center;
          color: #ffffff;
        ">
          <h1 style="margin: 0; font-size: 27px;">
            JeevRaksha 🐾
          </h1>

          <p style="
            margin: 8px 0 0;
            color: #C7F36B;
            font-size: 13px;
          ">
            Service, Care and Health for Every Animal
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 25px 22px;">

          <h2 style="
            color: #123D32;
            margin-top: 0;
            font-size: 22px;
          ">
            New Appointment Request!
          </h2>

          <p style="font-size: 14px; line-height: 1.6;">
            Hello Doctor,<br><br>
            A farmer has submitted a new appointment request
            through the JeevRaksha website. Here are the details:
          </p>

          <!-- Status -->
          <div style="
            background-color: #fff8e5;
            border: 1px solid #f3df9c;
            border-radius: 8px;
            padding: 12px;
            margin: 20px 0;
          ">
            <strong style="color: #946200;">
              Appointment Status: PENDING
            </strong>
          </div>

          <!-- Farmer Details -->
          <h3 style="color: #123D32; font-size: 17px;">
            👤 Farmer Details
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>Owner Name</strong></td>
              <td>${escapeHtml(appointment.ownerName)}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${escapeHtml(appointment.phone)}</td>
            </tr>

            <tr style="background-color: #f4f8f5;">
              <td><strong>Address</strong></td>
              <td>${escapeHtml(appointment.address)}</td>
            </tr>
          </table>

          <!-- Animal Details -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            🐄 Animal Details
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>Animal Type</strong></td>
              <td>${escapeHtml(animalType)}</td>
            </tr>

            <tr>
              <td><strong>Animal Name</strong></td>
              <td>${escapeHtml(appointment.animalName || "Not provided")}</td>
            </tr>
          </table>

          <!-- Appointment Details -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            📅 Appointment Details
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>Service</strong></td>
              <td>${escapeHtml(service)}</td>
            </tr>

            <tr>
              <td><strong>Date</strong></td>
              <td>${escapeHtml(appointment.date)}</td>
            </tr>

            <tr style="background-color: #f4f8f5;">
              <td><strong>Time</strong></td>
              <td>${escapeHtml(time)}</td>
            </tr>
          </table>

          <!-- Message -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            💬 Additional Message
          </h3>

          <div style="
            background-color: #f4f8f5;
            padding: 14px;
            border-radius: 8px;
            font-size: 14px;
            line-height: 1.6;
          ">
            ${escapeHtml(appointment.message || "No additional message provided.")}
          </div>

          <p style="
            margin-top: 25px;
            font-size: 14px;
            line-height: 1.6;
          ">
            Please review this request and contact the farmer
            to confirm the appointment.
          </p>

        </div>

        <!-- Footer -->
        <div style="
          background-color: #123D32;
          padding: 20px;
          text-align: center;
          color: #ffffff;
        ">
          <strong>JeevRaksha</strong>

          <p style="
            color: #C7F36B;
            font-size: 12px;
            margin-bottom: 0;
          ">
            Service, Care and Health for Every Animal.
          </p>
        </div>

      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"JeevRaksha" <${process.env.EMAIL_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    subject: `New Appointment Request - ${appointment.ownerName}`,
    html
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = {
  sendAppointmentNotification
};
