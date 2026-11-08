
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Convert enum values into Marathi
const formatLabel = (value) => {
  if (!value) return "माहिती उपलब्ध नाही";

  const translations = {
    COW: "गाय",
    BUFFALO: "म्हैस",
    GOAT: "शेळी",
    SHEEP: "मेंढी",
    DOG: "कुत्रा",
    CAT: "मांजर",
    OTHER: "इतर",

    GENERAL_CHECKUP: "सामान्य तपासणी",
    VACCINATION: "लसीकरण",
    TREATMENT: "उपचार",
    EMERGENCY: "आपत्कालीन सेवा",
    ROUTINE_CHECKUP: "नियमित तपासणी",
    SURGERY: "शस्त्रक्रिया",
    CONSULTATION: "वैद्यकीय सल्ला",
  };

  if (translations[value]) {
    return translations[value];
  }

  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Convert 24-hour time to 12-hour Marathi format
const formatTime = (time) => {
  if (!time) return "माहिती उपलब्ध नाही";

  const [hours, minutes] = time.split(":");
  const date = new Date();

  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("mr-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
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
    <html lang="mr">
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
            प्रत्येक प्राण्यासाठी सेवा, काळजी आणि आरोग्य
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 25px 22px;">

          <h2 style="
            color: #123D32;
            margin-top: 0;
            font-size: 22px;
          ">
            नवीन अपॉइंटमेंट विनंती!
          </h2>

          <p style="font-size: 14px; line-height: 1.8;">
            नमस्कार डॉक्टर,<br><br>
            JeevRaksha वेबसाइटद्वारे एका शेतकऱ्याने नवीन भेटीची विनंती नोंदवली आहे.
            त्याचा तपशील खालीलप्रमाणे आहे:
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
              अपॉइंटमेंटची स्थिती: प्रलंबित
            </strong>
          </div>

          <!-- Farmer Details -->
          <h3 style="color: #123D32; font-size: 17px;">
            👤 शेतकऱ्याची माहिती
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>मालकाचे नाव</strong></td>
              <td>${escapeHtml(appointment.ownerName)}</td>
            </tr>

            <tr>
              <td><strong>मोबाईल क्रमांक</strong></td>
              <td>${escapeHtml(appointment.phone)}</td>
            </tr>

            <tr style="background-color: #f4f8f5;">
              <td><strong>पत्ता</strong></td>
              <td>${escapeHtml(appointment.address)}</td>
            </tr>
          </table>

          <!-- Animal Details -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            🐄 प्राण्याची माहिती
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>प्राण्याचा प्रकार</strong></td>
              <td>${escapeHtml(animalType)}</td>
            </tr>

            <tr>
              <td><strong>प्राण्याचे नाव</strong></td>
              <td>${escapeHtml(appointment.animalName || "माहिती उपलब्ध नाही")}</td>
            </tr>
          </table>

          <!-- Appointment Details -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            📅 अपॉइंटमेंटचा तपशील
          </h3>

          <table width="100%" cellpadding="9"
            style="border-collapse: collapse; font-size: 14px;">

            <tr style="background-color: #f4f8f5;">
              <td><strong>सेवा</strong></td>
              <td>${escapeHtml(service)}</td>
            </tr>

            <tr>
              <td><strong>तारीख</strong></td>
              <td>${escapeHtml(appointment.date)}</td>
            </tr>

            <tr style="background-color: #f4f8f5;">
              <td><strong>वेळ</strong></td>
              <td>${escapeHtml(time)}</td>
            </tr>
          </table>

          <!-- Message -->
          <h3 style="color: #123D32; font-size: 17px; margin-top: 25px;">
            💬 अतिरिक्त संदेश
          </h3>

          <div style="
            background-color: #f4f8f5;
            padding: 14px;
            border-radius: 8px;
            font-size: 14px;
            line-height: 1.8;
          ">
            ${escapeHtml(appointment.message || "कोणताही अतिरिक्त संदेश दिलेला नाही.")}
          </div>

          <p style="
            margin-top: 25px;
            font-size: 14px;
            line-height: 1.8;
          ">
            कृपया या विनंतीची तपासणी करून शेतकऱ्याशी संपर्क साधा
            आणि अपॉइंटमेंट निश्चित करा.
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
            प्रत्येक प्राण्यासाठी सेवा, काळजी आणि आरोग्य.
          </p>
        </div>

      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"JeevRaksha" <${process.env.EMAIL_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    subject: `नवीन अपॉइंटमेंट विनंती - ${appointment.ownerName}`,
    html,
  };

  return await transporter.sendMail(mailOptions);
};

export { sendAppointmentNotification };
