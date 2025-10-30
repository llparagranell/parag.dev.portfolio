import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Code2, Award, BookOpen, ChevronDown } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div style={{ background: "#0a0a0a", color: "#e5e7eb", fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}>
      {/* ===== NAVBAR ===== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(10px)",
          zIndex: 50,
          borderBottom: "1px solid #1f2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#fff" }}>Parag Rane</h1>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: "1.5rem" }}>
          {["Home", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "500" }}
              onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" style={{ display: "none" }}>
          <button onClick={toggleMenu} style={{ background: "none", border: "none" }}>
            {menuOpen ? <X color="#60a5fa" size={26} /> : <Menu color="#60a5fa" size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "absolute",
              top: "100%",
              right: "0",
              background: "#111827",
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              borderTop: "1px solid #1f2937",
            }}
          >
            {["Home", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#e5e7eb",
                  padding: "0.75rem 0",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6rem 1rem 2rem",
          textAlign: "center",
        }}
      >
        <motion.h2 {...fade(0.2)} style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", fontWeight: "700", color: "white" }}>
          Hi, Parag Rane <br/>Full Stack Developer
        </motion.h2>
        <motion.p {...fade(0.4)} style={{ maxWidth: "700px", marginTop: "1rem", color: "#9ca3af", fontSize: "1.1rem" }}>
          Building performant and scalable web solutions using React, Node.js, and MongoDB.
        </motion.p>
        <motion.div {...fade(0.6)} style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="mailto:paragrane000@gmail.com" style={buttonStyle}>Hire Me</a>
          <a href="https://github.com/llparagranell" target="_blank" rel="noreferrer" style={{ ...buttonStyle, background: "transparent", border: "1px solid #2563eb" }}>GitHub</a>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ marginTop: "3rem" }}>
          <button
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to skills"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <ChevronDown color="#2563eb" size={30} />
          </button>
        </motion.div>
      </section>

      {/* ===== SECTIONS ===== */}
      <Section id="skills" title={<><Code2 size={22}/> Skills</>}>
        <SkillGrid />
      </Section>

      <Section id="projects" title="🚀 Projects">
        <ProjectGrid />
      </Section>

      <Section id="achievements" title={<><Award size={22}/> Achievements</>}>
        <AchievementGrid />
      </Section>

      <Section id="education" title={<><BookOpen size={22}/> Education</>}>
        <div style={eduGrid}>
          <EduCard title="Masters of Computer Applications" inst="Sri Balaji University, Pune" year="2024 – Present" />
          <EduCard title="Bachelor of Computer Applications" inst="Lakshmi Narain College of Technology" year="2021 – 2024" />
        </div>
      </Section>

      <Section id="contact" title="📬 Get in Touch">
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "1.05rem", marginBottom: "0.6rem" }}>Let's collaborate on your next big idea — I'm available for freelance and full-time opportunities.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", 
              marginTop: "0.6rem" }}>
              <a className="contact-card" href="mailto:paragrane000@gmail.com" style={{ textDecoration: "none", display: "flex", gap: "0.8rem", alignItems: "center", padding: "0.8rem", borderRadius: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><Mail color="#60a5fa" /></div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>Email</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>paragrane000@gmail.com</div>
                </div>
              </a>

              <a className="contact-card" href="https://github.com/llparagranell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", gap: "0.8rem", alignItems: "center", padding: "0.8rem", borderRadius: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(96,165,250,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}><Github color="#60a5fa" /></div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>GitHub</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>llparagranell</div>
                </div>
              </a>

              <a className="contact-card" href="https://linkedin.com/in/parag-rane-414089243" target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", gap: "0.8rem", alignItems: "center", padding: "0.8rem", borderRadius: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(99,102,241,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}><Linkedin color="#60a5fa" /></div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>LinkedIn</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>parag-rane</div>
                </div>
              </a>
            </div>

            <p style={{ color: "#9ca3af", marginTop: "0.8rem", fontSize: "0.9rem" }}>Prefer a quick message? Use the form on the right and I'll get back to you within 48 hours.</p>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      {/* <footer style={{ textAlign: "center", padding: "1.5rem", borderTop: "1px solid #1f2937", color: "#9ca3af", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Parag Rane — Built with ❤️ using React.js
      </footer> */}

      {/* ===== RESPONSIVE STYLES ===== */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-icon { display: block !important; }
          }

          /* Skill card hover */
          .skill-card {
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
            will-change: transform;
          }
          .skill-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 120px;
          }
          .skill-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 30px rgba(2,6,23,0.6);
            border-color: rgba(96,165,250,0.12);
          }

          /* Project card hover & tags */
          .project-card {
            transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
            will-change: transform;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 220px;
          }
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 40px rgba(2,6,23,0.65);
            border-color: rgba(96,165,250,0.14);
          }

          .project-tag { }

          /* ensure project action buttons align across cards */
          .project-actions { margin-top: auto; }

          /* responsive: stack project cards into single column on narrow viewports */
          @media (max-width: 900px) {
            .project-grid { grid-template-columns: 1fr !important; }
          }

          /* Achievements styling */
          .achievement-card { transition: transform 220ms ease, box-shadow 220ms ease; }
          .achievement-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(2,6,23,0.6); }

          @media (max-width: 900px) {
            .achievement-grid { grid-template-columns: 1fr !important; }
          }

          .progress-track {
            background: rgba(255,255,255,0.06);
            overflow: hidden;
          }

          .progress-fill {
            transition: width 600ms cubic-bezier(.2,.9,.2,1);
          }

          /* Contact styles */
          .contact-card {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.02);
            padding: 0.75rem;
            border-radius: 10px;
            transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
          }
          .contact-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(2,6,23,0.6); border-color: rgba(96,165,250,0.08); }

          .contact-input { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); padding: 0.6rem 0.75rem; border-radius: 8px; color: #e5e7eb; }
          .contact-input::placeholder { color: #6b7280; }
          .contact-textarea { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); padding: 0.6rem 0.75rem; border-radius: 8px; color: #e5e7eb; resize: vertical; }

          .contact-btn { background: #2563eb; color: white; padding: 0.6rem 1rem; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; }
          .contact-btn:hover { transform: translateY(-2px); }
        `}
      </style>
    </div>
  );
};

/* ---------- Subcomponents ---------- */

const Section = ({ id, title, children }) => (
  <section id={id} style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
    <motion.h3 {...fade(0)} style={{ fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: "600", marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.8rem", color: "white" }}>
      {title}
    </motion.h3>
    {children}
  </section>
);

const SkillGrid = () => {
  // Flat list of skills with a simple proficiency (0-100)
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 78 },
    { name: "MySQL", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "Docker", level: 60 },
    { name: "Jenkins", level: 55 },
    { name: "Data Structures & Algorithms", level: 82 },
    { name: "OOPs", level: 88 },
    { name: "Authentication & Authorization", level: 72 },
  ];

  return (
    <div style={{ ...grid, alignItems: "stretch" }}>
      {skills.map((s, i) => (
        <motion.div key={i} {...fade(i * 0.04)} className="skill-card" style={{ ...card, padding: "1rem 1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 120 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
            <strong style={{ color: "#e5e7eb", fontSize: "1rem" }}>{s.name}</strong>
            <span style={{ color: "#93c5fd", fontWeight: 700, fontSize: "0.9rem" }}>{s.level}%</span>
          </div>

          <div className="progress-track" style={{ height: 10, borderRadius: 9999, background: "rgba(255,255,255,0.06)" }}>
            <div className="progress-fill" style={{ width: `${s.level}%`, height: "100%", borderRadius: 9999, background: "linear-gradient(90deg,#60a5fa,#2563eb)" }} />
          </div>

          <p style={{ color: "#9ca3af", marginTop: "0.65rem", fontSize: "0.85rem" }}>
            {s.level >= 85 ? "Advanced" : s.level >= 70 ? "Intermediate" : "Learning"}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const ProjectGrid = () => {
  const projects = [
    {
      title: "Room Booking Web App",
      desc: "Full-stack app with secure login, search, and booking using MERN stack.",
      link: "https://github.com/llparagranell/tourbooking",
    },
    {
      title: "Stock Portfolio Management",
      desc: "MERN app to track stock investments with real-time community discussion board.",
      link: "https://github.com/llparagranell/connect",
    },
    {
      title: "University ERP System",
      desc: "MERN app to manage University ERP System.",
      link: "https://github.com/llparagranell/College-Erp-Mini-Project",
    },
     {
      title: "DOCTOO",
      desc: "Doctor appointment booking web application with AI consulting.",
      link: "https://github.com/llparagranell/",
    },
    {
      title: "CHAT App",
      desc: "Chatting a Application using MERN Stack and Socket.io for real-time communication.",
      link: "https://github.com/llparagranell/Chat-App",
    },

  ];
  // add optional tags/tech for each project for nicer display
  const enriched = projects.map((p) => ({
    ...p,
    tags: p.title.includes("Room")
      ? ["MERN", "Auth", "Booking"]
      : p.title.includes("Stock")
      ? ["MERN", "Realtime", "Charts"]
      : ["MERN", "CRUD"],
  }));

  return (
    <div className="project-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(320px, 1fr))", gap: "2rem" }}>
      {enriched.map((p, i) => (
  <motion.div key={i} {...fade(i * 0.08)} className="project-card" style={{ ...card, textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 220 }}>
          <div>
            <h4 style={{ color: "#60a5fa", fontWeight: "600", marginBottom: "0.4rem" }}>{p.title}</h4>
            <p style={{ color: "#9ca3af", margin: "0.5rem 0 1rem" }}>{p.desc}</p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              {p.tags.map((t, k) => (
                <span key={k} className="project-tag" style={{ background: "rgba(96,165,250,0.08)", color: "#93c5fd", padding: "0.28rem 0.6rem", borderRadius: 9999, fontSize: "0.8rem", border: "1px solid rgba(96,165,250,0.08)" }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem", alignItems: "center" }} className="project-actions">
            <a href={p.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#111827", border: "1px solid rgba(37,99,235,0.12)", color: "#60a5fa", padding: "0.5rem 0.8rem", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}>
              <Github size={16} /> View on GitHub
            </a>
            {/* placeholder for demo button if needed later */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const EduCard = ({ title, inst, year }) => (
  <motion.div {...fade(0.2)} style={card}>
    <h4 style={{ color: "#60a5fa", fontWeight: "600" }}>{title}</h4>
    <p style={{ color: "#d1d5db", marginTop: "0.5rem" }}>{inst}</p>
    <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>{year}</p>
  </motion.div>
);

const AchievementGrid = () => {
  const achievements = [
    { title: "5-star rating in Java", org: "HackerRank", year: "2025", note: "Algorithm and language proficiency" },
    { title: "5-star rating in SQL", org: "HackerRank", year: "2025", note: "Advanced query and optimization" },
    { title: "300+ coding problems solved", org: "GeeksforGeeks", year: "2024-2025", note: "DSA practice and problem solving" },
    { title: "AWS APAC Solutions Architecture Program", org: "AWS", year: "2025", note: "Cloud fundamentals & architecture" },
    { title: "React — The Complete Guide", org: "Udemy", year: "2024", note: "Comprehensive React course" },
    { title: "Node.js, Express, MongoDB Bootcamp", org: "Udemy", year: "2024", note: "Full-stack backend development" },
  ];

  return (
    <div className="achievement-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(300px, 1fr))", gap: "1.5rem" }}>
      {achievements.map((a, i) => (
        <motion.div key={i} {...fade(i * 0.06)} className="achievement-card" style={{ ...card, display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#0b1220,#071129)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(96,165,250,0.08)" }}>
            <Award color="#60a5fa" size={20} />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.6rem" }}>
              <h4 style={{ margin: 0, color: "#e5e7eb", fontSize: "1rem", fontWeight: 600 }}>{a.title}</h4>
              <span className="achievement-year" style={{ background: "rgba(99,102,241,0.08)", color: "#c7d2fe", padding: "0.25rem 0.5rem", borderRadius: 9999, fontSize: "0.8rem", border: "1px solid rgba(99,102,241,0.08)" }}>{a.year}</span>
            </div>
            <p style={{ margin: "0.35rem 0", color: "#9ca3af", fontSize: "0.9rem" }}>{a.org} — <span style={{ color: "#d1d5db" }}>{a.note}</span></p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !message) {
      setError("Please provide your email and a short message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name || "Anonymous"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name || "Anonymous"} (${email})`);
    window.location.href = `mailto:paragrane000@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <input className="contact-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="contact-input" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea className="contact-textarea" placeholder="Message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />

      {error && <div style={{ color: "#fca5a5", fontSize: "0.9rem" }}>{error}</div>}
      {sent && <div style={{ color: "#86efac", fontSize: "0.9rem" }}>Opening your email client…</div>}

      <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.4rem" }}>
        <button type="submit" className="contact-btn">Send message</button>
        <button type="button" onClick={() => { setName(""); setEmail(""); setMessage(""); setError(""); }} className="contact-btn" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#9ca3af" }}>Clear</button>
      </div>
    </form>
  );
};

/* ---------- Styles ---------- */
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" };
const card = { background: "#0f172a", padding: "1.5rem", borderRadius: "10px", border: "1px solid #1f2937" };
const ulStyle = { listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8rem", color: "#d1d5db" };
const eduGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" };
const buttonStyle = { background: "#2563eb", color: "white", padding: "0.8rem 1.8rem", borderRadius: "8px", fontWeight: "600", textDecoration: "none" };

export default Portfolio;
