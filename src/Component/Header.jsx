import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#specialist", label: "Specialist" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/home"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
        >
          <h1 className="text-2xl font-bold text-pink-600">Cosmetic</h1>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded px-2 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Appointment Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="#appointment"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4"
          aria-label="Mobile menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded px-2 py-1"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#appointment"
                  className="block text-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800"
                  onClick={toggleMenu}
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;