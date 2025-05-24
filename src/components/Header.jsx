import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import logoImg from "../assets/images/logo1.webp";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);

  const items = [
    { to: "/", label: "Home" },
    { to: "/bookus", label: "Book Now" },
    { to: "/about", label: "About Us" },
    { to: "/menu", label: "Menu" },
    { to: "/contact", label: "Contact" },
    { to:"/services", label: "Services" },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        {/* Mobile logo */}
        <Link to="/" className="logo-mobile">
          <img src={logoImg} alt="Logo" className="logo-img"  loading="lazy"/>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-list desktop">
          {items.slice(0, 3).map((i, idx) => (
            <li key={idx}>
              {i.to ? <Link to={i.to}>{i.label}</Link> : <a href={i.href}>{i.label}</a>}
            </li>
          ))}

          {/* Desktop logo centered */}
          <li className="logo-item">
            <Link to="/">
              <img src={logoImg} 
              alt="Logo" 
              className="logo-img"
              loading="lazy"
              width={80}
              height={80}
              />
            </Link>
          </li>

          {items.slice(3).map((i, idx) => (
            <li key={idx + 3}>
              {i.to ? <Link to={i.to}>{i.label}</Link> : <a href={i.href}>{i.label}</a>}
            </li>
          ))}
        </ul>

        {/* Hamburger icon */}
        <button className="hamburger" onClick={toggle} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Mobile dropdown */}
        {open && (
          <ul className="nav-list mobile">
            {items.map((i, idx) => (
              <li key={idx} onClick={() => setOpen(false)}>
                {i.to ? <Link to={i.to}>{i.label}</Link> : <a href={i.href}>{i.label}</a>}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;