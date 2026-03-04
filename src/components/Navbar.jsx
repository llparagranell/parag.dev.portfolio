import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuVariants = {
    closed: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
};

const navLinks = ["Home", "Skills", "Projects", "Achievements", "Education", "Contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="navbar"
            style={{
                background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
                transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
            }}
        >
            <div
                className="nav-content"
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)",
                }}
            >
                <h1 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontWeight: "700", color: "#fff" }}>
                    Parag Rane
                </h1>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: "flex", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
                    {navLinks.map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                            style={{
                                color: "#9ca3af",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                            }}
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
                        color: "#60a5fa",
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
                    {navLinks.map((item, i) => (
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
    );
};

export default Navbar;
