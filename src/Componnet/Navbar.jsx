// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [openBox, setOpenBox] = React.useState(false);
  const toggleMenu = () => setOpenBox(!openBox);

  // Active link style
  const activeClass =
    "text-red-600 font-semibold relative group after:w-full after:h-0.5 after:bg-red-600 after:absolute after:left-0 after:-bottom-1 after:transition-all duration-200";

  const normalClass =
    "text-gray-700 font-medium relative group after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:left-0 after:-bottom-1 after:transition-all duration-200 hover:text-red-600 hover:after:w-full";

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpenBox(false); // close mobile menu
    }
  };

  return (
    <header className="relative w-full bg-white shadow-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="img/team/8.jpeg"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>
          <button onClick={() => scrollToSection("enrollment1")} className={normalClass}>
            Enrollment
          </button>
          <button onClick={() => scrollToSection("benifits1")} className={normalClass}>
            Benefits
          </button>
          <button onClick={() => scrollToSection("result1")} className={normalClass}>
            Result
          </button>
          <button onClick={() => scrollToSection("bolgs1")} className={normalClass}>
            Blogs
          </button>
          <button onClick={() => scrollToSection("courses1")} className={normalClass}>
            Courses
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <button
          onClick={() => scrollToSection("contact1")}
          className="hidden sm:block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`w-5 h-0.5 bg-gray-700 transition-all ${openBox ? "rotate-45 translate-y-0.5" : ""}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-gray-700 mt-1.5 transition-all ${openBox ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-gray-700 mt-1.5 transition-all ${openBox ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {openBox && (
        <div className="sm:hidden bg-white shadow-xl border-t border-gray-200 absolute w-full left-0 top-full flex flex-col items-center py-6 space-y-5 transition-all duration-300 backdrop-blur-sm bg-white/95">
          <NavLink
            to="/"
            onClick={() => setOpenBox(false)}
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold text-lg w-full text-center py-2 hover:bg-gray-50"
                : "text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
            }
          >
            Home
          </NavLink>
          <button
            onClick={() => scrollToSection("enrollment1")}
            className="text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
          >
            Enrollment
          </button>
          <button
            onClick={() => scrollToSection("benifits1")}
            className="text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("result1")}
            className="text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
          >
            Result
          </button>
          <button
            onClick={() => scrollToSection("bolgs1")}
            className="text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
          >
            Blogs
          </button>
          <button
            onClick={() => scrollToSection("courses1")}
            className="text-gray-700 font-medium text-lg w-full text-center py-2 hover:text-red-600 hover:bg-gray-50"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("contact1")}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 mt-2 w-4/5 shadow-md"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
