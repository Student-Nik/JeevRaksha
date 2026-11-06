
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Handshake,
  Heart,
  Mail,
  PawPrint,
  Rocket,
  Sparkles,
  UserRound,
  Wrench
} from "lucide-react";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "Hibernate / JPA",
  "MySQL",
  "MongoDB",
  "React",
  "JavaScript",
  "HTML & CSS",
  "Tailwind CSS",
  "Git & GitHub",
  "Postman",
  "Linux",
  "Docker",
  "AWS Basics"
];

const projects = [
  {
    name: "JeevRaksha",
    category: "Veterinary Care Platform",
    description: "A veterinary platform for animal healthcare, appointments and digital visit reports.",
    icon: "🐾",
    link: "https://github.com/Student-Nik/JeevRaksha"
  },
  {
    name: "SeedToServe",
    category: "Farmer-Direct E-commerce",
    description: "A platform connecting farmers directly with customers.",
    icon: "🌱",
    link: "https://github.com/Student-Nik/SeedToServe-Backend"
  },
  {
    name: "Habit Tracker",
    category: "Productivity Application",
    description: "An application to organize daily habits and track personal progress.",
    icon: "✓",
    link: "https://github.com/Student-Nik"
  }
];

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="rounded-xl bg-[#E4F0E5] p-3 text-[#123D32]">
        <Icon size={25} />
      </div>
      <h2 className="text-2xl font-bold text-[#123D32]">
        {children}
      </h2>
    </div>
  );
}

function Developer() {
  return (
    <div className="min-h-screen bg-[#F7FAF7] text-gray-800">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <PawPrint size={38} className="text-[#123D32]" />
            <div>
              <h1 className="text-xl font-extrabold text-[#123D32]">
                JeevRaksha
              </h1>
              <p className="text-[10px] text-gray-500">
                Service, Care and Health for Every Animal.
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/#services" className="hover:text-green-700">Services</a>
            <a href="/book-appointment" className="hover:text-green-700">
              Book Appointment
            </a>
            <a href="/#contact" className="hover:text-green-700">Contact</a>
          </div>

          <a
            href="/"
            className="flex items-center gap-2 rounded-full bg-[#123D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B5948]"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Back to Website</span>
            <span className="sm:hidden">Back</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2B24] via-[#123D32] to-[#064B35] text-white">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-12 md:grid-cols-2 md:pt-16">

          {/* Avatar */}
          <div className="relative mx-auto flex h-[340px] w-full max-w-[420px] items-end justify-center md:h-[430px]">
            <div className="absolute bottom-8 h-72 w-72 rounded-full bg-[#C7F36B]/20 blur-2xl" />

            <img
              src="/developer-avatar.png"
              alt="Developer 3D avatar"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
            />

            <div className="absolute left-0 top-10 rounded-2xl border border-green-300/30 bg-white/10 p-4 text-[#C7F36B] backdrop-blur">
              <Code2 size={32} />
            </div>
          </div>

          {/* Introduction */}
          <div className="relative z-10 pb-14 md:pb-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-5 py-2 text-sm font-bold text-[#123D32]">
              <Sparkles size={16} />
              DEVELOPER PROFILE
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Nikhil <span className="text-[#C7F36B]">Kute</span>
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-green-100 sm:text-2xl">
              Java Backend Developer | Software Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-100 sm:text-lg">
              Passionate about building practical software solutions
              using Java, Spring Boot and modern web technologies.
              I enjoy turning ideas into useful applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Student-Nik"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#C7F36B] px-6 py-3 font-semibold transition hover:bg-[#C7F36B] hover:text-[#123D32]"
              >
                <Code2 size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-kute-java"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#C7F36B] px-6 py-3 font-semibold transition hover:bg-[#C7F36B] hover:text-[#123D32]"
              >
                <BriefcaseBusiness size={19} />
                LinkedIn
              </a>
            </div>

            <p className="mt-8 text-lg font-semibold italic text-[#C7F36B]">
              Code. Build. Innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl space-y-7 px-5 py-10 md:px-6 md:py-14">

        {/* About + Education */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md">
            <SectionTitle icon={UserRound}>About Me</SectionTitle>
            <p className="leading-8 text-gray-600">
              I am a dedicated Java Full Stack Developer who loves
              turning ideas into reality. I enjoy solving complex
              problems, learning new technologies and building useful
              applications that make a positive impact.
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-green-100 pt-5 text-sm font-semibold text-[#123D32]">
              <PawPrint size={19} />
              Always Learning · Always Building
            </div>
          </section>

          <section className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-[#E4F0E5] p-7 shadow-sm transition hover:shadow-md">
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>

            <div className="space-y-7">
              <div className="relative border-l-2 border-[#C7F36B] pl-6">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#123D32]" />
                <h3 className="font-bold text-gray-900">
                  B.Sc. Computer Science
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  New Arts Commerce & Science College, Ahilyanagar
                </p>
                <p className="mt-1 text-sm font-semibold text-[#123D32]">
                  CGPA: 9.45
                </p>
              </div>

              <div className="relative border-l-2 border-[#C7F36B] pl-6">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#123D32]" />
                <h3 className="font-bold text-gray-900">
                  M.Sc. Computer Science
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Modern College, Pune
                </p>
                <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-[#123D32]">
                  Currently Pursuing
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Skills */}
        <section className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
          <SectionTitle icon={Wrench}>Technical Skills</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-green-100 bg-[#F1F7F1] px-5 py-3 text-sm font-semibold text-[#123D32] transition hover:-translate-y-1 hover:bg-[#123D32] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
          <SectionTitle icon={BriefcaseBusiness}>Work Experience</SectionTitle>

          <div className="space-y-8">
            <div className="relative border-l-2 border-[#C7F36B] pl-7">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#123D32]" />
              <h3 className="text-lg font-bold text-gray-900">
                Java Backend Developer Intern
              </h3>
              <p className="mt-1 font-medium text-[#123D32]">
                Aarambh Tech Solutions
              </p>
              <p className="mt-1 text-sm text-gray-500">
                July 2026 – Present
              </p>
            </div>

            <div className="relative border-l-2 border-[#C7F36B] pl-7">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#123D32]" />
              <h3 className="text-lg font-bold text-gray-900">
                Java Developer Intern
              </h3>
              <p className="mt-1 font-medium text-[#123D32]">
                LandMine Soft
              </p>
              <p className="mt-1 text-sm text-gray-500">
                January 2026 – March 2026
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
          <SectionTitle icon={Rocket}>Featured Projects</SectionTitle>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col rounded-2xl border border-green-100 bg-[#F8FBF8] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F0E5] text-3xl">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold text-[#123D32]">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-green-700">
                  {project.category}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#123D32] px-5 py-2 text-sm font-semibold text-[#123D32] transition hover:bg-[#123D32] hover:text-white"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="rounded-3xl bg-gradient-to-r from-[#123D32] to-[#064B35] p-8 text-white shadow-lg md:p-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-3">
                <Handshake size={34} className="text-[#C7F36B]" />
                <h2 className="text-3xl font-bold">Connect With Me</h2>
              </div>

              <p className="mt-4 max-w-xl leading-7 text-green-100">
                Feel free to connect with me for collaboration,
                opportunities, or just a friendly conversation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Student-Nik"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#123D32] transition hover:bg-[#C7F36B]"
              >
                <Code2 size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-kute-java"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#123D32] transition hover:bg-[#C7F36B]"
              >
                <BriefcaseBusiness size={19} />
                LinkedIn
              </a>

              <a
                href="mailto:javadev.nikhilkute@gmail.com"
                className="flex items-center gap-2 rounded-full bg-[#C7F36B] px-5 py-3 font-semibold text-[#123D32] transition hover:bg-white"
              >
                <Mail size={19} />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="rounded-3xl border border-green-100 bg-[#E4F0E5] px-6 py-10 text-center">
          <Heart size={30} className="mx-auto text-[#123D32]" />

          <h2 className="mt-4 text-2xl font-bold text-[#123D32]">
            Thank You for Visiting!
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Together, let's build meaningful solutions and make a
            positive difference through technology.
          </p>

          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#123D32] px-7 py-3 font-semibold text-white transition hover:bg-[#1B5948]"
          >
            <ArrowLeft size={18} />
            Back to JeevRaksha
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B2B24] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <PawPrint size={35} className="text-[#C7F36B]" />
            <div>
              <h3 className="text-xl font-bold">JeevRaksha</h3>
              <p className="text-xs text-green-100">
                Service, Care and Health for Every Animal.
              </p>
            </div>
          </div>

          <p className="text-sm text-green-100">
            © 2026 JeevRaksha. All rights reserved.
          </p>

          <a
            href="/"
            className="font-semibold text-[#C7F36B] hover:underline"
          >
            Back to Website ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Developer;
