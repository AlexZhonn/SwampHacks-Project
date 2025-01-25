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
      <Link to="/" className="logo-link" onClick={closeMobileMenu}>
        {/* Add a logo image or text here */}
      </Link>
      <nav>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
          <a onClick={closeMobileMenu} className="close-menu-button">
            close
          </a>
        </li>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/analyze" onClick={closeMobileMenu}>Analyze</Link>
        </li>
      </ul>
      </nav>
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