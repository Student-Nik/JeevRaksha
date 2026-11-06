
const nodemailer = require("nodemailer");

const escapeHtml = (value) => {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const sendVisitReportEmail = async (visit, pdfBuffer) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  const farmerName = escapeHtml(visit.farmerName);
  const animalName = escapeHtml(visit.animalName || visit.animalType);
  const visitDate = escapeHtml(visit.visitDate);
  const doctorName = escapeHtml(visit.doctorName);

  const mailOptions = {
    from: {
      name: "JeevRaksha",
      address: process.env.EMAIL_USER
    },

    to: visit.email,

    subject: `JeevRaksha - ${farmerName} यांचा पशुवैद्यकीय भेट अहवाल`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">

        <div style="background-color: #123D32; padding: 25px; text-align: center;">
          <h1 style="color: #C7F36B; margin: 0;">JeevRaksha</h1>
          <p style="color: white; margin-bottom: 0;">
            प्रत्येक प्राण्यासाठी सेवा, काळजी आणि आरोग्य
          </p>
        </div>

        <div style="padding: 25px; color: #333333;">

          <h2 style="color: #123D32;">
            पशुवैद्यकीय भेट अहवाल
          </h2>

          <p>आदरणीय ${farmerName},</p>

          <p>
            आपल्या प्राण्याच्या आरोग्याची काळजी घेण्यासाठी JeevRaksha वर विश्वास ठेवल्याबद्दल धन्यवाद.
            आपल्या प्राण्याची पशुवैद्यकीय तपासणी यशस्वीरित्या नोंदविण्यात आली आहे.
          </p>

          <div style="background-color: #E4F0E5; padding: 15px; border-radius: 8px; margin: 20px 0;">

            <p><strong>प्राण्याचे नाव:</strong> ${animalName}</p>

            <p><strong>भेटीची तारीख:</strong> ${visitDate}</p>

            <p><strong>डॉक्टरांचे नाव:</strong> ${doctorName}</p>

          </div>

          <p>
            आपल्या पशुवैद्यकीय भेटीचा सविस्तर अहवाल या ई-मेलसोबत PDF स्वरूपात जोडलेला आहे.
          </p>

          <p>
            कृपया हा अहवाल भविष्यातील संदर्भासाठी जतन करून ठेवा.
            तसेच डॉक्टरांनी दिलेल्या उपचार आणि काळजीविषयक सूचनांचे पालन करा.
          </p>

          <p>
            धन्यवाद!<br />
            <strong>JeevRaksha पशुवैद्यकीय सेवा</strong>
          </p>

        </div>

        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; color: #777777; font-size: 12px;">
          हा ई-मेल JeevRaksha प्रणालीद्वारे स्वयंचलितपणे पाठविण्यात आला आहे.
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
