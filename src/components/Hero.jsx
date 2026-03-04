import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { buttonStyle, fade } from "./utils/styles";

const Hero = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        let mounted = true;

        const initVanta = () => {
            if (
                mounted &&
                vantaRef.current &&
                !vantaEffect.current &&
                window.VANTA?.RINGS &&
                window.THREE
            ) {
                vantaEffect.current = window.VANTA.RINGS({
                    el: vantaRef.current,
                    THREE: window.THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x0,
                    color: 0x2563eb,
                });
            }
        };

        // Poll until scripts are loaded
        const interval = setInterval(() => {
            if (window.VANTA?.RINGS && window.THREE) {
                clearInterval(interval);
                initVanta();
            }
        }, 100);

        return () => {
            mounted = false;
            clearInterval(interval);
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    const stats = [
        { label: "Projects Built", value: "10+" },
        { label: "Problems Solved", value: "300+" },
        { label: "Certifications", value: "6" },
        { label: "Years Learning", value: "3+" },
    ];

    return (
        <section
            id="home"
            ref={vantaRef}
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "clamp(4rem, 15vh, 6rem) clamp(2rem, 8vw, 8rem) clamp(2rem, 8vh, 3rem)",
                textAlign: "left",
                position: "relative",
            }}
        >
            {/* Overlay so text is readable over vanta */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: "inline-block",
                        background: "rgba(37,99,235,0.12)",
                        border: "1px solid rgba(37,99,235,0.3)",
                        color: "#93c5fd",
                        padding: "0.4rem 1.2rem",
                        borderRadius: "9999px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        marginBottom: "1.5rem",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    👋 Available for Freelance & Full-time
                </motion.div>

                <motion.h2
                    {...fade(0.2)}
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "white", lineHeight: 1.15 }}
                >
                    Hi, I'm <span style={{ color: "#60a5fa" }}>Parag Rane</span>
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Full Stack Developer
                    </span>
                </motion.h2>

                <motion.p
                    {...fade(0.4)}
                    style={{ maxWidth: "600px", margin: "1.2rem 0 0", color: "#9ca3af", fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.7 }}
                >
                    I craft performant, scalable web solutions using{" "}
                    <span style={{ color: "#93c5fd" }}>React</span>,{" "}
                    <span style={{ color: "#93c5fd" }}>Node.js</span>, and{" "}
                    <span style={{ color: "#93c5fd" }}>MongoDB</span>. Passionate about clean code,
                    great UX, and solving real-world problems.
                </motion.p>

                <motion.div
                    {...fade(0.6)}
                    style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-start" }}
                >
                    <a href="mailto:paragrane000@gmail.com" style={buttonStyle}>
                        Hire Me
                    </a>
                    <a
                        href="https://github.com/llparagranell"
                        target="_blank"
                        rel="noreferrer"
                        style={{ ...buttonStyle, background: "transparent", border: "1px solid #2563eb" }}
                    >
                        GitHub
                    </a>
                    <a
                        href="#contact"
                        style={{
                            ...buttonStyle,
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                        }}
                    >
                        <Download size={16} /> Resume
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    {...fade(0.8)}
                    style={{
                        display: "flex",
                        gap: "clamp(1.5rem, 4vw, 3rem)",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        marginTop: "3rem",
                    }}
                >
                    {stats.map((s, i) => (
                        <div key={i} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: "800", color: "#60a5fa" }}>
                                {s.value}
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "0.2rem" }}>{s.label}</div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ marginTop: "3rem" }}
                >
                    <button
                        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                        aria-label="Scroll to skills"
                        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    >
                        <ChevronDown color="#2563eb" size={30} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
