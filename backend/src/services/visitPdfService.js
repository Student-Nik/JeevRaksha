
const PDFDocument = require("pdfkit");
const path = require("path");

const generateVisitPdf = (visit) => {
  return new Promise((resolve, reject) => {
    try {
      const fontPath = path.join(
        __dirname,
        "../../fonts/NotoSansDevanagari-Regular.ttf"
      );

      const doc = new PDFDocument({
        size: "A4",
        margins: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50
        },
        bufferPages: true
      });

      const chunks = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      const green = "#123D32";
      const accent = "#C7F36B";
      const pageWidth = 495;

      // Marathi-compatible font
      const FONT = fontPath;

      const value = (item) => {
        if (item === undefined || item === null || item === "") {
          return "माहिती उपलब्ध नाही";
        }

        return String(item);
      };

      // Translate fixed values stored in the database
      const translations = {
        COW: "गाय",
        BUFFALO: "म्हैस",
        GOAT: "शेळी",
        SHEEP: "मेंढी",
        DOG: "कुत्रा",
        CAT: "मांजर",
        OTHER: "इतर",

        MALE: "नर",
        FEMALE: "मादी",
        UNKNOWN: "माहित नाही",

        FIRST_VISIT: "पहिली भेट",
        FOLLOW_UP: "पुनर्तपासणी",
        EMERGENCY: "आपत्कालीन भेट",
        ROUTINE: "नियमित तपासणी",

        GOOD: "चांगली",
        STABLE: "स्थिर",
        MODERATE: "मध्यम",
        CRITICAL: "गंभीर"
      };

      const translatedValue = (item) => {
        if (item === undefined || item === null || item === "") {
          return "माहिती उपलब्ध नाही";
        }

        return translations[item] || String(item);
      };

      const section = (heading) => {
        doc.moveDown(0.8);

        doc
          .font(FONT)
          .fontSize(13)
          .fillColor(green)
          .text(heading);

        doc
          .moveTo(50, doc.y + 5)
          .lineTo(545, doc.y + 5)
          .strokeColor(accent)
          .lineWidth(2)
          .stroke();

        doc.moveDown(0.7);
      };

      const field = (label, data) => {
        doc
          .font(FONT)
          .fontSize(10)
          .fillColor("#555555")
          .text(label);

        doc
          .font(FONT)
          .fontSize(11)
          .fillColor("#222222")
          .text(value(data), {
            width: pageWidth
          });

        doc.moveDown(0.5);
      };

      const translatedField = (label, data) => {
        field(label, translatedValue(data));
      };

      // HEADER
      doc
        .rect(0, 0, 595.28, 125)
        .fill(green);

      doc
        .font(FONT)
        .fontSize(25)
        .fillColor(accent)
        .text("JeevRaksha", 50, 35);

      doc
        .font(FONT)
        .fontSize(11)
        .fillColor("#FFFFFF")
        .text("प्रत्येक प्राण्यासाठी सेवा, काळजी आणि आरोग्य", 50, 70);

      doc
        .font(FONT)
        .fontSize(15)
        .fillColor("#FFFFFF")
        .text("पशुवैद्यकीय भेट अहवाल", 50, 95);

      doc.y = 145;

      // REPORT INFORMATION
      doc
        .font(FONT)
        .fontSize(9)
        .fillColor("#666666")
        .text(
          `अहवाल तयार केल्याची तारीख: ${new Date().toLocaleString("mr-IN")}`
        );

      doc.text(`भेट क्रमांक: ${visit._id}`);

      // FARMER DETAILS
      section("१. शेतकऱ्याची माहिती");

      field("शेतकऱ्याचे नाव", visit.farmerName);
      field("मोबाईल क्रमांक", visit.phone);
      field("ई-मेल पत्ता", visit.email);
      field("पत्ता", visit.address);

      // ANIMAL DETAILS
      section("२. प्राण्याची माहिती");

      translatedField("प्राण्याचा प्रकार", visit.animalType);
      field("प्राण्याचे नाव", visit.animalName);
      field("टॅग क्रमांक", visit.tagId);
      field("जात / प्रजाती", visit.breed);
      field("वय", visit.age);
      translatedField("लिंग", visit.gender);
      field("वजन", visit.weight);

      // VISIT DETAILS
      section("३. भेटीचा तपशील");

      field("भेटीची तारीख", visit.visitDate);
      field("भेटीची वेळ", visit.visitTime);
      translatedField("भेटीचा प्रकार", visit.visitType);
      field("मुख्य तक्रार", visit.chiefComplaint);
      field("लक्षणे", visit.symptoms);
      field("आजाराचा कालावधी", visit.illnessDuration);
      field("मागील वैद्यकीय इतिहास", visit.previousHistory);

      // CLINICAL EXAMINATION
      section("४. वैद्यकीय तपासणी");

      field("शरीराचे तापमान", visit.temperature);
      field("हृदयाचे ठोके", visit.heartRate);
      field("श्वसनाचा दर", visit.respiratoryRate);
      translatedField("प्राण्याची सामान्य स्थिती", visit.generalCondition);
      field("शारीरिक तपासणी", visit.physicalExamination);
      field("वैद्यकीय निरीक्षणे", visit.clinicalObservations);

      // DIAGNOSIS AND TREATMENT
      section("५. निदान आणि उपचार");

      field("निदान", visit.diagnosis);
      field("संशयित आजार", visit.suspectedDisease);
      field("उपचार", visit.treatment);
      field("वैद्यकीय प्रक्रिया", visit.procedures);
      field("प्रयोगशाळा चाचण्या", visit.laboratoryTests);
      field("डॉक्टरांच्या नोंदी", visit.doctorNotes);

      // MEDICINES
      section("६. निर्धारित औषधे");

      if (visit.medicines && visit.medicines.length > 0) {
        visit.medicines.forEach((medicine, index) => {
          doc
            .font(FONT)
            .fontSize(11)
            .fillColor(green)
            .text(`औषध क्रमांक ${index + 1}`);

          field("औषधाचे नाव", medicine.name);
          field("औषधाचे प्रमाण", medicine.dosage);
          field("औषध देण्याची पद्धत", medicine.route);
          field("औषध घेण्याची वारंवारता", medicine.frequency);
          field("उपचाराचा कालावधी", medicine.duration);
          field("विशेष सूचना", medicine.instructions);
        });
      } else {
        field("औषधे", "कोणतीही औषधे निर्धारित केलेली नाहीत.");
      }

      // FOLLOW-UP AND CARE INSTRUCTIONS
      section("७. पुढील तपासणी आणि काळजी");

      field("पुढील तपासणीची तारीख", visit.followUpDate);
      field("घरगुती काळजी", visit.homeCare);
      field("आहारविषयक सल्ला", visit.dietaryAdvice);
      field("अतिरिक्त सूचना", visit.remarks);

      // DOCTOR DETAILS
      section("८. डॉक्टरांची माहिती");

      field("डॉक्टरांचे नाव", visit.doctorName);

      doc.moveDown(2);

      doc
        .font(FONT)
        .fontSize(12)
        .fillColor(green)
        .text("JeevRaksha वर विश्वास ठेवल्याबद्दल धन्यवाद!");

      doc
        .font(FONT)
        .fontSize(9)
        .fillColor("#666666")
        .text(
          "या अहवालामध्ये डॉक्टरांनी नोंदविलेल्या पशुवैद्यकीय भेटीचा तपशील दिलेला आहे."
        );

      // FOOTER
      const pages = doc.bufferedPageRange();

      for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(pages.start + i);

        doc
          .font(FONT)
          .fontSize(8)
          .fillColor("#888888")
          .text(
            `JeevRaksha | गोपनीय पशुवैद्यकीय अहवाल | पृष्ठ ${i + 1} पैकी ${pages.count}`,
            50,
            780,
            {
              width: pageWidth,
              align: "center",
              lineBreak: false
            }
          );
      }

      doc.end();

    } catch (error) {
      reject(error);
    }
  });
};

module.exports = generateVisitPdf;
