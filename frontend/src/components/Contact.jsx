
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  PawPrint,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0B2B24] text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full bg-[#1B5948] px-5 py-2 text-sm font-semibold text-[#C7F36B]">
              आमच्याशी संपर्क साधा
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              तुमच्या प्राण्यांच्या
              <span className="block text-[#C7F36B]">
                आरोग्यासाठी आम्ही सदैव तत्पर!
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#B9CEC2]">
              तुमच्या प्राण्याच्या आरोग्याबाबत काही प्रश्न
              असतील किंवा उपचारांची आवश्यकता असेल, तर
              आजच आमच्याशी संपर्क साधा.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

            {/* Address */}
            <div className="rounded-2xl border border-white/10 bg-[#123D32] p-7 hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#C7F36B] text-[#123D32] flex items-center justify-center">
                <MapPin size={23} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                आमचा पत्ता
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#B9CEC2]">
                ढवळपुरी परिसर
                <br />
                We provide all healthcare services around Dhawalpuri.
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-white/10 bg-[#123D32] p-7 hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#C7F36B] text-[#123D32] flex items-center justify-center">
                <Phone size={23} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                दूरध्वनी क्रमांक
              </h3>

              <p className="mt-3 text-sm text-[#B9CEC2]">
                +91 8421459121
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-[#123D32] p-7 hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#C7F36B] text-[#123D32] flex items-center justify-center">
                <Mail size={23} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                ई-मेल
              </h3>

              <p className="mt-3 text-sm text-[#B9CEC2] break-all">
                kutenilesh510@gmail.com
              </p>
            </div>

            {/* Timing */}
            <div className="rounded-2xl border border-white/10 bg-[#123D32] p-7 hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#C7F36B] text-[#123D32] flex items-center justify-center">
                <Clock size={23} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                कामकाजाची वेळ
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#B9CEC2]">
                सोमवार ते शनिवार, सकाळी ९ ते संध्याकाळी ६
                <br />
                आपत्कालीन प्रसंगी आम्ही सदैव उपलब्ध आहोत.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-[#1B5948] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                प्रत्येक जीवाची काळजी घेऊया!
              </h3>

              <p className="mt-3 text-[#B9CEC2]">
                तुमच्या प्राण्याच्या आरोग्यासाठी आजच
                अपॉइंटमेंट निश्चित करा.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071F19] text-white pt-16 pb-8">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Brand */}
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C7F36B] text-[#123D32] flex items-center justify-center">
                  <PawPrint size={27} />
                </div>

                <span className="text-2xl font-extrabold">
                  Jeev<span className="text-[#C7F36B]">Raksha</span>
                </span>
              </a>

              <p className="mt-6 text-sm leading-7 text-[#B9CEC2]">
                प्रत्येक प्राण्याच्या निरोगी आणि आनंदी
                जीवनासाठी प्रेमळ, विश्वासार्ह आणि
                जबाबदार पशुवैद्यकीय सेवा.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-[#C7F36B]">
                <Heart size={16} />
                प्रत्येक जीव अनमोल आहे!
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">
                महत्त्वाचे दुवे
              </h3>

              <ul className="space-y-4 text-sm text-[#B9CEC2]">
                <li>
                  <a href="#home" className="hover:text-[#C7F36B] transition">
                    मुख्यपृष्ठ
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-[#C7F36B] transition">
                    आमच्याबद्दल
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-[#C7F36B] transition">
                    आमच्या सेवा
                  </a>
                </li>

                <li>
                  <a href="#animals" className="hover:text-[#C7F36B] transition">
                    आम्ही उपचार करतो
                  </a>
                </li>

                <li>
                  <a href="#appointment" className="hover:text-[#C7F36B] transition">
                    अपॉइंटमेंट
                  </a>
                </li>

                {/* Developer Profile Link */}
                <li>
                  <Link
                    to="/developer"
                    className="inline-flex items-center gap-2 font-semibold text-[#C7F36B] transition hover:text-white"
                  >
                    डेव्हलपरला जाणून घ्या
                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">
                आमच्या सेवा
              </h3>

              <ul className="space-y-4 text-sm text-[#B9CEC2]">
                <li>सामान्य आरोग्य तपासणी</li>
                <li>लसीकरण सेवा</li>
                <li>आजारांचे निदान व उपचार</li>
                <li>पशुधन आरोग्य सेवा</li>
                <li>प्रतिबंधात्मक आरोग्य सेवा</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">
                संपर्क माहिती
              </h3>

              <ul className="space-y-5 text-sm text-[#B9CEC2]">

                <li className="flex items-start gap-3">
                  <MapPin size={19} className="text-[#C7F36B] shrink-0" />
                  <span>ढवळपुरी परिसर</span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={19} className="text-[#C7F36B] shrink-0" />
                  <span>+91 8421459121</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={19} className="text-[#C7F36B] shrink-0" />
                  <span>kutenilesh510@gmail.com</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#C7F36B] shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                  </svg>

                  <a
                    href="https://www.instagram.com/nilesh_kute_nk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C7F36B] transition-colors"
                  >
                    Instagram
                  </a>
                </li>

              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#91AA9D]">

            <p>
              © {new Date().getFullYear()} JeevRaksha. सर्व हक्क राखीव.
            </p>

            <p className="flex items-center gap-2">
              प्रेमाने बनवलेले
              <Heart size={15} className="text-[#C7F36B]" />
              प्रत्येक जीवासाठी.
            </p>

          </div>

        </div>
      </footer>
    </>
  );
}

export default Contact;
