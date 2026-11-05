
import { useState } from "react";
import {
  Search,
  CalendarDays,
  Heart,
  Stethoscope,
  Pill,
  ImagePlus,
  ArrowUpRight,
} from "lucide-react";

const visits = [
  {
    id: 1,
    animalName: "गौरी",
    animalType: "गाय",
    english: "Cow",
    date: "04 नोव्हेंबर 2026",
    purpose: "ताप आणि अशक्तपणा",
    details:
      "मागील दोन दिवसांपासून भूक कमी झाली होती. तपासणीदरम्यान शरीराचे तापमान वाढलेले आणि अशक्तपणा जाणवला.",
    treatment:
      "तापावरील औषधे दिली. पुरेसे पाणी आणि योग्य आहार देण्याचा सल्ला दिला.",
    image:
      "",
    status: "उपचार पूर्ण",
  },
  {
    id: 2,
    animalName: "शेरू",
    animalType: "कुत्रा",
    english: "Dog",
    date: "03 नोव्हेंबर 2026",
    purpose: "नियमित आरोग्य तपासणी",
    details:
      "सामान्य शारीरिक तपासणी केली. प्राणी सक्रिय होता आणि कोणतीही गंभीर आरोग्य समस्या आढळली नाही.",
    treatment:
      "नियोजित लसीकरण केले. पुढील लसीकरणासाठी वेळापत्रक देण्यात आले.",
    image:
      "",
    status: "उपचार पूर्ण",
  },
  {
    id: 3,
    animalName: "मिनी",
    animalType: "शेळी",
    english: "Goat",
    date: "02 नोव्हेंबर 2026",
    purpose: "पचनाचा त्रास",
    details:
      "खाणे कमी झाले होते आणि पोट फुगल्याची तक्रार होती. शारीरिक तपासणी करून लक्षणांचे निरीक्षण केले.",
    treatment:
      "आवश्यक औषधोपचार केले आणि आहारामध्ये बदल करण्याचा सल्ला दिला.",
    image:
      "",
    status: "पुढील तपासणी",
  },
  {
    id: 4,
    animalName: "राणी",
    animalType: "म्हैस",
    english: "Buffalo",
    date: "01 नोव्हेंबर 2026",
    purpose: "जखमेची तपासणी",
    details:
      "पायाला झालेल्या जखमेची तपासणी केली. जखमेच्या आसपास सूज आणि वेदना जाणवत होत्या.",
    treatment:
      "जखम स्वच्छ करून आवश्यक उपचार केले. नियमित स्वच्छता ठेवण्याच्या सूचना दिल्या.",
    image:
      "",
    status: "पुढील तपासणी",
  },
];

function RecentVisits() {
  const [search, setSearch] = useState("");
  const [selectedVisit, setSelectedVisit] = useState(null);

  const filteredVisits = visits.filter((visit) =>
    `${visit.animalName} ${visit.animalType} ${visit.purpose}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#F4F7F2] py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F0E5] px-4 py-2 text-sm font-semibold text-[#1B5948]">
              <Heart size={16} />
              पशुवैद्यकीय सेवा नोंद
            </span>

            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold text-[#123D32]">
              अलीकडील भेटी
            </h1>

            <p className="mt-3 text-[#6B8175]">
              प्राण्यांच्या अलीकडील तपासण्या, आजार आणि उपचारांची माहिती.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-6 py-4 shadow-sm border border-[#E4EDE5]">
            <p className="text-sm text-[#718579]">एकूण नोंदवलेल्या भेटी</p>
            <p className="mt-1 text-3xl font-extrabold text-[#123D32]">
              {visits.length.toString().padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-10 relative max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#82968A]"
          />
          <input
            type="text"
            placeholder="प्राण्याचे नाव, प्रकार किंवा आजार शोधा..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-[#E0E9E1] bg-white py-4 pl-12 pr-5 text-[#123D32] outline-none focus:border-[#1B5948]"
          />
        </div>

        {/* Visit Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVisits.map((visit) => (
            <article
              key={visit.id}
              className="group overflow-hidden rounded-3xl bg-white border border-[#E5ECE5] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Animal Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={visit.image}
                  alt={`${visit.animalType} - ${visit.animalName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <span className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#123D32]">
                  {visit.english}
                </span>

                <span className="absolute bottom-5 left-6 text-white text-2xl font-extrabold">
                  {visit.animalName}
                </span>

                <span className="absolute bottom-6 right-6 flex items-center gap-2 text-white text-sm">
                  <CalendarDays size={15} />
                  {visit.date}
                </span>
              </div>

              {/* Visit Information */}
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 text-[#1B5948]">
                  <Stethoscope size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    आजार / भेटीचा उद्देश
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-extrabold text-[#123D32]">
                  {visit.purpose}
                </h2>

                <div className="mt-6">
                  <p className="text-sm font-bold text-[#123D32]">
                    तपासणीचा तपशील
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#718579]">
                    {visit.details}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl bg-[#F1F6F0] p-4">
                  <div className="flex items-center gap-2 text-[#1B5948]">
                    <Pill size={17} />
                    <span className="text-sm font-bold">उपचार</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#62796B]">
                    {visit.treatment}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#E4F0E5] px-4 py-2 text-xs font-bold text-[#1B5948]">
                    {visit.status}
                  </span>

                  <button
                    onClick={() => setSelectedVisit(visit)}
                    className="flex items-center gap-2 text-sm font-bold text-[#1B5948] hover:text-[#123D32]"
                  >
                    संपूर्ण माहिती
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredVisits.length === 0 && (
          <div className="mt-10 rounded-3xl bg-white p-12 text-center">
            <Search size={35} className="mx-auto text-[#82968A]" />
            <p className="mt-4 font-semibold text-[#123D32]">
              कोणतीही भेट आढळली नाही.
            </p>
          </div>
        )}

        {/* Details Modal */}
        {selectedVisit && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedVisit(null)}
          >
            <div
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#1B5948]">
                    भेटीचा संपूर्ण अहवाल
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-[#123D32]">
                    {selectedVisit.animalName} – {selectedVisit.animalType}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedVisit(null)}
                  className="rounded-full bg-[#E4F0E5] px-4 py-2 text-sm font-bold text-[#123D32]"
                >
                  बंद करा
                </button>
              </div>

              <img
                src={selectedVisit.image}
                alt={selectedVisit.animalName}
                className="mt-6 h-64 w-full rounded-2xl object-cover"
              />

              <p className="mt-5 text-sm text-[#718579]">
                {selectedVisit.date}
              </p>

              <h3 className="mt-5 font-bold text-[#123D32]">
                आजार / भेटीचा उद्देश
              </h3>
              <p className="mt-2 text-[#62796B]">
                {selectedVisit.purpose}
              </p>

              <h3 className="mt-5 font-bold text-[#123D32]">
                तपासणीचा तपशील
              </h3>
              <p className="mt-2 leading-7 text-[#62796B]">
                {selectedVisit.details}
              </p>

              <h3 className="mt-5 font-bold text-[#123D32]">
                उपचार
              </h3>
              <p className="mt-2 leading-7 text-[#62796B]">
                {selectedVisit.treatment}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default RecentVisits;
