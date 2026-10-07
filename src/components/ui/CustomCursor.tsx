"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.body.classList.add("cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const zone = target.closest<HTMLElement>("[data-cursor]");
      setLabel(zone?.dataset.cursor ?? "");
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("cursor-active");
    };
  }, [x, y]);

  const size = label ? 84 : 14;

  return (
    <motion.div
      className="cursor-dot"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        borderColor: label ? "var(--accent)" : "var(--fg)",
        backgroundColor: label ? "var(--accent)" : "transparent",
        color: label ? "var(--ink)" : "var(--fg)",
        fontWeight: 600,
      }}
      aria-hidden="true"
    >
      {label}
    </motion.div>
  );
}
