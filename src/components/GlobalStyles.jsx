import React from "react";

const GlobalStyles = () => (
  <style>{`
    /* ===== BASE ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background: #030712;
      color: #e5e7eb;
      scroll-behavior: smooth;
    }

    @media (max-width: 640px) {
      section { padding: 4rem 1rem !important; }
      h2, h3 { font-size: clamp(1.8rem, 8vw, 2.5rem) !important; }
      p { font-size: 0.95rem !important; }
    }

    /* ===== NAVBAR ===== */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
    }
    .nav-link { transition: color 0.2s ease; padding: 0.5rem 0; }

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
      .mobile-menu a:hover { background: rgba(96,165,250,0.1); }
    }

    /* ===== SKILL CARD ===== */
    .skill-card {
      transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
      will-change: transform;
    }
    .skill-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 30px rgba(2,6,23,0.6);
      border-color: rgba(96,165,250,0.15);
    }
    .progress-track { background: rgba(255,255,255,0.06); overflow: hidden; }
    .progress-fill { transition: width 600ms cubic-bezier(.2,.9,.2,1); }

    /* ===== PROJECT CARD ===== */
    .project-card {
      transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
      will-change: transform;
    }
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 40px rgba(2,6,23,0.65);
      border-color: rgba(96,165,250,0.14);
    }
    .project-actions { margin-top: auto; }
    .project-actions a:hover {
      transform: translateY(-2px);
      border-color: rgba(37,99,235,0.4) !important;
    }
    @media (max-width: 900px) { .project-grid { grid-template-columns: 1fr !important; } }
    @media (max-width: 1024px) {
      .skill-card, .project-card, .achievement-card { min-height: auto !important; height: auto !important; }
      .project-grid { grid-template-columns: 1fr !important; }
      .video-container { margin: -1rem -1rem 1rem -1rem; border-radius: 0; }
    }

    /* ===== VIDEO ===== */
    .video-container { transition: transform 0.3s ease; }
    .project-card:hover .video-container { transform: scale(1.02); }
    .video-container::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(17,24,39,0.8) 100%);
      pointer-events: none;
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }
    .project-card:hover .video-container::after { opacity: 0; }

    /* ===== ACHIEVEMENT CARD ===== */
    .achievement-card { transition: transform 220ms ease, box-shadow 220ms ease; }
    .achievement-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(2,6,23,0.6); }
    @media (max-width: 900px) { .achievement-grid { grid-template-columns: 1fr !important; } }

    /* ===== CONTACT ===== */
    .contact-container {
      padding: clamp(1rem, 3vw, 2rem);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      align-items: start;
    }
    .contact-info { display: flex; flex-direction: column; gap: 1rem; }
    .contact-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem; }
    .contact-card {
      display: flex;
      gap: 0.8rem;
      align-items: center;
      background: rgba(17,24,39,0.3);
      border: 1px solid rgba(255,255,255,0.05);
      padding: 0.75rem;
      border-radius: 10px;
      transition: all 180ms ease;
      width: 100%;
      color: #e5e7eb;
    }
    .contact-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(2,6,23,0.6);
      border-color: rgba(96,165,250,0.12);
      background: rgba(17,24,39,0.5);
    }
    .contact-form { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
    .contact-input, .contact-textarea {
      width: 100%;
      background: rgba(17,24,39,0.3);
      border: 1px solid rgba(255,255,255,0.07);
      padding: clamp(0.6rem, 2vw, 0.75rem) 0.9rem;
      border-radius: 8px;
      color: #e5e7eb;
      font-size: clamp(0.9rem, 1.5vw, 1rem);
      font-family: inherit;
      transition: all 0.2s ease;
    }
    .contact-input:focus, .contact-textarea:focus {
      outline: none;
      border-color: rgba(96,165,250,0.35);
      background: rgba(17,24,39,0.6);
      box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
    }
    .contact-input::placeholder, .contact-textarea::placeholder { color: #4b5563; }
    .contact-textarea { min-height: 120px; resize: vertical; }
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
      font-family: inherit;
      width: fit-content;
    }
    .contact-btn:hover { transform: translateY(-2px); background: #3b82f6; box-shadow: 0 4px 16px rgba(37,99,235,0.35); }

    @media (max-width: 768px) {
      .contact-container { grid-template-columns: none !important; padding: 1rem; }
      .contact-form { margin-top: 1rem; }
      .contact-cards { grid-template-columns: 1fr; }
      .contact-card { padding: 0.6rem; }
    }
    @media (max-width: 480px) {
      .contact-card > div:first-child { width: 36px !important; height: 36px !important; }
      .project-actions { flex-direction: column !important; align-items: stretch !important; }
      .project-tag { font-size: 0.75rem !important; padding: 0.2rem 0.5rem !important; }
    }
  `}</style>
);

export default GlobalStyles;
