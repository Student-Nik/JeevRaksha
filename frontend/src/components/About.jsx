
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  PawPrint,
  ArrowUpRight,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-[#E4F0E5] text-[#123D32]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - DOCTOR IMAGE */}
          <div className="relative max-w-lg mx-auto w-full">

            <div className="absolute -top-5 -left-5 w-full h-full rounded-[2.5rem] bg-[#C7F36B]" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/public/doctorimage.jpeg"
                alt="पशुवैद्यकीय डॉक्टर"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
            </div>

            {/* Doctor Profile Card */}
            <div className="absolute -bottom-8 -right-3 md:-right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-[#E4F0E5] flex items-center justify-center">
                <Stethoscope size={27} className="text-[#123D32]" />
              </div>

              <div>
                <h3 className="font-bold text-[#123D32]">
                  Dr. निलेश कुटे
                </h3>
                <p className="text-sm text-[#71877A] mt-1">
                  पशुवैद्यकीय तज्ज्ञ
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT - ABOUT CONTENT */}
          <div>

            <span className="inline-block rounded-full bg-[#C7F36B] px-4 py-2 text-sm font-bold">
              आमच्याविषयी
            </span>

            <h2 className="mt-6 font-[Manrope] text-4xl md:text-5xl font-extrabold leading-tight">
              काळजी मनापासून,
              <span className="block text-[#43835E]">
                सेवा प्रत्येक जीवासाठी!
              </span>
            </h2>

            <p className="mt-7 text-[#557064] leading-8 text-lg">
              जीव रक्षण हेच आमचे ध्येय! JeevRaksha येथे प्रत्येक
              प्राण्याच्या आरोग्याला आणि कल्याणाला सर्वोच्च
              प्राधान्य दिले जाते.
            </p>

            <p className="mt-4 text-[#71877A] leading-8">
              पाळीव प्राणी असोत किंवा शेतातील पशुधन, प्रत्येक
              जीवाला योग्य पशुवैद्यकीय सेवा, प्रेम आणि काळजी
              मिळावी यासाठी आम्ही कटिबद्ध आहोत.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-5 mt-9">

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center">
                  <Heart size={23} className="text-[#43835E]" />
                </div>
                <div>
                  <h3 className="font-bold">
                    प्रेमळ सेवा
                  </h3>
                  <p className="text-sm text-[#71877A] mt-1 leading-6">
                    प्रत्येक प्राण्याची आपुलकीने काळजी.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center">
                  <ShieldCheck size={23} className="text-[#43835E]" />
                </div>
                <div>
                  <h3 className="font-bold">
                    विश्वासार्ह उपचार
                  </h3>
                  <p className="text-sm text-[#71877A] mt-1 leading-6">
                    योग्य मार्गदर्शन आणि जबाबदार उपचार.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center">
                  <PawPrint size={23} className="text-[#43835E]" />
                </div>
                <div>
                  <h3 className="font-bold">
                    सर्व प्राण्यांसाठी
                  </h3>
                  <p className="text-sm text-[#71877A] mt-1 leading-6">
                    पाळीव प्राणी आणि पशुधनासाठी सेवा.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center">
                  <Stethoscope size={23} className="text-[#43835E]" />
                </div>
                <div>
                  <h3 className="font-bold">
                    आरोग्याची काळजी
                  </h3>
                  <p className="text-sm text-[#71877A] mt-1 leading-6">
                    प्रतिबंधात्मक आरोग्य सेवांवर भर.
                  </p>
                </div>
              </div>

            </div>

            {/* Mission Card */}
            <div className="mt-10 rounded-2xl bg-[#123D32] p-6 text-white">

              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart size={21} className="text-[#C7F36B]" />
                आमचे ध्येय
              </h3>

              <p className="mt-3 text-[#B9CEC2] leading-7">
                प्रत्येक प्राण्याला निरोगी, सुरक्षित आणि आनंदी
                जीवन मिळावे, यासाठी दर्जेदार पशुवैद्यकीय सेवा
                उपलब्ध करून देणे.
              </p>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-[#123D32] px-7 py-4 font-bold text-white transition hover:bg-[#1B5948] hover:-translate-y-1"
            >
              आमच्याशी संपर्क साधा
              <ArrowUpRight size={19} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
