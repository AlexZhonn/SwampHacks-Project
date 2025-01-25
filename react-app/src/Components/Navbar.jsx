import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      {/* Logo */}
      <Link to="/" className="logo-link" onClick={closeMobileMenu}></Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/Anylyze" onClick={closeMobileMenu}>Analyze</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
