import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LaureateContact = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [hoverAgency, setHoverAgency] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const fadeIn = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  const LOGO_SRC = "data:image/png;base64,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";

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAFAF8",
      color: "#1A2332",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      
    }}>
      {/* NAV */}
      <nav style={{
        padding: "28px 48px",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/"><img src={LOGO_SRC} alt="Laureate Edition" style={{ height: "70px", width: "auto" }}/></Link>
        </div>
        <div style={{ display: "flex", gap: "36px", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }} className="le-desktop-nav">
          <Link to="/" style={{ color: "#8C8C8C", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "#8C8C8C", textDecoration: "none" }}>About</Link>
          <Link to="/agencies" style={{ color: "#8C8C8C", textDecoration: "none" }}>For Agencies</Link>
          <Link to="/contact" style={{ color: "#1A2332", textDecoration: "none" }}>Contact</Link>
        </div>
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        className="le-hamburger"
      >
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
        <span style={{ display: "block", width: "24px", height: "2px", background: "#1A2332" }} />
      </button>
      {menuOpen && (
        <div style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0", width: "100vw", height: "100vh", background: "#FAFAF8", padding: "24px 48px", display: "flex", flexDirection: "column", gap: "20px", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", zIndex: 9999, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <button onClick={() => setMenuOpen(false)} style={{ alignSelf: "flex-end", background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#8C8C8C", marginBottom: "20px" }}>✕</button>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#8C8C8C", textDecoration: "none" }}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} style={{ color: "#8C8C8C", textDecoration: "none" }}>About</Link>
          <Link to="/agencies" onClick={() => setMenuOpen(false)} style={{ color: "#8C8C8C", textDecoration: "none" }}>For Agencies</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ color: "#8C8C8C", textDecoration: "none" }}>Contact</Link>
        </div>
      )}
      <style>{`
        .le-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .le-desktop-nav { display: none !important; }
          .le-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>

      {/* HERO */}
      <section style={{
        maxWidth: "100%",
        margin: "0",
        padding: "80px 48px 72px",
        textAlign: "center",
        background: "#1A2332",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "normal",
            lineHeight: 1.4,
            color: "#E8E4DF",
            margin: "0 0 24px",
            ...fadeIn(0.4),
          }}>
            Projects begin with a conversation.
          </h1>
          <p style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#8899AA",
            maxWidth: "520px",
            margin: "0 auto",
            ...fadeIn(0.6),
          }}>
            If your work has shaped a field and you are considering
            a definitive publication, we would welcome the opportunity
            to explore whether Laureate Edition is the right fit.
          </p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "72px 48px",
        ...fadeIn(0.8),
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}>
          {/* Authors */}
          <div style={{
            padding: "40px 36px",
            background: "#F5F3EF",
            textAlign: "center",
          }}>
            <p style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#9E7C4B",
              marginBottom: "20px",
            }}>
              For authors
            </p>
            <p style={{
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#5A6270",
              margin: "0 0 8px",
            }}>
              You have spent a career building expertise that others
              rely on. A short call to discuss whether a Laureate Edition
              project is right for your work.
            </p>
            <p style={{
              fontSize: "14px",
              color: "#8C8C8C",
              fontStyle: "italic",
              margin: "0 0 28px",
            }}>
              No pitch. No pressure. Just a conversation about fit.
            </p>
            <a
              href="mailto:hello@laureateedition.com"
              onMouseEnter={() => setHoverProject(true)}
              onMouseLeave={() => setHoverProject(false)}
              style={{
                display: "inline-block",
                padding: "12px 32px",
                border: `1px solid ${hoverProject ? "#9E7C4B" : "#1A2332"}`,
                color: hoverProject ? "#9E7C4B" : "#1A2332",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "inherit",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              Discuss a potential project
            </a>
            <p style={{
              fontSize: "13px",
              color: "#BCBCBC",
              marginTop: "16px",
              marginBottom: 0,
            }}>
              hello@laureateedition.com
            </p>
          </div>

          {/* Agencies */}
          <div style={{
            padding: "40px 36px",
            background: "#F5F3EF",
            textAlign: "center",
          }}>
            <p style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#9E7C4B",
              marginBottom: "20px",
            }}>
              For agencies & representation
            </p>
            <p style={{
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#5A6270",
              margin: "0 0 8px",
            }}>
              We welcome inquiries from agents and managers representing
              established experts. Materials available upon request,
              including imprint overview and production timeline.
            </p>
            <p style={{
              fontSize: "14px",
              color: "#8C8C8C",
              fontStyle: "italic",
              margin: "0 0 28px",
            }}>
              We respond to all agency inquiries within two business days.
            </p>
            <a
              href="mailto:agencies@laureateedition.com"
              onMouseEnter={() => setHoverAgency(true)}
              onMouseLeave={() => setHoverAgency(false)}
              style={{
                display: "inline-block",
                padding: "12px 32px",
                border: `1px solid ${hoverAgency ? "#9E7C4B" : "#1A2332"}`,
                color: hoverAgency ? "#9E7C4B" : "#1A2332",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "inherit",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              Request materials
            </a>
            <p style={{
              fontSize: "13px",
              color: "#BCBCBC",
              marginTop: "16px",
              marginBottom: 0,
            }}>
              agencies@laureateedition.com
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{
        background: "#EDE8E1",
        padding: "64px 48px",
      }}>
        <div style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
          ...fadeIn(1.0),
        }}>
          <p style={{
            fontSize: "14px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#9E7C4B",
            marginBottom: "24px",
          }}>
            What to expect
          </p>
          <p style={{
            fontSize: "17px",
            lineHeight: 2.0,
            color: "#5A6270",
            margin: "0 0 24px",
          }}>
            Initial conversations are brief and exploratory. We will ask
            about your background, the ideas you would want the book to
            capture, and whether you have a sense of the audience it would
            serve. There is no obligation and no commitment at this stage.
          </p>
          <p style={{
            fontSize: "17px",
            lineHeight: 2.0,
            color: "#5A6270",
            margin: 0,
          }}>
            If both sides see alignment, we provide a detailed project
            proposal outlining scope, timeline, and editorial approach.
            From there, the decision is yours.
          </p>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "64px 48px",
        textAlign: "center",
        ...fadeIn(1.1),
      }}>
        <p style={{
          fontSize: "17px",
          lineHeight: 2.0,
          color: "#5A6270",
          fontStyle: "italic",
          margin: 0,
        }}>
          Laureate Edition does not operate as an open submission press.
          Projects are considered by invitation and referral. However,
          if you believe your work is a strong fit for what we do,
          we encourage you to reach out directly. The right project
          is always worth a conversation.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid #E8E5E0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link to="/"><img src={LOGO_SRC} alt="Laureate Edition" style={{ height: "40px", width: "auto" }}/></Link>
        </div>
        <span style={{ fontSize: "11px", color: "#BCBCBC" }}>
          &copy; 2026 Laureate Edition. All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default LaureateContact;
