"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ACTIVE SECTION ================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "specialisation", label: "Specialisation" },
    { id: "how-it-works", label: "How it works" },
    { id: "about", label: "About" },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 88;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E6DED3]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LOGO */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-xl tracking-wide text-[#2C2416]"
          >
            Mindful <span className="font-semibold text-[#8B7355]">Gloww</span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative text-sm tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-[#8B7355]"
                    : "text-[#5D4C3B] hover:text-[#2C2416]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-[#8B7355] transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="
                px-6 py-2.5
                rounded-full
                bg-[#B36A4C]
                text-white
                text-sm
                font-medium
                hover:bg-[#9E5C41]
                transition
              "
            >
              Book consultation
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#5D4C3B]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 rounded-2xl bg-[#F7F4EF]/95 backdrop-blur-md p-4 space-y-2 border border-[#E6DED3]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition ${
                  activeSection === item.id
                    ? "text-[#8B7355]"
                    : "text-[#5D4C3B] hover:bg-[#EFE8DC]"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="
                w-full mt-3
                px-4 py-3
                rounded-lg
                bg-[#B36A4C]
                text-white
                text-sm
                font-medium
              "
            >
              Book consultation
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
