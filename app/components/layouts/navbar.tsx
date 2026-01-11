"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ACTIVE SECTION OBSERVER ================= */
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
      { 
        threshold: 0.35,
        rootMargin: "-20% 0px -65% 0px" // Adjusted for better accuracy
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ================= CLOSE MENU ON ESCAPE ================= */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
      if (e.key === "Tab" && isOpen) {
        // Handle tab trapping in mobile menu
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { id: "services", label: "Services" },
    { id: "specialisation", label: "Specialisation" },
    { id: "how-it-works", label: "How it works" },
    { id: "about", label: "About" },
  ];

  /* ================= SCROLL TO SECTION ================= */
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 88;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
    
    // Update focus for accessibility
    const button = document.querySelector(`[data-nav="${sectionId}"]`) as HTMLElement;
    button?.focus();
  };

  /* ================= KEYBOARD NAVIGATION ================= */
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(navItems[index].id);
    }
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % navItems.length;
      setFocusedIndex(nextIndex);
      const nextButton = document.querySelector(`[data-nav="${navItems[nextIndex].id}"]`) as HTMLElement;
      nextButton?.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + navItems.length) % navItems.length;
      setFocusedIndex(prevIndex);
      const prevButton = document.querySelector(`[data-nav="${navItems[prevIndex].id}"]`) as HTMLElement;
      prevButton?.focus();
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E6DED3] shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("hero")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                scrollToSection("hero");
              }
            }}
            className="font-serif text-xl tracking-wide text-[#2C2416] hover:text-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-offset-[#F7F4EF] rounded px-2 py-1 transition-colors"
            aria-label="Mindful Gloww - Return to top"
          >
            <span className="sr-only">Mindful Gloww</span>
            <span aria-hidden="true">
              Mindful <span className="font-semibold text-[#8B7355]">Gloww</span>
            </span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8" role="menubar" aria-label="Main menu">
            {navItems.map((item, index) => (
              <div key={item.id} role="none">
                <button
                  role="menuitem"
                  data-nav={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  className={`group relative text-sm tracking-wide px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-offset-[#F7F4EF] ${
                    activeSection === item.id
                      ? "text-[#8B7355] font-medium"
                      : "text-[#5D4C3B] hover:text-[#2C2416]"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3 -bottom-1 h-0.5 bg-[#8B7355] transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-[calc(100%-1.5rem)]"
                        : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToSection("contact");
                }
              }}
              className="
                px-6 py-2.5
                rounded-full
                bg-[#B36A4C]
                text-white
                text-sm
                font-medium
                hover:bg-[#9E5C41]
                focus:outline-none focus:ring-2 focus:ring-[#B36A4C] focus:ring-offset-2 focus:ring-offset-[#F7F4EF]
                transition-all duration-200
                shadow-sm hover:shadow
              "
              aria-label="Book a consultation"
            >
              Book consultation
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            ref={toggleButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#5D4C3B] hover:text-[#8B7355] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-offset-[#F7F4EF] transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? "max-h-96 opacity-100 mt-2" 
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div 
            className="mt-2 rounded-xl bg-[#F7F4EF]/95 backdrop-blur-md p-4 space-y-1 border border-[#E6DED3] shadow-lg"
            role="menu"
            aria-label="Mobile menu"
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                role="menuitem"
                data-nav={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-1 ${
                  activeSection === item.id
                    ? "text-[#8B7355] bg-[#EFE8DC]/50 font-medium"
                    : "text-[#5D4C3B] hover:bg-[#EFE8DC] focus:bg-[#EFE8DC]"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 mt-2 border-t border-[#E6DED3]">
              <button
                onClick={() => scrollToSection("contact")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToSection("contact");
                  }
                }}
                className="
                  w-full
                  px-4 py-3
                  rounded-lg
                  bg-[#B36A4C]
                  text-white
                  text-sm
                  font-medium
                  hover:bg-[#9E5C41]
                  focus:outline-none focus:ring-2 focus:ring-[#B36A4C] focus:ring-offset-1
                  transition-colors
                  shadow-sm
                "
                aria-label="Book a consultation"
              >
                Book consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SCREEN READER ANNOUNCEMENT */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isOpen ? "Mobile menu opened" : "Mobile menu closed"}
      </div>
    </header>
  );
}
