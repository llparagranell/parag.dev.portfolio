import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "./Section";
import { card, fade } from "./utils/styles";

const achievements = [
    {
        title: "5-Star Rating in Java",
        org: "HackerRank",
        year: "2025",
        note: "Algorithm and language proficiency — top tier badge",
        icon: "⭐",
    },
    {
        title: "5-Star Rating in SQL",
        org: "HackerRank",
        year: "2025",
        note: "Advanced query writing and optimization techniques",
        icon: "⭐",
    },
    {
        title: "300+ Problems Solved",
        org: "GeeksforGeeks",
        year: "2024–2025",
        note: "Consistent DSA practice covering arrays, trees, graphs & DP",
        icon: "🧠",
    },
    {
        title: "AWS APAC Solutions Architecture",
        org: "Amazon Web Services",
        year: "2025",
        note: "Cloud fundamentals, architecture patterns & AWS services",
        icon: "☁️",
    },
    {
        title: "React — The Complete Guide",
        org: "Udemy",
        year: "2024",
        note: "Hooks, Redux, Next.js, Testing — comprehensive React mastery",
        icon: "⚛️",
    },
    {
        title: "Node.js, Express & MongoDB Bootcamp",
        org: "Udemy",
        year: "2024",
        note: "Full-stack backend development, REST APIs, security & deployment",
        icon: "🚀",
    },
    {
        title: "Problem Solving (Intermediate)",
        org: "HackerRank",
        year: "2024",
        note: "Certified in data structures and algorithmic thinking",
        icon: "🏆",
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        org: "freeCodeCamp",
        year: "2023",
        note: "350+ hours — ES6+, OOP, functional programming & algorithms",
        icon: "📜",
    },
];

const Achievements = () => (
    <Section id="achievements" title={<><Award size={22} /> Achievements</>}>
        <div
            className="achievement-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(300px, 1fr))", gap: "1.5rem" }}
        >
            {achievements.map((a, i) => (
                <motion.div
                    key={i}
                    {...fade(i * 0.06)}
                    className="achievement-card"
                    style={{ ...card, display: "flex", gap: "0.9rem", alignItems: "flex-start" }}
                >
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: "linear-gradient(135deg,#0b1220,#071129)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(96,165,250,0.1)",
                            fontSize: "1.3rem",
                            flexShrink: 0,
                        }}
                    >
                        {a.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "0.6rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <h4 style={{ margin: 0, color: "#e5e7eb", fontSize: "0.95rem", fontWeight: 600 }}>
                                {a.title}
                            </h4>
                            <span
                                style={{
                                    background: "rgba(99,102,241,0.1)",
                                    color: "#c7d2fe",
                                    padding: "0.2rem 0.5rem",
                                    borderRadius: 9999,
                                    fontSize: "0.78rem",
                                    border: "1px solid rgba(99,102,241,0.1)",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                }}
                            >
                                {a.year}
                            </span>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.3rem" }}>
                            <span style={{ color: "#60a5fa", fontSize: "0.82rem", fontWeight: 600 }}>{a.org}</span>
                            <span style={{ color: "#374151" }}>—</span>
                            <span style={{ color: "#9ca3af", fontSize: "0.82rem" }}>{a.note}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

export default Achievements;
