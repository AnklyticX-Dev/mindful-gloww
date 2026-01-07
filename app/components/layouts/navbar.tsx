"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'specialisation', label: 'Specialisation' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'about', label: 'About' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm'
          : 'bg-gradient-to-b from-white via-white/95 to-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-2 focus:outline-none"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[--primary-color] to-[--secondary-color] rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute inset-1 rounded-lg bg-white/90 backdrop-blur-sm" />
              </div>
              <span className="text-xl font-bold text-[--text-primary]">
  Mindful{" "}
  <span className="text-[--primary-color] font-semibold">
    Gloww
  </span>
</span>

            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-[--primary-color]'
                    : 'text-[--text-secondary] hover:text-[--text-primary]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[--primary-color] to-[--secondary-color] transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 py-3 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                color: 'white',
              }}
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[--text-secondary] hover:text-[--text-primary] hover:bg-gray-50/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 px-2 space-y-2 bg-white/90 backdrop-blur-md rounded-xl border border-gray-100/50 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[--primary-color]/10 to-[--secondary-color]/10 text-[--primary-color]'
                    : 'text-[--text-secondary] hover:bg-gray-50/50 hover:text-[--text-primary]'
                }`}
              >
                <span className="font-medium">{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    activeSection === item.id ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-4 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Custom Properties for Theme Colors */}
      <style jsx global>{`
        :root {
          --primary-color: #8B7355;
          --secondary-color: #D4BC9A;
          --text-primary: #2C2416;
          --text-secondary: #5D4C3B;
        }
      `}</style>
    </header>
  );
}