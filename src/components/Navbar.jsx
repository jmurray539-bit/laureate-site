import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logoSrc }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/agencies", label: "For Agencies" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      padding: "28px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }}>
      <Link to="/">
        <img src={logoSrc} alt="Laureate Edition" style={{ height: "70px", width: "auto" }} />
      </Link>

      <div style={{
        display: "flex",
        gap: "36px",
        fontSize: "13px",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }} className="desktop-nav">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} style={{ color: "#8C8C8C", textDecoration: "none" }}>
            {link.label}
          </Link>
        ))}
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
        }}
      >
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
      </button>

      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#FAFAF8",
          padding: "24px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          zIndex: 100,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#8C8C8C", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
