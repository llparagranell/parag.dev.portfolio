// Shared style constants used across components
export const card = {
    background: "#0f172a",
    padding: "1.5rem",
    borderRadius: "10px",
    border: "1px solid #1f2937",
};

export const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
};

export const eduGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
};

export const buttonStyle = {
    background: "#2563eb",
    color: "white",
    padding: "0.8rem 1.8rem",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none",
};

export const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
});
