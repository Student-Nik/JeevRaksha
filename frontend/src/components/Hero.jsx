
import {
  ArrowUpRight,
  ArrowRight,
  Heart,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#123D32] text-white"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1B5948] rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B5948] rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <Heart size={15} className="text-[#C7F36B]" />
              <span className="text-sm text-[#D5E5DA]">
                प्रेमळ सेवा • निरोगी प्राणी • आनंदी जीवन
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-extrabold text-4xl md:text-5xl xl:text-6xl leading-[1.3] tracking-tight">
              प्रत्येक जीवाला
              <br />
              मिळावा
              <br />
              <span className="text-[#C7F36B]">
                प्रेमळ उपचार!
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg text-[#B9CEC2] leading-9 max-w-xl">
              तुमचे लाडके पाळीव प्राणी असोत किंवा शेतातील
              पशुधन, प्रत्येक प्राण्याच्या उत्तम आरोग्यासाठी
              आम्ही देतो प्रेमळ, विश्वासार्ह आणि योग्य
              पशुवैद्यकीय सेवा.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">

              {/* Book Appointment */}
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-3 bg-[#C7F36B] text-[#123D32] px-7 py-4 rounded-full font-bold hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                अपॉइंटमेंट बुक करा
                <ArrowUpRight size={19} />
              </Link>

              {/* Explore Services */}
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-white/25 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                आमच्या सेवा पहा
                <ArrowRight size={18} />
              </a>

            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-6 mt-12">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="text-[#C7F36B]" size={21} />
                </div>
                <span className="text-sm text-[#D5E5DA]">
                  विश्वासार्ह सेवा
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Stethoscope className="text-[#C7F36B]" size={21} />
                </div>
                <span className="text-sm text-[#D5E5DA]">
                  योग्य पशुवैद्यकीय मार्गदर्शन
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative max-w-xl mx-auto w-full">

            <div className="absolute inset-0 bg-[#C7F36B] rounded-[3rem] rotate-3 opacity-80" />

            <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85"
                alt="प्रेमळ काळजी घेतलेला कुत्रा"
                className="w-full h-[420px] md:h-[540px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B24]/50 via-transparent to-transparent" />
            </div>

            {/* Floating care card */}
            <div className="absolute -left-5 bottom-10 md:-left-10 bg-white text-[#123D32] p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-[#E4F0E5] flex items-center justify-center">
                <Heart size={25} className="text-green-700" />
              </div>

              <div>
                <p className="font-bold text-sm">
                  प्रत्येक जीवाची काळजी
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  पाळीव प्राणी आणि पशुधन
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-3 top-10 md:-right-7 bg-[#C7F36B] text-[#123D32] rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-extrabold text-xl">
                १००%
              </p>
              <p className="text-xs font-semibold">
                प्रेम आणि आपुलकी
              </p>
            </div>

          </div>
        </div>

        {/* Bottom highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 mt-20 pt-10">

          <div>
            <h3 className="text-3xl font-extrabold text-[#C7F36B]">
              सर्व
            </h3>
            <p className="text-sm text-[#B9CEC2] mt-2">
              प्राण्यांसाठी सेवा
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white">
              प्रेम
            </h3>
            <p className="text-sm text-[#B9CEC2] mt-2">
              प्रत्येक उपचारात
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white">
              आरोग्य
            </h3>
            <p className="text-sm text-[#B9CEC2] mt-2">
              आमचे पहिले प्राधान्य
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-[#C7F36B]">
              सदैव
            </h3>
            <p className="text-sm text-[#B9CEC2] mt-2">
              तुमच्या सेवेसाठी
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
