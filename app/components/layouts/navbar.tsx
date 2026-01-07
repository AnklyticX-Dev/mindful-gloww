"use client";

export default function Navbar() {
  return (
    <header className="w-full bg-[#F8F7F5] border-b border-[#E5E7EB]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-semibold text-[#2F2F2F]">
          Mindful <span className="text-[#6B9080]">Gloww</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#4A4A4A]">
          <li>
            <a href="#services" className="hover:text-[#6B9080] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#specialisation" className="hover:text-[#6B9080] transition">
              Specialisation
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-[#6B9080] transition">
              How it Works
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="text-sm bg-[#6B9080] text-white px-5 py-2 rounded-full hover:bg-[#5F8374] transition"
        >
          Book Consultation
        </a>
      </nav>
    </header>
  );
}
