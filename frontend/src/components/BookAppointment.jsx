import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle,
  Clock,
  Heart,
  PawPrint,
  Stethoscope,
  User,
} from "lucide-react";

import { apiFetch, API_ENDPOINTS } from "../services/api.js";

// Generate appointment time slots in 12-hour AM/PM format.
// Backend receives time in HH:mm format.
const timeOptions = Array.from({ length: 48 }, (_, index) => {
  const totalMinutes = index * 30;
  const hour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hour12 = hour24 % 12 || 12;
  const period = hour24 < 12 ? "AM" : "PM";

  const value = `${String(hour24).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  const label = `${hour12}:${String(minutes).padStart(
    2,
    "0"
  )} ${period}`;

  return { value, label };
});

// Get today's date in YYYY-MM-DD format.
function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function BookAppointment() {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    animalType: "",
    animalName: "",
    service: "",
    date: "",
    time: "",
    address: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSubmitted(false);
    setErrorMessage("");
  };

  // Submit appointment request to backend.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setErrorMessage("कृपया योग्य १० अंकी मोबाईल नंबर टाका.");
      return;
    }

    try {
      setIsLoading(true);
      setIsSubmitted(false);
      setErrorMessage("");

      // Centralized API request using Fetch.
      const response = await apiFetch(API_ENDPOINTS.APPOINTMENTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "अपॉइंटमेंट बुक करता आली नाही."
        );
      }

      // Appointment successfully saved.
      setIsSubmitted(true);

      // Reset form after successful submission.
      setFormData({
        ownerName: "",
        phone: "",
        animalType: "",
        animalName: "",
        service: "",
        date: "",
        time: "",
        address: "",
        message: "",
      });

      // Show warning if email notification failed.
      if (!result.data?.notificationSent) {
        setErrorMessage(
          "तुमची अपॉइंटमेंट विनंती जतन झाली आहे. मात्र डॉक्टरांना ईमेल सूचना पाठवता आली नाही."
        );
      }
    } catch (error) {
      console.error("Appointment booking error:", error);

      setErrorMessage(
        error.message ||
          "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "booking-input w-full rounded-xl border border-white/10 bg-[#123D32] px-4 py-3.5 text-white outline-none transition-all duration-300 focus:border-[#C7F36B] focus:ring-2 focus:ring-[#C7F36B]/20";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#E4F0E5]";

  return (
    <div className="min-h-screen bg-[#0B2B24] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#123D32]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C7F36B] text-[#123D32]">
              <PawPrint size={25} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                JeevRaksha
              </h1>

              <p className="text-xs text-[#B9CEC2]">
                पशुवैद्यकीय सेवा केंद्र
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#C7F36B] hover:text-[#C7F36B]"
          >
            <ArrowLeft size={17} />
            मुख्यपृष्ठावर जा
          </Link>
        </div>
      </header>

      {/* Page Introduction */}
      <section className="px-5 pb-10 pt-14 text-center md:pt-20">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C7F36B] text-[#123D32]">
          <CalendarDays size={32} />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#C7F36B]">
          JeevRaksha Veterinary Care
        </p>

        <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
          आपल्या प्राण्यासाठी
          <span className="block text-[#C7F36B]">
            अपॉइंटमेंट बुक करा!
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-[#B9CEC2] md:text-base">
          आपल्या प्रिय प्राण्याच्या आरोग्याची काळजी घेण्यासाठी
          आजच अपॉइंटमेंट निश्चित करा. आम्ही प्रत्येक जीवाची
          प्रेमाने आणि आपुलकीने काळजी घेतो.
        </p>
      </section>

      {/* Booking Content */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Information Card */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#123D32] p-7 md:p-9">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C7F36B]/10 text-[#C7F36B]">
                <Heart size={30} />
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                प्रत्येक जीव अनमोल आहे!
              </h3>

              <p className="mb-7 leading-7 text-[#B9CEC2]">
                योग्य वेळी तपासणी आणि उपचार मिळाल्यास
                आपल्या प्राण्याचे आरोग्य चांगले राहण्यास मदत होते.
                आपल्या प्राण्याची माहिती भरून अपॉइंटमेंटची
                विनंती पाठवा.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#C7F36B]/10 p-3 text-[#C7F36B]">
                    <Stethoscope size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      तज्ज्ञ पशुवैद्यकीय सेवा
                    </h4>

                    <p className="mt-1 text-sm text-[#B9CEC2]">
                      प्राण्यांच्या आरोग्यासाठी योग्य मार्गदर्शन.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#C7F36B]/10 p-3 text-[#C7F36B]">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      सोयीची वेळ निवडा
                    </h4>

                    <p className="mt-1 text-sm text-[#B9CEC2]">
                      आपल्या सोयीनुसार तारीख आणि वेळ निवडा.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#C7F36B]/10 p-3 text-[#C7F36B]">
                    <PawPrint size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      सर्व प्राण्यांसाठी सेवा
                    </h4>

                    <p className="mt-1 text-sm text-[#B9CEC2]">
                      पाळीव प्राणी आणि पशुधनासाठी सेवा.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-3xl border border-[#C7F36B]/20 bg-[#C7F36B]/10 p-7">
              <h3 className="mb-3 text-xl font-bold text-[#C7F36B]">
                काही मदत हवी आहे?
              </h3>

              <p className="mb-5 text-sm leading-6 text-[#B9CEC2]">
                अपॉइंटमेंटबाबत काही प्रश्न असल्यास
                आमच्याशी संपर्क साधा.
              </p>

              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 font-bold text-[#C7F36B] transition hover:gap-3"
              >
                संपर्क साधा
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="rounded-3xl border border-white/10 bg-[#123D32] p-6 shadow-2xl shadow-black/20 md:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold tracking-wider text-[#C7F36B]">
                BOOK AN APPOINTMENT
              </p>

              <h3 className="text-2xl font-extrabold md:text-3xl">
                अपॉइंटमेंटची माहिती
              </h3>

              <p className="mt-2 text-sm text-[#B9CEC2]">
                कृपया खालील सर्व माहिती योग्य प्रकारे भरा.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Owner Details */}
              <div>
                <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#C7F36B]">
                  <User size={20} />
                  मालकाची माहिती
                </h4>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      मालकाचे पूर्ण नाव *
                    </label>

                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      placeholder="तुमचे नाव टाका"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      मोबाईल नंबर *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="१० अंकी मोबाईल नंबर"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      inputMode="numeric"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Animal Details */}
              <div>
                <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#C7F36B]">
                  <PawPrint size={20} />
                  प्राण्याची माहिती
                </h4>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      प्राण्याचा प्रकार *
                    </label>

                    <select
                      name="animalType"
                      value={formData.animalType}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">प्राण्याचा प्रकार निवडा</option>
                      <option value="DOG">कुत्रा</option>
                      <option value="CAT">मांजर</option>
                      <option value="COW">गाय</option>
                      <option value="BUFFALO">म्हैस</option>
                      <option value="GOAT">शेळी</option>
                      <option value="SHEEP">मेंढी</option>
                      <option value="OTHER">इतर</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      प्राण्याचे नाव
                    </label>

                    <input
                      type="text"
                      name="animalName"
                      value={formData.animalName}
                      onChange={handleChange}
                      placeholder="प्राण्याचे नाव (असल्यास)"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Appointment Details */}
              <div>
                <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#C7F36B]">
                  <CalendarDays size={20} />
                  अपॉइंटमेंटची माहिती
                </h4>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      आवश्यक सेवा *
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">सेवा निवडा</option>
                      <option value="GENERAL_CHECKUP">सामान्य तपासणी</option>
                      <option value="VACCINATION">लसीकरण</option>
                      <option value="TREATMENT">आजार व उपचार</option>
                      <option value="LIVESTOCK_CARE">पशुधन आरोग्य सेवा</option>
                      <option value="HEALTH_CHECKUP">आरोग्य तपासणी</option>
                      <option value="OTHER">इतर</option>
                    </select>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        अपॉइंटमेंटची तारीख *
                      </label>

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={getTodayDate()}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        अपॉइंटमेंटची वेळ *
                      </label>

                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">वेळ निवडा</option>

                        {timeOptions.map((time) => (
                          <option
                            key={time.value}
                            value={time.value}
                          >
                            {time.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      पत्ता *
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="तुमचा संपूर्ण पत्ता टाका"
                      rows="3"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      अतिरिक्त माहिती
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="प्राण्याच्या आरोग्याबद्दल काही माहिती असल्यास येथे लिहा..."
                      rows="4"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="flex items-start gap-3 rounded-xl border border-[#C7F36B]/30 bg-[#C7F36B]/10 p-4 text-[#C7F36B]">
                  <CheckCircle
                    size={22}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      अपॉइंटमेंटची विनंती यशस्वीरित्या पाठवली!
                    </p>

                    <p className="mt-1 text-sm text-[#B9CEC2]">
                      धन्यवाद! तुमची अपॉइंटमेंट विनंती डॉक्टरांना
                      पाठवण्यात आली आहे. डॉक्टर लवकरच तुमच्याशी
                      संपर्क साधतील.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-300">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#C7F36B] px-7 py-4 font-extrabold text-[#123D32] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#C7F36B]/10 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isLoading
                  ? "विनंती पाठवत आहे..."
                  : "अपॉइंटमेंटची विनंती पाठवा"}

                {!isLoading && (
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-center text-xs leading-5 text-[#91AA9D]">
                * चिन्ह असलेली माहिती भरणे आवश्यक आहे.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#123D32] px-5 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <Link to="/" className="flex items-center gap-2">
            <PawPrint size={22} className="text-[#C7F36B]" />
            <span className="font-bold">JeevRaksha</span>
          </Link>

          <p className="text-sm text-[#91AA9D]">
            © {new Date().getFullYear()} JeevRaksha. सर्व हक्क राखीव.
          </p>

          <Link
            to="/"
            className="text-sm font-semibold text-[#C7F36B] hover:text-white"
          >
            मुख्यपृष्ठावर जा
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default BookAppointment;
