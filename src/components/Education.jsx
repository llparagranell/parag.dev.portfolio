import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, MapPin } from "lucide-react";
import Section from "./Section";
import { card, fade } from "./utils/styles";

const educationData = [
    {
        degree: "Masters of Computer Applications",
        shortDegree: "MCA",
        institution: "Sri Balaji University, Pune",
        location: "Pune, Maharashtra",
        year: "2024 – Present",
        status: "Ongoing",
        relevantCourses: ["Advanced Algorithms", "Cloud Computing", "Software Engineering", "AI & ML Fundamentals"],
        color: "#60a5fa",
    },
    {
        degree: "Bachelor of Computer Applications",
        shortDegree: "BCA",
        institution: "Lakshmi Narain College of Technology",
        location: "Bhopal, Madhya Pradesh",
        year: "2021 – 2024",
        status: "Completed",
        relevantCourses: ["Data Structures", "DBMS", "Operating Systems", "Web Technologies"],
        color: "#818cf8",
    },
];

const Education = () => (
    <Section id="education" title={<><BookOpen size={22} /> Education</>}>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "2rem",
            }}
        >
            {educationData.map((edu, i) => (
                <motion.div key={i} {...fade(i * 0.2)} style={{ ...card, position: "relative", overflow: "hidden" }}>
                    {/* Accent bar */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "3px",
                            width: "100%",
                            background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                        }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                        <div
                            style={{
                                width: 52,
                                height: 52,
                                borderRadius: 12,
                                background: `rgba(96,165,250,0.08)`,
                                border: `1px solid rgba(96,165,250,0.1)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.4rem",
                                fontWeight: 800,
                                color: edu.color,
                            }}
                        >
                            {edu.shortDegree[0]}
                        </div>

                        <span
                            style={{
                                background: edu.status === "Ongoing" ? "rgba(16,185,129,0.1)" : "rgba(99,102,241,0.1)",
                                color: edu.status === "Ongoing" ? "#6ee7b7" : "#a5b4fc",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "9999px",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                border: `1px solid ${edu.status === "Ongoing" ? "rgba(16,185,129,0.2)" : "rgba(99,102,241,0.2)"}`,
                            }}
                        >
                            {edu.status}
                        </span>
                    </div>

                    <div style={{ marginBottom: "0.3rem" }}>
                        <span
                            style={{
                                fontSize: "0.75rem",
                                color: edu.color,
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            {edu.shortDegree}
                        </span>
                    </div>

                    <h4
                        style={{
                            color: "#e5e7eb",
                            fontWeight: 700,
                            fontSize: "1rem",
                            marginBottom: "0.5rem",
                            lineHeight: 1.4,
                        }}
                    >
                        {edu.degree}
                    </h4>

                    <p style={{ color: "#60a5fa", fontWeight: 600, marginBottom: "0.2rem", fontSize: "0.9rem" }}>
                        {edu.institution}
                    </p>

                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                            <MapPin size={12} /> {edu.location}
                        </span>
                        <span style={{ color: "#6b7280", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                            <Calendar size={12} /> {edu.year}
                        </span>
                    </div>

                    <div>
                        <p style={{ color: "#6b7280", fontSize: "0.75rem", marginBottom: "0.5rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Key Courses
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                            {edu.relevantCourses.map((course, k) => (
                                <span
                                    key={k}
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        color: "#9ca3af",
                                        padding: "0.2rem 0.55rem",
                                        borderRadius: "6px",
                                        fontSize: "0.78rem",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

export default Education;
