import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Section from "./Section";
import { card, grid, fade } from "./utils/styles";

const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Language" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 78, category: "Database" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Java", level: 75, category: "Language" },
    { name: "Git & GitHub", level: 85, category: "DevOps" },
    { name: "Docker", level: 60, category: "DevOps" },
    { name: "Jenkins", level: 55, category: "DevOps" },
    { name: "REST APIs", level: 88, category: "Backend" },
    { name: "Data Structures & Algorithms", level: 82, category: "CS Fundamentals" },
    { name: "OOPs", level: 88, category: "CS Fundamentals" },
    { name: "Authentication & Authorization", level: 72, category: "Security" },
    { name: "Socket.io", level: 68, category: "Realtime" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
];

const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

const levelLabel = (l) => (l >= 85 ? "Advanced" : l >= 70 ? "Intermediate" : "Learning");

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

    return (
        <Section id="skills" title={<><Code2 size={22} /> Skills</>}>
            {/* Filter pills */}
            <div
                style={{
                    display: "flex",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    marginBottom: "2rem",
                }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            padding: "0.35rem 1rem",
                            borderRadius: "9999px",
                            border: `1px solid ${activeCategory === cat ? "#2563eb" : "rgba(255,255,255,0.08)"}`,
                            background: activeCategory === cat ? "rgba(37,99,235,0.2)" : "rgba(17,24,39,0.4)",
                            color: activeCategory === cat ? "#93c5fd" : "#6b7280",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={{ ...grid, alignItems: "stretch" }}>
                {filtered.map((s, i) => (
                    <motion.div
                        key={s.name}
                        layout
                        {...fade(i * 0.04)}
                        className="skill-card"
                        style={{ ...card, padding: "1rem 1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 130 }}
                    >
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                                <strong style={{ color: "#e5e7eb", fontSize: "1rem" }}>{s.name}</strong>
                                <span style={{ color: "#93c5fd", fontWeight: 700, fontSize: "0.9rem" }}>{s.level}%</span>
                            </div>
                            <span
                                style={{
                                    fontSize: "0.72rem",
                                    color: "#6b7280",
                                    background: "rgba(255,255,255,0.04)",
                                    padding: "0.15rem 0.5rem",
                                    borderRadius: "9999px",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                {s.category}
                            </span>
                        </div>

                        <div>
                            <div
                                className="progress-track"
                                style={{ height: 8, borderRadius: 9999, background: "rgba(255,255,255,0.06)", marginTop: "0.8rem" }}
                            >
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${s.level}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
                                    style={{ height: "100%", borderRadius: 9999, background: "linear-gradient(90deg,#60a5fa,#2563eb)" }}
                                />
                            </div>
                            <p style={{ color: "#9ca3af", marginTop: "0.5rem", fontSize: "0.8rem" }}>{levelLabel(s.level)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
