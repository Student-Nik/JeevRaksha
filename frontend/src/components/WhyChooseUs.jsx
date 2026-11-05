
import {
  Heart,
  ShieldCheck,
  PawPrint,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Heart,
      title: "प्रेमळ सेवा",
      description:
        "प्रत्येक प्राण्याची काळजी, प्रेम आणि आपुलकीने घेतली जाते.",
    },
    {
      icon: PawPrint,
      title: "प्रत्येक जीवासाठी",
      description:
        "पाळीव प्राणी आणि शेतातील पशुधनासाठी पशुवैद्यकीय सेवा.",
    },
    {
      icon: ShieldCheck,
      title: "जबाबदार उपचार",
      description:
        "प्राण्यांच्या आरोग्याला प्राधान्य देऊन योग्य उपचार आणि मार्गदर्शन.",
    },
    {
      icon: Stethoscope,
      title: "आरोग्याची काळजी",
      description:
        "नियमित तपासणी, लसीकरण आणि प्रतिबंधात्मक आरोग्य सेवांवर भर.",
    },
  ];

  return (
    <section className="bg-[#E4F0E5] text-[#123D32] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block rounded-full bg-[#C7F36B] px-5 py-2 text-sm font-bold">
              आम्हाला का निवडावे?
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              केवळ उपचार नाही,
              <span className="block text-[#43835E]">
                प्रत्येक जीवासाठी आपुलकी!
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#557064]">
              प्रत्येक प्राणी हा आपल्या कुटुंबाचा एक भाग आहे.
              त्याचे आरोग्य, सुरक्षितता आणि आनंद यांना महत्त्व
              देऊन सेवा देणे हेच JeevRaksha चे ध्येय आहे.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-7 mt-10">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="flex gap-4">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Icon size={23} className="text-[#43835E]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#71877A]">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 rounded-full bg-[#123D32] px-8 py-4 font-bold text-white transition hover:bg-[#1B5948] hover:-translate-y-1"
            >
              आमच्याशी संपर्क साधा
              <ArrowUpRight size={19} />
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 rounded-[3rem] bg-[#C7F36B] rotate-3" />

            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85"
                alt="प्रेमाने एकत्र असलेले कुत्रे"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B24]/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#C7F36B] flex items-center justify-center text-[#123D32]">
                    <Heart size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      प्रत्येक जीव अनमोल आहे!
                    </h3>

                    <p className="text-sm text-[#E4F0E5] mt-1">
                      सेवा, काळजी आणि आरोग्य.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
