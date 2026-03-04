import React from "react";
import { motion } from "framer-motion";
import { fade } from "./utils/styles";

const Section = ({ id, title, children }) => (
    <section
        id={id}
        style={{
            padding: "clamp(4rem, 12vh, 6rem) clamp(1rem, 5vw, 1.5rem)",
            maxWidth: "1200px",
            margin: "0 auto",
        }}
    >
        <motion.h3
            {...fade(0)}
            style={{
                fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
                fontWeight: "600",
                marginBottom: "clamp(1.5rem, 5vh, 2.5rem)",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                color: "white",
            }}
        >
            {title}
        </motion.h3>
        {children}
    </section>
);

export default Section;
