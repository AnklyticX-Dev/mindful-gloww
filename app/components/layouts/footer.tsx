export default function Footer() {
  return (
    <footer className="bg-[#EEF3F1] py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-[#4A4A4A]">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-[#2F2F2F] mb-3">
            Mindful <span className="text-[#6B9080]">Gloww</span>
          </h3>
          <p className="leading-relaxed">
            A calm, confidential space for healing from narcissistic behaviour,
            emotional abuse, and trauma.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-3 text-[#2F2F2F]">
            Explore
          </h4>
          <ul className="space-y-2">
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
              <a href="#contact" className="hover:text-[#6B9080] transition">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Gentle Disclaimer */}
        <div>
          <h4 className="font-medium mb-3 text-[#2F2F2F]">
            Important Note
          </h4>
          <p className="leading-relaxed text-[#6B7280]">
            Mindful Gloww offers emotional support and guidance.
            It does not replace medical or psychiatric care.
            If you are in immediate danger, please seek local emergency support.
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#D1D5DB] text-center text-xs text-[#6B7280]">
        © {new Date().getFullYear()} Mindful Gloww. All rights reserved.
      </div>
    </footer>
  );
}
