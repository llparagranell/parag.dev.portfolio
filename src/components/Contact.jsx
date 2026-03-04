import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";

const contactLinks = [
    {
        label: "Email",
        value: "paragrane000@gmail.com",
        href: "mailto:paragrane000@gmail.com",
        icon: <Mail color="#60a5fa" />,
        iconBg: "rgba(37,99,235,0.08)",
    },
    {
        label: "GitHub",
        value: "llparagranell",
        href: "https://github.com/llparagranell",
        icon: <Github color="#60a5fa" />,
        iconBg: "rgba(96,165,250,0.06)",
        external: true,
    },
    {
        label: "LinkedIn",
        value: "parag-rane-414089243",
        href: "https://linkedin.com/in/parag-rane-414089243",
        icon: <Linkedin color="#60a5fa" />,
        iconBg: "rgba(99,102,241,0.06)",
        external: true,
    },
    {
        label: "Location",
        value: "Pune, Maharashtra, India",
        href: null,
        icon: <span style={{ fontSize: "1.1rem" }}>📍</span>,
        iconBg: "rgba(234,179,8,0.06)",
    },
];

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
        <form onSubmit={handleSubmit} className="contact-form">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <input
                    className="contact-input"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="contact-input"
                    placeholder="Your email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <input
                className="contact-input"
                placeholder="Subject"
                style={{ width: "100%" }}
            />
            <textarea
                className="contact-textarea"
                placeholder="Your message *"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />

            {error && <div style={{ color: "#fca5a5", fontSize: "0.9rem" }}>{error}</div>}
            {sent && <div style={{ color: "#86efac", fontSize: "0.9rem" }}>✅ Opening your email client…</div>}

            <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.4rem", flexWrap: "wrap" }}>
                <button type="submit" className="contact-btn">
                    Send Message →
                </button>
                <button
                    type="button"
                    onClick={() => { setName(""); setEmail(""); setMessage(""); setError(""); setSent(false); }}
                    className="contact-btn"
                    style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.08)", color: "#9ca3af" }}
                >
                    Clear
                </button>
            </div>
        </form>
    );
};

const Contact = () => (
    <Section id="contact" title="📬 Get in Touch">
        <div className="contact-container" style={{ maxWidth: 1000, margin: "0 auto" }}>
            {/* Left — info */}
            <div className="contact-info">
                <p style={{ color: "#9ca3af", fontSize: "clamp(1rem, 2vw, 1.05rem)", lineHeight: 1.7, marginBottom: "0.6rem" }}>
                    I'm open to <strong style={{ color: "#e5e7eb" }}>freelance projects</strong>,{" "}
                    <strong style={{ color: "#e5e7eb" }}>full-time roles</strong>, and exciting{" "}
                    <strong style={{ color: "#e5e7eb" }}>collaborations</strong>. Let's build something great together!
                </p>

                <div
                    className="contact-cards"
                    style={{ display: "grid", gap: "0.8rem", marginTop: "0.6rem" }}
                >
                    {contactLinks.map((c, i) =>
                        c.href ? (
                            <a
                                key={i}
                                className="contact-card"
                                href={c.href}
                                target={c.external ? "_blank" : undefined}
                                rel={c.external ? "noreferrer" : undefined}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 8,
                                        background: c.iconBg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    {c.icon}
                                </div>
                                <div style={{ color: "#e5e7eb" }}>
                                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{c.label}</div>
                                    <div style={{ color: "#9ca3af", fontSize: "0.82rem" }}>{c.value}</div>
                                </div>
                            </a>
                        ) : (
                            <div key={i} className="contact-card" style={{ cursor: "default" }}>
                                <div
                                    style={{
                                        width: 40, height: 40, borderRadius: 8, background: c.iconBg,
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                    }}
                                >
                                    {c.icon}
                                </div>
                                <div style={{ color: "#e5e7eb" }}>
                                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{c.label}</div>
                                    <div style={{ color: "#9ca3af", fontSize: "0.82rem" }}>{c.value}</div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Availability badge */}
                <div
                    style={{
                        marginTop: "1rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                    }}
                >
                    <span
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#10b981",
                            display: "inline-block",
                            animation: "pulse 2s infinite",
                        }}
                    />
                    <span style={{ color: "#6ee7b7", fontSize: "0.85rem", fontWeight: 600 }}>
                        Available for new opportunities
                    </span>
                </div>
            </div>

            {/* Right — form */}
            <ContactForm />
        </div>

        <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
    `}</style>
    </Section>
);

export default Contact;
