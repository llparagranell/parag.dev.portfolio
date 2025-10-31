import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Code2, Award, BookOpen, ChevronDown } from "lucide-react";

// Import video files
import roomBookingVideo from './videos/tourbooking.mp4';
import stockPortfolioVideo from './videos/stock.mp4';
import erpSystemVideo from './videos/erpSystemVideo.mp4';
// import doctooVideo from './videos/doctoo.mp4';
import chatAppVideo from './videos/chat.mp4';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#e5e7eb", fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="nav-content" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)",
        }}>
          <h1 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontWeight: "700", color: "#fff" }}>Parag Rane</h1>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
            {["Home", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "500", fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            onClick={toggleMenu} 
            className="mobile-menu-icon" 
            style={{ 
              display: "none",
              background: "none",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
              color: "#60a5fa"
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className="mobile-menu"
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(17,24,39,0.95)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid #1f2937",
            padding: "0.5rem",
            display: menuOpen ? "block" : "none",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0.5rem" }}>
            {["Home", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#e5e7eb",
                  padding: "0.75rem 1rem",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  borderRadius: "0.5rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(96,165,250,0.1)";
                  e.target.style.color = "#60a5fa";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#e5e7eb";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.nav>
        
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
          padding: "clamp(4rem, 15vh, 6rem) clamp(1rem, 5vw, 2rem) clamp(2rem, 8vh, 3rem)",
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
        <div className="contact-container" style={{ 
          maxWidth: 1000, 
          margin: "0 auto",
        }}>
          <div className="contact-info">
            <p style={{ 
              color: "#9ca3af", 
              fontSize: "clamp(1rem, 2vw, 1.05rem)", 
              marginBottom: "0.6rem" 
            }}>
              Let's collaborate on your next big idea — I'm available for freelance and full-time opportunities.
            </p>

            <div className="contact-cards" style={{ 
              display: "grid",
              gap: "0.8rem",
              marginTop: "0.6rem" 
            }}>
              <a 
                className="contact-card" 
                href="mailto:paragrane000@gmail.com" 
                style={{ 
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "center",
                  padding: "clamp(0.6rem, 2vw, 0.8rem)",
                  borderRadius: 10,
                  transition: "all 0.2s ease",
                  background: "rgba(17, 24, 39, 0.3)"
                }}
              >
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 8, 
                  background: "rgba(37,99,235,0.08)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <Mail color="#60a5fa" />
                </div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>Email</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>paragrane000@gmail.com</div>
                </div>
              </a>

              <a 
                className="contact-card" 
                href="https://github.com/llparagranell" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "center",
                  padding: "clamp(0.6rem, 2vw, 0.8rem)",
                  borderRadius: 10,
                  transition: "all 0.2s ease",
                  background: "rgba(17, 24, 39, 0.3)"
                }}
              >
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 8, 
                  background: "rgba(96,165,250,0.06)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <Github color="#60a5fa" />
                </div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>GitHub</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>llparagranell</div>
                </div>
              </a>

              <a 
                className="contact-card" 
                href="https://linkedin.com/in/parag-rane-414089243" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  textDecoration: "none",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "center",
                  padding: "clamp(0.6rem, 2vw, 0.8rem)",
                  borderRadius: 10,
                  transition: "all 0.2s ease",
                  background: "rgba(17, 24, 39, 0.3)"
                }}
              >
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 8, 
                  background: "rgba(99,102,241,0.06)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <Linkedin color="#60a5fa" />
                </div>
                <div style={{ color: "#e5e7eb" }}>
                  <div style={{ fontWeight: 700 }}>LinkedIn</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>parag-rane</div>
                </div>
              </a>
            </div>

            <p style={{ 
              color: "#9ca3af", 
              marginTop: "1rem", 
              fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
              display: "none",
              "@media (min-width: 768px)": {
                display: "block"
              }
            }}>
              Prefer a quick message? Use the form and I'll get back to you within 48 hours.
            </p>
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
          /* Base responsive styles */
          @media (max-width: 640px) {
            section { padding: 4rem 1rem !important; }
            h2, h3 { font-size: clamp(1.8rem, 8vw, 2.5rem) !important; }
            p { font-size: 0.95rem !important; }
          }

          /* Navbar styles */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(10,10,10,0.85);
            backdrop-filter: blur(10px);
            z-index: 50;
            border-bottom: 1px solid #1f2937;
          }

          .nav-link {
            transition: color 0.2s ease;
            padding: 0.5rem 0;
          }

          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-icon { display: flex !important; align-items: center; justify-content: center; }
            .mobile-menu { padding: 1rem; }
            .mobile-menu a {
              display: block;
              padding: 0.75rem;
              text-align: center;
              font-size: 1.1rem;
              border-radius: 8px;
              transition: all 0.2s ease;
            }
            .mobile-menu a:hover {
              background: rgba(96,165,250,0.1);
            }
            .contact-grid { 
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .project-grid, .achievement-grid { 
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
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
          .contact-container {
            padding: clamp(1rem, 3vw, 2rem);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            align-items: start;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 0.8rem;
          }

          .contact-card {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            background: rgba(17, 24, 39, 0.3);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 0.75rem;
            border-radius: 10px;
            transition: all 180ms ease;
            width: 100%;
          }

          .contact-card:hover { 
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(2,6,23,0.6);
            border-color: rgba(96,165,250,0.12);
            background: rgba(17, 24, 39, 0.5);
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 100%;
          }

          .contact-input, .contact-textarea { 
            width: 100%;
            background: rgba(17, 24, 39, 0.3);
            border: 1px solid rgba(255,255,255,0.05);
            padding: clamp(0.6rem, 2vw, 0.75rem);
            border-radius: 8px;
            color: #e5e7eb;
            font-size: clamp(0.9rem, 1.5vw, 1rem);
            transition: all 0.2s ease;
          }

          .contact-input:focus, .contact-textarea:focus {
            outline: none;
            border-color: rgba(96,165,250,0.3);
            background: rgba(17, 24, 39, 0.5);
          }

          .contact-input::placeholder, .contact-textarea::placeholder { 
            color: #6b7280;
          }

          .contact-textarea { 
            min-height: 120px;
            resize: vertical;
          }

          .contact-btn { 
            background: #2563eb;
            color: white;
            padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
            border-radius: 8px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: clamp(0.9rem, 1.5vw, 1rem);
            width: fit-content;
          }

          .contact-btn:hover { 
            transform: translateY(-2px);
            background: #2d6feb;
          }

          @media (max-width: 768px) {
            .contact-container {
              /* collapse the explicit columns on small screens */
              grid-template-columns: none !important;
              padding: 1rem;
            }
            
            .contact-form {
              margin-top: 1rem;
            }

            .contact-cards {
              grid-template-columns: 1fr;
            }

            .contact-card {
              padding: 0.6rem;
            }
          }

          @media (max-width: 480px) {
            .contact-card > div:first-child {
              width: 36px !important;
              height: 36px !important;
            }
          }

          /* Project video styles */
          .video-container {
            transition: transform 0.3s ease;
          }

          .project-card:hover .video-container {
            transform: scale(1.02);
          }

          .video-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.8) 100%);
            pointer-events: none;
            opacity: 0.6;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .video-container::after {
            opacity: 0;
          }

          /* Responsive grid refinements */
          @media (max-width: 1024px) {
            .skill-card, .project-card, .achievement-card {
              min-height: auto !important;
              height: auto !important;
            }

            .project-grid {
              grid-template-columns: 1fr !important;
            }

            .video-container {
              margin: -1rem -1rem 1rem -1rem;
              border-radius: 0;
            }
          }

          @media (max-width: 480px) {
            .contact-card {
              padding: 0.6rem !important;
              gap: 0.5rem !important;
            }
            .contact-card > div:first-child {
              width: 36px !important;
              height: 36px !important;
            }
            .project-actions {
              flex-direction: column !important;
              align-items: stretch !important;
            }
            .project-tag {
              font-size: 0.75rem !important;
              padding: 0.2rem 0.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

/* ---------- Subcomponents ---------- */

const Section = ({ id, title, children }) => (
  <section id={id} style={{ padding: "clamp(4rem, 12vh, 6rem) clamp(1rem, 5vw, 1.5rem)", maxWidth: "1200px", margin: "0 auto" }}>
    <motion.h3 {...fade(0)} style={{ fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: "600", marginBottom: "clamp(1.5rem, 5vh, 2.5rem)", display: "flex", alignItems: "center", gap: "0.8rem", color: "white" }}>
      {title}
    </motion.h3>
    {children}
  </section>
);

const SkillGrid = () => {
  // Flat list of skills with a simple proficiency (0-100)
  const skills = [
     { name: "Java", level: 75 },
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
      video: roomBookingVideo
    },
    {
      title: "Stock Portfolio Management",
      desc: "MERN app to track stock investments with real-time community discussion board.",
      link: "https://github.com/llparagranell/connect",
      video: stockPortfolioVideo
    },
    {
      title: "University ERP System",
      desc: "MERN app to manage University ERP System.",
      link: "https://github.com/llparagranell/College-Erp-Mini-Project",
      video: erpSystemVideo
    },
    {
      title: "DOCTOO",
      desc: "Doctor appointment booking web application with AI consulting.",
      link: "https://github.com/llparagranell/",
      // video: doctooVideo
    },
    {
      title: "CHAT App",
      desc: "Chatting a Application using MERN Stack and Socket.io for real-time communication.",
      link: "https://github.com/llparagranell/Chat-App",
      video: chatAppVideo
    }
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
        <motion.div 
          key={i} 
          {...fade(i * 0.08)} 
          className="project-card" 
          style={{ 
            ...card, 
            textAlign: "left", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between", 
            minHeight: 220,
            overflow: "hidden"
          }}
        >
          <div>
            {p.video && (
              <div className="video-container" style={{ 
                marginBottom: "1rem", 
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                paddingTop: "56.25%", // 16:9 aspect ratio
                background: "rgba(17, 24, 39, 0.4)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <video
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  onMouseEnter={(e) => {
                    const playPromise = e.target.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => {
                        console.log("Video play failed:", error);
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  onError={(e) => {
                    console.log("Video failed to load:", e.target.error);
                    e.target.style.display = 'none';
                  }}
                >
                  <source src={p.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            
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
