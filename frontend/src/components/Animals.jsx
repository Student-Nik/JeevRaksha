
import { ArrowUpRight, Heart } from "lucide-react";

function Animals() {
  const animals = [
  {
    name: "कुत्रे",
    english: "Dogs",
    description: "तुमच्या लाडक्या श्वानांसाठी प्रेमळ आरोग्य सेवा.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "मांजरी",
    english: "Cats",
    description: "मांजरींच्या उत्तम आरोग्यासाठी योग्य काळजी.",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "गायी",
    english: "Cows",
    description: "गायींच्या आरोग्यासाठी पशुवैद्यकीय सेवा.",
    image:
      "https://images.pexels.com/photos/6079542/pexels-photo-6079542.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "म्हशी",
    english: "Buffaloes",
    description: "म्हशींची निगा आणि आरोग्यविषयक मार्गदर्शन.",
    image:
      "https://images.pexels.com/photos/27062022/pexels-photo-27062022/free-photo-of-buffalo-in-river.jpeg?auto=compress&dpr=1&w=800",
  },
  {
    name: "शेळ्या",
    english: "Goats",
    description: "शेळ्यांच्या आरोग्याची योग्य काळजी आणि उपचार.",
    image:
      "https://images.pexels.com/photos/14688313/pexels-photo-14688313.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "मेंढ्या",
    english: "Sheep",
    description: "मेंढ्यांच्या आरोग्यासाठी विशेष काळजी.",
    image:
      "https://images.pexels.com/photos/9270002/pexels-photo-9270002.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

  return (
    <section
      id="animals"
      className="bg-[#123D32] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-[#1B5948] px-5 py-2 text-sm font-semibold text-[#C7F36B]">
            आमच्यासाठी प्रत्येक जीव महत्त्वाचा
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
            प्रत्येक प्राण्याची
            <span className="block text-[#C7F36B]">
              काळजी, प्रत्येक जीवाचे रक्षण!
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#B9CEC2]">
            पाळीव प्राणी असोत किंवा शेतातील पशुधन,
            प्रत्येकाच्या आरोग्याची काळजी घेणे हेच आमचे ध्येय आहे.
          </p>

        </div>

        {/* Animal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

          {animals.map((animal, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-[#0B2B24] shadow-xl"
            >

              {/* Animal Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B24] via-transparent to-transparent" />

                {/* English label */}
                <span className="absolute top-5 right-5 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white">
                  {animal.english}
                </span>

              </div>

              {/* Content */}
              <div className="relative p-7">

                <div className="flex items-center gap-2 text-[#C7F36B]">
                  <Heart size={17} />
                  <span className="text-sm font-semibold">
                    प्रेम आणि काळजी
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-extrabold">
                  {animal.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#B9CEC2]">
                  {animal.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-[#C7F36B] font-semibold">
                    JeevRaksha
                  </span>

                  <ArrowUpRight
                    size={21}
                    className="text-[#C7F36B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </div>

            </div>
          ))}

        </div>

        

      </div>
    </section>
  );
}

export default Animals;
