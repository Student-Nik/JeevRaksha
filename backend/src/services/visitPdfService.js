
const PDFDocument = require("pdfkit");

const generateVisitPdf = (visit) => {
  return new Promise((resolve, reject) => {
    try {
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

      doc.on("data", (chunk) => {
        chunks.push(chunk);
      });

      doc.on("end", () => {
        resolve(Buffer.concat(chunks));
      });

      doc.on("error", (error) => {
        reject(error);
      });

      const green = "#123D32";
      const lightGreen = "#E4F0E5";
      const accent = "#C7F36B";
      const pageWidth = 495;

      const value = (item) => {
        if (item === undefined || item === null || item === "") {
          return "Not provided";
        }

        return String(item);
      };

      const section = (heading) => {
        doc.moveDown(0.8);

        doc
          .fillColor(green)
          .font("Helvetica-Bold")
          .fontSize(12)
          .text(heading.toUpperCase());

        doc
          .moveTo(50, doc.y + 5)
          .lineTo(545, doc.y + 5)
          .strokeColor("#C7F36B")
          .lineWidth(2)
          .stroke();

        doc.moveDown(0.7);
      };

      const field = (label, data) => {
        doc
          .font("Helvetica-Bold")
          .fontSize(9)
          .fillColor("#555555")
          .text(label);

        doc
          .font("Helvetica")
          .fontSize(10)
          .fillColor("#222222")
          .text(value(data), {
            width: pageWidth
          });

        doc.moveDown(0.5);
      };

      // HEADER
      doc
        .rect(0, 0, 595.28, 125)
        .fill(green);

      doc
        .fillColor(accent)
        .font("Helvetica-Bold")
        .fontSize(25)
        .text("JeevRaksha", 50, 35);

      doc
        .fillColor("#FFFFFF")
        .font("Helvetica")
        .fontSize(10)
        .text("Service, Care and Health for Every Animal", 50, 70);

      doc
        .fillColor("#FFFFFF")
        .font("Helvetica-Bold")
        .fontSize(13)
        .text("VETERINARY VISIT REPORT", 50, 95);

      doc.y = 145;

      // REPORT INFORMATION
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor("#666666")
        .text(`Report Generated: ${new Date().toLocaleString("en-IN")}`);

      doc.text(`Visit ID: ${visit._id}`);

      // FARMER DETAILS
      section("Farmer Details");

      field("Farmer Name", visit.farmerName);
      field("Phone Number", visit.phone);
      field("Email Address", visit.email);
      field("Address", visit.address);

      // ANIMAL DETAILS
      section("Animal Details");

      field("Animal Type", visit.animalType);
      field("Animal Name", visit.animalName);
      field("Tag ID", visit.tagId);
      field("Breed", visit.breed);
      field("Age", visit.age);
      field("Gender", visit.gender);
      field("Weight", visit.weight);

      // VISIT DETAILS
      section("Visit Details");

      field("Visit Date", visit.visitDate);
      field("Visit Time", visit.visitTime);
      field("Visit Type", visit.visitType);
      field("Chief Complaint", visit.chiefComplaint);
      field("Symptoms", visit.symptoms);
      field("Illness Duration", visit.illnessDuration);
      field("Previous Medical History", visit.previousHistory);

      // CLINICAL EXAMINATION
      section("Clinical Examination");

      field("Temperature", visit.temperature);
      field("Heart Rate", visit.heartRate);
      field("Respiratory Rate", visit.respiratoryRate);
      field("General Condition", visit.generalCondition);
      field("Physical Examination", visit.physicalExamination);
      field("Clinical Observations", visit.clinicalObservations);

      // DIAGNOSIS AND TREATMENT
      section("Diagnosis and Treatment");

      field("Diagnosis", visit.diagnosis);
      field("Suspected Disease", visit.suspectedDisease);
      field("Treatment", visit.treatment);
      field("Procedures", visit.procedures);
      field("Laboratory Tests", visit.laboratoryTests);
      field("Doctor Notes", visit.doctorNotes);

      // MEDICINES
      section("Prescribed Medicines");

      if (visit.medicines && visit.medicines.length > 0) {
        visit.medicines.forEach((medicine, index) => {
          doc
            .font("Helvetica-Bold")
            .fontSize(10)
            .fillColor(green)
            .text(`Medicine ${index + 1}`);

          field("Medicine Name", medicine.name);
          field("Dosage", medicine.dosage);
          field("Route", medicine.route);
          field("Frequency", medicine.frequency);
          field("Duration", medicine.duration);
          field("Instructions", medicine.instructions);
        });
      } else {
        field("Medicines", "No medicines prescribed.");
      }

      // FOLLOW-UP AND ADVICE
      section("Follow-up and Care Instructions");

      field("Follow-up Date", visit.followUpDate);
      field("Home Care", visit.homeCare);
      field("Dietary Advice", visit.dietaryAdvice);
      field("Additional Remarks", visit.remarks);

      // DOCTOR DETAILS
      section("Doctor Details");

      field("Doctor Name", visit.doctorName);

      doc.moveDown(2);

      doc
        .fillColor(green)
        .font("Helvetica-Bold")
        .fontSize(10)
        .text("Thank you for trusting JeevRaksha!");

      doc
        .font("Helvetica")
        .fontSize(8)
        .fillColor("#666666")
        .text("This report contains the veterinary visit details recorded by the doctor.");

      // FOOTER
      const pages = doc.bufferedPageRange();

      for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(pages.start + i);

        doc
          .font("Helvetica")
          .fontSize(8)
          .fillColor("#888888")
          .text(
            `JeevRaksha | Confidential Veterinary Report | Page ${i + 1} of ${pages.count}`,
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
