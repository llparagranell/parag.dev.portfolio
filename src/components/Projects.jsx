import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import { card, fade } from "./utils/styles";

// Import videos
import roomBookingVideo from "../videos/tourbooking.mp4";
import stockPortfolioVideo from "../videos/stock.mp4";
import erpSystemVideo from "../videos/erpSystemVideo.mp4";
import chatAppVideo from "../videos/chat.mp4";

const projects = [
    {
        title: "Room Booking Web App",
        desc: "A production-ready full-stack booking platform with secure JWT authentication, advanced search & filter, booking management dashboard, and email notifications.",
        link: "https://github.com/llparagranell/tourbooking",
        video: roomBookingVideo,
        tags: ["MERN", "JWT Auth", "Booking", "REST API"],
        highlights: ["Secure Login", "Search & Filter", "Dashboard"],
    },
    {
        title: "Stock Portfolio Management",
        desc: "Real-time stock investment tracker with live price updates, portfolio analytics, gain/loss calculation, and a community discussion board for investors.",
        link: "https://github.com/llparagranell/connect",
        video: stockPortfolioVideo,
        tags: ["MERN", "Realtime", "Charts", "Community"],
        highlights: ["Live Data", "Portfolio Analytics", "Discussion Feed"],
    },
    {
        title: "University ERP System",
        desc: "Enterprise-grade multi-role ERP covering student management, course enrollment, attendance tracking, result management, and admin controls.",
        link: "https://github.com/llparagranell/College-Erp-Mini-Project",
        video: erpSystemVideo,
        tags: ["MERN", "Multi-role", "ERP", "CRUD"],
        highlights: ["Multi-Role Access", "Attendance", "Results"],
    },
    {
        title: "DOCTOO — Doctor Appointment App",
        desc: "Smart doctor appointment booking platform with AI-assisted initial consultation, specialist search by location & department, and real-time availability.",
        link: "https://github.com/llparagranell/",
        tags: ["MERN", "AI", "Appointments", "Search"],
        highlights: ["AI Consulting", "Specialist Search", "Booking"],
    },
    {
        title: "Real-Time Chat App",
        desc: "Full-featured chat application built with Socket.io enabling real-time messaging, online status indicators, group rooms, and message history.",
        link: "https://github.com/llparagranell/Chat-App",
        video: chatAppVideo,
        tags: ["MERN", "Socket.io", "Realtime", "Chat"],
        highlights: ["Live Messaging", "Online Status", "Group Rooms"],
    },
];

const Projects = () => (
    <Section id="projects" title="🚀 Projects">
        <div
            className="project-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(320px, 1fr))", gap: "2rem" }}
        >
            {projects.map((p, i) => (
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
                        minHeight: 280,
                        overflow: "hidden",
                    }}
                >
                    {/* Video / placeholder */}
                    {p.video ? (
                        <div
                            className="video-container"
                            style={{
                                marginBottom: "1rem",
                                borderRadius: "8px",
                                overflow: "hidden",
                                position: "relative",
                                paddingTop: "52%",
                                background: "rgba(17,24,39,0.4)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            <video
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                                preload="metadata"
                                playsInline
                                muted
                                loop
                                onMouseEnter={(e) => e.target.play().catch(() => { })}
                                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                                onError={(e) => (e.target.style.display = "none")}
                            >
                                <source src={p.video} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div
                            style={{
                                marginBottom: "1rem",
                                height: "140px",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(99,102,241,0.08))",
                                border: "1px solid rgba(255,255,255,0.05)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "3rem",
                            }}
                        >
                            🩺
                        </div>
                    )}

                    <div style={{ flex: 1 }}>
                        <h4 style={{ color: "#60a5fa", fontWeight: "700", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                            {p.title}
                        </h4>
                        <p style={{ color: "#9ca3af", margin: "0.5rem 0 0.8rem", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            {p.desc}
                        </p>

                        {/* Highlights */}
                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                            {p.highlights.map((h, k) => (
                                <span
                                    key={k}
                                    style={{
                                        background: "rgba(16,185,129,0.07)",
                                        color: "#6ee7b7",
                                        padding: "0.2rem 0.55rem",
                                        borderRadius: "9999px",
                                        fontSize: "0.75rem",
                                        border: "1px solid rgba(16,185,129,0.12)",
                                    }}
                                >
                                    ✓ {h}
                                </span>
                            ))}
                        </div>

                        {/* Tags */}
                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                            {p.tags.map((t, k) => (
                                <span
                                    key={k}
                                    className="project-tag"
                                    style={{
                                        background: "rgba(96,165,250,0.08)",
                                        color: "#93c5fd",
                                        padding: "0.25rem 0.6rem",
                                        borderRadius: 9999,
                                        fontSize: "0.78rem",
                                        border: "1px solid rgba(96,165,250,0.08)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }} className="project-actions">
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "#111827",
                                border: "1px solid rgba(37,99,235,0.2)",
                                color: "#60a5fa",
                                padding: "0.5rem 0.9rem",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                transition: "all 0.2s ease",
                            }}
                        >
                            <Github size={16} /> GitHub
                        </a>
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(37,99,235,0.1)",
                                border: "1px solid rgba(37,99,235,0.2)",
                                color: "#93c5fd",
                                padding: "0.5rem 0.9rem",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                transition: "all 0.2s ease",
                            }}
                        >
                            <ExternalLink size={16} /> Demo
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

export default Projects;
