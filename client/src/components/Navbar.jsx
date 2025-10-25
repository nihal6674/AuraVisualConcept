import { useState, useEffect } from "react";

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("#hero");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "#hero" },
    { name: "Why Choose Us", id: "#why-choose-us" },
    { name: "Services", id: "#services" },
    { name: "Contact", id: "#contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const link of links) {
        const section = document.querySelector(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/0 backdrop-blur-none">
      <div className="max-w-6xl mx-auto flex justify-end items-center px-6 py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-black text-base">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative hover:text-red-600 transition-colors duration-300 active:scale-95 ${
                  currentSection === link.id ? "text-red-600" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all duration-300 ${
                    currentSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center gap-8">
          {/* Close Icon */}
          <button
            className="absolute top-6 right-6 text-black text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-3xl font-semibold transition-colors duration-300 active:scale-95 ${
                currentSection === link.id ? "text-red-600" : "text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
