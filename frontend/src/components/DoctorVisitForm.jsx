
import { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Trash2,
  PawPrint,
  UserRound,
  ClipboardList,
  Stethoscope,
  Activity,
  Pill,
  CalendarDays,
  Save,
  CheckCircle,
  FileText,
  FlaskConical,
} from "lucide-react";
import { Link } from "react-router-dom";

const initialForm = {
  farmerName: "",
  phone: "",
  email: "",
  address: "",

  animalType: "",
  animalName: "",
  tagId: "",
  breed: "",
  age: "",
  gender: "",
  weight: "",

  visitDate: new Date().toISOString().slice(0, 10),
  visitTime: "",
  visitType: "FIRST_VISIT",
  chiefComplaint: "",
  symptoms: "",
  illnessDuration: "",
  previousHistory: "",

  temperature: "",
  heartRate: "",
  respiratoryRate: "",
  generalCondition: "",
  physicalExamination: "",
  clinicalObservations: "",

  diagnosis: "",
  suspectedDisease: "",
  treatment: "",
  procedures: "",
  laboratoryTests: "",
  doctorNotes: "",

  followUpDate: "",
  homeCare: "",
  dietaryAdvice: "",
  remarks: "",
  doctorName: "",
};

const emptyMedicine = {
  name: "",
  dosage: "",
  route: "",
  frequency: "",
  duration: "",
  instructions: "",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#123D32] px-4 py-3 text-white outline-none transition placeholder:text-[#91AA9D] focus:border-[#C7F36B] focus:ring-2 focus:ring-[#C7F36B]/10";

const labelClass = "mb-2 block text-sm font-semibold text-[#E4F0E5]";

function SectionHeading({ icon: Icon, title, description }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="rounded-xl bg-[#C7F36B]/10 p-3 text-[#C7F36B]">
        <Icon size={22} />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-[#91AA9D]">{description}</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder = "", required = false, ...props }) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-[#C7F36B]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={inputClass}
        {...props}
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange, placeholder, rows = 3 }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClass} resize-y`}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-[#C7F36B]">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClass}
      >
        <option value="">निवडा</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function DoctorVisitForm() {
  const [form, setForm] = useState(initialForm);
  const [medicines, setMedicines] = useState([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("DRAFT");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };

  const addMedicine = () => {
    setMedicines((prev) => [...prev, { ...emptyMedicine }]);
  };

  const updateMedicine = (index, field, value) => {
    setMedicines((prev) =>
      prev.map((medicine, i) =>
        i === index ? { ...medicine, [field]: value } : medicine
      )
    );
  };

  const removeMedicine = (index) => {
    setMedicines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e, selectedStatus) => {
    e.preventDefault();

    if (!form.farmerName.trim() || !form.phone.trim() || !form.animalType || !form.diagnosis.trim() || !form.doctorName.trim()) {
      setMessage("कृपया सर्व आवश्यक माहिती भरा.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setMessage("कृपया योग्य १० अंकी मोबाईल नंबर भरा.");
      return;
    }

    if (selectedStatus === "FINALIZED" && !form.treatment.trim()) {
      setMessage("रेकॉर्ड अंतिम करण्यापूर्वी उपचारांची माहिती भरा.");
      return;
    }

    setStatus(selectedStatus);
    setMessage(
      selectedStatus === "FINALIZED"
        ? "व्हिजिट रेकॉर्ड अंतिम करण्यासाठी तयार आहे. API जोडल्यावर तो सेव्ह होईल."
        : "ड्राफ्ट माहिती तपासली आहे. API जोडल्यावर ती सेव्ह होईल."
    );
  };

  const gridClass = "grid gap-5 md:grid-cols-2";

  return (
    <div className="min-h-screen bg-[#0B2B24] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#123D32]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-[#C7F36B] p-2.5 text-[#123D32]">
              <PawPrint size={24} />
            </div>
            <div>
              <h1 className="text-lg font-extrabold">JeevRaksha</h1>
              <p className="text-xs text-[#B9CEC2]">Doctor Portal</p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#B9CEC2] transition hover:text-[#C7F36B]"
          >
            <ArrowLeft size={17} />
            मुख्यपृष्ठ
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
        {/* Page Title */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#C7F36B]">
            Veterinary Medical Records
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            नवीन डॉक्टर व्हिजिट रेकॉर्ड
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B9CEC2]">
            प्रत्येक तपासणीदरम्यान प्राण्याच्या आरोग्याची,
            निदानाची आणि उपचारांची संपूर्ण माहिती येथे नोंदवा.
          </p>
        </div>

        {/* Status */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#123D32] p-4">
          <div className="flex items-center gap-3">
            <FileText className="text-[#C7F36B]" />
            <div>
              <p className="font-bold">व्हिजिट रेकॉर्ड</p>
              <p className="text-xs text-[#91AA9D]">नवीन वैद्यकीय नोंद</p>
            </div>
          </div>
          <span className="rounded-full bg-[#C7F36B]/10 px-4 py-2 text-xs font-bold text-[#C7F36B]">
            {status === "DRAFT" ? "DRAFT" : "FINALIZED"}
          </span>
        </div>

        <form className="space-y-6">
          {/* 1. Farmer */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={UserRound}
              title="१. शेतकरी / मालकाची माहिती"
              description="प्राण्याच्या मालकाची वैयक्तिक माहिती"
            />

            <div className={gridClass}>
              <Field label="मालकाचे पूर्ण नाव" name="farmerName" value={form.farmerName} onChange={handleChange} required placeholder="पूर्ण नाव" />
              <Field label="मोबाईल नंबर" name="phone" value={form.phone} onChange={handleChange} required type="tel" maxLength={10} placeholder="१० अंकी नंबर" />
              <Field label="ईमेल" name="email" value={form.email} onChange={handleChange} type="email" placeholder="example@email.com" />
              <Field label="पत्ता" name="address" value={form.address} onChange={handleChange} placeholder="गाव / शहर / संपूर्ण पत्ता" />
            </div>
          </section>

          {/* 2. Animal */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={PawPrint}
              title="२. प्राण्याची माहिती"
              description="ज्या प्राण्याची तपासणी केली जात आहे त्याची माहिती"
            />

            <div className={gridClass}>
              <SelectField label="प्राण्याचा प्रकार" name="animalType" value={form.animalType} onChange={handleChange} required options={[
                { value: "COW", label: "गाय" },
                { value: "BUFFALO", label: "म्हैस" },
                { value: "GOAT", label: "शेळी" },
                { value: "SHEEP", label: "मेंढी" },
                { value: "DOG", label: "कुत्रा" },
                { value: "CAT", label: "मांजर" },
                { value: "OTHER", label: "इतर" },
              ]} />
              <Field label="प्राण्याचे नाव" name="animalName" value={form.animalName} onChange={handleChange} placeholder="उदा. लक्ष्मी" />
              <Field label="टॅग / नोंदणी क्रमांक" name="tagId" value={form.tagId} onChange={handleChange} placeholder="Animal ID" />
              <Field label="जात (Breed)" name="breed" value={form.breed} onChange={handleChange} placeholder="प्राण्याची जात" />
              <Field label="वय" name="age" value={form.age} onChange={handleChange} placeholder="उदा. ३ वर्षे" />
              <SelectField label="लिंग" name="gender" value={form.gender} onChange={handleChange} options={[
                { value: "MALE", label: "नर" },
                { value: "FEMALE", label: "मादी" },
                { value: "UNKNOWN", label: "माहित नाही" },
              ]} />
              <Field label="वजन (Kg)" name="weight" value={form.weight} onChange={handleChange} type="number" min="0" step="0.1" placeholder="वजन किलोमध्ये" />
            </div>
          </section>

          {/* 3. Visit */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={ClipboardList}
              title="३. व्हिजिटची माहिती"
              description="भेटीचे कारण आणि प्राण्याच्या सध्याच्या तक्रारी"
            />

            <div className={`${gridClass} mb-5`}>
              <Field label="व्हिजिट तारीख" name="visitDate" value={form.visitDate} onChange={handleChange} type="date" required />
              <Field label="व्हिजिट वेळ" name="visitTime" value={form.visitTime} onChange={handleChange} type="time" required />
              <SelectField label="व्हिजिटचा प्रकार" name="visitType" value={form.visitType} onChange={handleChange} options={[
                { value: "FIRST_VISIT", label: "पहिली भेट" },
                { value: "FOLLOW_UP", label: "पुन्हा तपासणी" },
                { value: "EMERGENCY", label: "तातडीची भेट" },
                { value: "ROUTINE", label: "नियमित तपासणी" },
              ]} />
              <Field label="आजाराचा कालावधी" name="illnessDuration" value={form.illnessDuration} onChange={handleChange} placeholder="उदा. २ दिवस" />
            </div>

            <div className="space-y-5">
              <TextArea label="मुख्य तक्रार (Chief Complaint)" name="chiefComplaint" value={form.chiefComplaint} onChange={handleChange} placeholder="प्राणी कोणत्या त्रासामुळे आणला आहे?" />
              <TextArea label="लक्षणे (Symptoms)" name="symptoms" value={form.symptoms} onChange={handleChange} placeholder="दिसून आलेली लक्षणे लिहा..." />
              <TextArea label="मागील वैद्यकीय इतिहास" name="previousHistory" value={form.previousHistory} onChange={handleChange} placeholder="पूर्वीचे आजार, उपचार किंवा लसीकरण..." />
            </div>
          </section>

          {/* 4. Examination */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={Activity}
              title="४. क्लिनिकल तपासणी"
              description="तपासणीदरम्यान नोंदवलेली शारीरिक माहिती"
            />

            <div className={`${gridClass} mb-5`}>
              <Field label="शरीराचे तापमान (°C)" name="temperature" value={form.temperature} onChange={handleChange} type="number" step="0.1" placeholder="उदा. 38.5" />
              <Field label="हृदयाचे ठोके (BPM)" name="heartRate" value={form.heartRate} onChange={handleChange} type="number" placeholder="Heart rate" />
              <Field label="श्वसन दर (प्रति मिनिट)" name="respiratoryRate" value={form.respiratoryRate} onChange={handleChange} type="number" placeholder="Respiratory rate" />
              <SelectField label="सामान्य स्थिती" name="generalCondition" value={form.generalCondition} onChange={handleChange} options={[
                { value: "GOOD", label: "चांगली" },
                { value: "STABLE", label: "स्थिर" },
                { value: "MODERATE", label: "मध्यम" },
                { value: "CRITICAL", label: "गंभीर" },
              ]} />
            </div>

            <div className="space-y-5">
              <TextArea label="शारीरिक तपासणी" name="physicalExamination" value={form.physicalExamination} onChange={handleChange} placeholder="डॉक्टरांनी केलेल्या तपासणीचे तपशील..." />
              <TextArea label="क्लिनिकल निरीक्षणे" name="clinicalObservations" value={form.clinicalObservations} onChange={handleChange} placeholder="तपासणीदरम्यान आढळलेल्या बाबी..." />
            </div>
          </section>

          {/* 5. Diagnosis */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={Stethoscope}
              title="५. निदान आणि उपचार"
              description="रोगाचे निदान आणि दिलेल्या उपचारांची माहिती"
            />

            <div className="space-y-5">
              <TextArea label="निदान (Diagnosis)" name="diagnosis" value={form.diagnosis} onChange={handleChange} placeholder="डॉक्टरांनी केलेले निदान..." />
              <TextArea label="संशयित आजार" name="suspectedDisease" value={form.suspectedDisease} onChange={handleChange} placeholder="संशयित आजार असल्यास..." />
              <TextArea label="दिलेला उपचार" name="treatment" value={form.treatment} onChange={handleChange} placeholder="केलेल्या उपचारांचे तपशील..." />
              <TextArea label="प्रक्रिया / शस्त्रक्रिया" name="procedures" value={form.procedures} onChange={handleChange} placeholder="केलेल्या वैद्यकीय प्रक्रिया..." />
              <TextArea label="लॅब टेस्ट / रिपोर्ट" name="laboratoryTests" value={form.laboratoryTests} onChange={handleChange} placeholder="केलेल्या चाचण्या आणि त्यांचे निष्कर्ष..." />
              <TextArea label="डॉक्टरांच्या नोंदी" name="doctorNotes" value={form.doctorNotes} onChange={handleChange} placeholder="इतर महत्त्वाच्या वैद्यकीय नोंदी..." />
            </div>
          </section>

          {/* 6. Medicines */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={Pill}
              title="६. औषधे आणि प्रिस्क्रिप्शन"
              description="प्राण्याला दिलेल्या औषधांची माहिती नोंदवा"
            />

            <div className="space-y-5">
              {medicines.map((medicine, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-[#0B2B24] p-4 md:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-[#C7F36B]">
                      औषध #{index + 1}
                    </h3>
                    <button
                      type="button"
                      onClick={() => removeMedicine(index)}
                      className="rounded-lg p-2 text-red-400 transition hover:bg-red-400/10"
                      aria-label="Remove medicine"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className={gridClass}>
                    <div>
                      <label className={labelClass}>औषधाचे नाव</label>
                      <input value={medicine.name} onChange={(e) => updateMedicine(index, "name", e.target.value)} placeholder="Medicine name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>डोस (Dosage)</label>
                      <input value={medicine.dosage} onChange={(e) => updateMedicine(index, "dosage", e.target.value)} placeholder="उदा. 5 ml" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>देण्याचा मार्ग</label>
                      <select value={medicine.route} onChange={(e) => updateMedicine(index, "route", e.target.value)} className={inputClass}>
                        <option value="">निवडा</option>
                        <option value="ORAL">तोंडावाटे (Oral)</option>
                        <option value="INJECTION">इंजेक्शन</option>
                        <option value="TOPICAL">बाहेरून (Topical)</option>
                        <option value="OTHER">इतर</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>वारंवारता</label>
                      <input value={medicine.frequency} onChange={(e) => updateMedicine(index, "frequency", e.target.value)} placeholder="उदा. दिवसातून २ वेळा" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>कालावधी</label>
                      <input value={medicine.duration} onChange={(e) => updateMedicine(index, "duration", e.target.value)} placeholder="उदा. ५ दिवस" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>सूचना</label>
                      <input value={medicine.instructions} onChange={(e) => updateMedicine(index, "instructions", e.target.value)} placeholder="औषध देण्याच्या सूचना" className={inputClass} />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addMedicine}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#C7F36B]/40 py-4 font-bold text-[#C7F36B] transition hover:bg-[#C7F36B]/10"
              >
                <Plus size={19} />
                औषध जोडा
              </button>
            </div>
          </section>

          {/* 7. Follow up */}
          <section className="rounded-3xl border border-white/10 bg-[#123D32] p-5 md:p-8">
            <SectionHeading
              icon={CalendarDays}
              title="७. फॉलो-अप आणि अंतिम नोंदी"
              description="पुढील भेट आणि घरी घ्यावयाची काळजी"
            />

            <div className={`${gridClass} mb-5`}>
              <Field label="पुढील तपासणीची तारीख" name="followUpDate" value={form.followUpDate} onChange={handleChange} type="date" min={form.visitDate || undefined} />
              <Field label="डॉक्टरांचे नाव" name="doctorName" value={form.doctorName} onChange={handleChange} required placeholder="डॉक्टरांचे पूर्ण नाव" />
            </div>

            <div className="space-y-5">
              <TextArea label="घरी घ्यावयाची काळजी" name="homeCare" value={form.homeCare} onChange={handleChange} placeholder="मालकाने घरी कोणती काळजी घ्यावी..." />
              <TextArea label="आहारविषयक सूचना" name="dietaryAdvice" value={form.dietaryAdvice} onChange={handleChange} placeholder="आहार आणि पाण्याबाबत सूचना..." />
              <TextArea label="अंतिम नोंदी / डॉक्टरांचे अभिप्राय" name="remarks" value={form.remarks} onChange={handleChange} placeholder="अतिरिक्त सूचना..." />
            </div>
          </section>

          {/* Feedback */}
          {message && (
            <div className="rounded-xl border border-[#C7F36B]/20 bg-[#C7F36B]/10 p-4 text-sm leading-6 text-[#C7F36B]">
              {message}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "DRAFT")}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              <Save size={19} />
              ड्राफ्ट म्हणून ठेवा
            </button>

            <button
              type="button"
              onClick={(e) => handleSubmit(e, "FINALIZED")}
              className="flex items-center justify-center gap-2 rounded-full bg-[#C7F36B] px-7 py-4 font-extrabold text-[#123D32] transition hover:-translate-y-1 hover:bg-white"
            >
              <CheckCircle size={19} />
              व्हिजिट अंतिम करा
            </button>
          </div>

          <p className="text-center text-xs leading-5 text-[#91AA9D]">
            सध्या हा फॉर्म frontend demo आहे. माहिती कायमस्वरूपी सेव्ह करण्यासाठी backend API जोडणे आवश्यक आहे.
          </p>
        </form>
      </main>
    </div>
  );
}

export default DoctorVisitForm;
