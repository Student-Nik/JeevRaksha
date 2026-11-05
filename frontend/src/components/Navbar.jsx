
import { useState } from "react";
import { PawPrint, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "मुख्यपृष्ठ", href: "#home" },
    { name: "आमच्याविषयी", href: "#about" },
    { name: "आमच्या सेवा", href: "#services" },
    { name: "प्राणी", href: "#animals" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B2B24]/95 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-11 h-11 rounded-xl bg-[#C7F36B] flex items-center justify-center">
            <PawPrint size={25} className="text-[#123D32]" />
          </div>

          <div>
            <h1 className="font-extrabold text-2xl text-white">
              Jeev<span className="text-[#C7F36B]">Raksha</span>
            </h1>
            <p className="text-[10px] tracking-[2px] text-[#B9CEC2]">
              पशुवैद्यकीय सेवा
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#B9CEC2] hover:text-[#C7F36B] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Appointment Button */}
        <Link
          to="/book-appointment"
          className="hidden lg:flex items-center gap-2 bg-[#C7F36B] text-[#123D32] px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-all"
        >
          अपॉइंटमेंट बुक करा
          <ArrowUpRight size={18} />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B2B24] border-t border-white/10 px-6 py-6">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#B9CEC2] hover:text-[#C7F36B] font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Appointment Button */}
            <Link
              to="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#C7F36B] text-[#123D32] px-5 py-3 rounded-full font-bold"
            >
              अपॉइंटमेंट बुक करा
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
