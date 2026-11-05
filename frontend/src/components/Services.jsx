
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Beef,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Link
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Stethoscope,
      number: "०१",
      title: "सामान्य तपासणी",
      description:
        "प्राण्यांच्या आरोग्याची नियमित तपासणी करून त्यांच्या आरोग्यविषयक समस्या ओळखणे.",
    },
    {
      icon: Syringe,
      number: "०२",
      title: "लसीकरण सेवा",
      description:
        "विविध आजारांपासून संरक्षण मिळण्यासाठी योग्य लसीकरण आणि मार्गदर्शन.",
    },
    {
      icon: HeartPulse,
      number: "०३",
      title: "आजार व उपचार",
      description:
        "प्राण्यांच्या आजारांचे निदान, योग्य उपचार आणि आरोग्याची काळजी.",
    },
    {
      icon: Beef,
      number: "०४",
      title: "पशुधन आरोग्य सेवा",
      description:
        "गाय, म्हैस, शेळी आणि इतर पशुधनासाठी पशुवैद्यकीय सेवा.",
    },
    {
      icon: ShieldCheck,
      number: "०५",
      title: "प्रतिबंधात्मक आरोग्य सेवा",
      description:
        "आजार होण्यापूर्वीच योग्य काळजी, आरोग्यविषयक सल्ला आणि प्रतिबंधात्मक उपाय.",
    },
    {
      icon: Activity,
      number: "०६",
      title: "आरोग्य तपासणी",
      description:
        "प्राण्यांच्या शारीरिक स्थितीचे निरीक्षण आणि नियमित आरोग्य तपासणी.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0B2B24] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center">

          <span className="inline-block rounded-full bg-[#1B5948] text-[#C7F36B] px-5 py-2 text-sm font-semibold">
            आमच्या सेवा
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
            प्रत्येक जीवासाठी
            <span className="block text-[#C7F36B]">
              आरोग्यदायी सेवा!
            </span>
          </h2>

          <p className="mt-6 text-[#B9CEC2] leading-8 text-lg">
            तुमच्या प्राण्यांच्या उत्तम आरोग्यासाठी
            आम्ही विविध पशुवैद्यकीय सेवा आणि योग्य
            आरोग्यविषयक मार्गदर्शन देण्याचा प्रयत्न करतो.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#123D32] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C7F36B]/50 hover:shadow-2xl"
              >

                {/* Number */}
                <div className="absolute right-7 top-7 text-4xl font-extrabold text-white/10">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B5948] text-[#C7F36B] transition-all duration-300 group-hover:bg-[#C7F36B] group-hover:text-[#123D32]">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-[#B9CEC2] leading-7">
                  {service.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-[#C7F36B] font-semibold">
                    JeevRaksha
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-[#C7F36B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </div>
            );
          })}

        </div>

       

      </div>
    </section>
  );
}

export default Services;
