const nodemailer = require("nodemailer");

const sendVisitReportEmail = async (visit, pdfBuffer) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: {
      name: "JeevRaksha",
      address: process.env.EMAIL_USER
    },

    to: visit.email,

    subject: `JeevRaksha - Veterinary Visit Report for ${visit.farmerName}`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">

        <div style="background-color: #123D32; padding: 25px; text-align: center;">
          <h1 style="color: #C7F36B; margin: 0;">JeevRaksha</h1>
          <p style="color: white; margin-bottom: 0;">
            Service, Care and Health for Every Animal
          </p>
        </div>

        <div style="padding: 25px; color: #333333;">

          <h2 style="color: #123D32;">Veterinary Visit Report</h2>

          <p>Dear ${visit.farmerName},</p>

          <p>
            Thank you for trusting JeevRaksha with your animal's healthcare.
            Your veterinary visit has been successfully recorded.
          </p>

          <div style="background-color: #E4F0E5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Animal:</strong> ${visit.animalName || visit.animalType}</p>
            <p><strong>Visit Date:</strong> ${visit.visitDate}</p>
            <p><strong>Doctor:</strong> ${visit.doctorName}</p>
          </div>

          <p>
            Your detailed veterinary visit report is attached to this email
            as a PDF document.
          </p>

          <p>
            Please keep this report for your future reference and follow
            the doctor's prescribed treatment and care instructions.
          </p>

          <p style="margin-top: 25px;">
            Regards,<br />
            <strong>JeevRaksha Veterinary Care</strong>
          </p>

        </div>

        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; color: #777777; font-size: 12px;">
          This is an automatically generated email from JeevRaksha.
        </div>

      </div>
    `,

    attachments: [
      {
        filename: `JeevRaksha-Visit-Report-${visit._id}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf"
      }
    ]
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Visit report email sent:", info.messageId);

  return info;
};

module.exports = sendVisitReportEmail;
