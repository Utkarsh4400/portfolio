"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

export default function Footer() {
  const reduced = useReducedMotion();
  const letters = site.name.toUpperCase().split("");

  return (
    <footer className="relative z-10 overflow-hidden pb-14">
      <div className="wrap flex flex-col gap-6 pt-12 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--muted)]">
          {site.title}, built with Next.js. Hit the board at the bottom for a kickflip.
        </p>
        <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} {site.name}</p>
      </div>

      <motion.div
        aria-hidden="true"
        className="wrap mt-8 flex justify-between font-[family-name:var(--font-display)] text-[clamp(2rem,9.2vw,9rem)] font-extrabold leading-[0.9] tracking-tighter"
        initial={reduced ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ staggerChildren: 0.03 }}
      >
        {letters.map((c, i) => (
          <span key={i} className="inline-block overflow-hidden py-[0.04em]">
            <motion.span
              className="outline-text inline-block"
              variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
            >
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </footer>
  );
}
