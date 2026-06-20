// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = ["Home", "Studio", "Services", "Contact", "FAQ's"];

//   return (
//     <nav className="navbar">
      
//       <div className="navbar__logo">Elementum</div>

      
//       <ul
//         className={`navbar__links ${
//           menuOpen ? "navbar__links--open" : ""
//         }`}
//       >
//         {navLinks.map((link, index) => (
//   <li
//     key={link}
//     className="navbar__item"
//     style={{ "--delay": `${index * 0.05}s` }}
//   >
//     <a href="#" className="navbar__link">
//       {link}
//     </a>
//   </li>
// ))}
//       </ul>

      
//       <button
//         className={`navbar__hamburger ${
//           menuOpen ? "navbar__hamburger--open" : ""
//         }`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//         aria-expanded={menuOpen}
//       >
//         <span className="navbar__hamburger-line" />
//         <span className="navbar__hamburger-line" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Programs", "Impact", "Join Us"];

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar__logo">
        <span className="navbar__logo-mark">🕊</span>
        NayePankh
      </div>

      {/* Nav Links */}
      <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
        {navLinks.map((link, index) => (
          <li
            key={link}
            className="navbar__item"
            style={{ "--delay": `${index * 0.05}s` }}
          >
            <a
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="https://nayepankh.com/donate"
        className="navbar__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate Now
      </a>

      {/* Hamburger Menu */}
      <button
        className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="navbar__hamburger-line" />
        <span className="navbar__hamburger-line" />
      </button>
    </nav>
  );
};

export default Navbar;