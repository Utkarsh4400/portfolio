"use client";

import { motion, useReducedMotion } from "framer-motion";

// Words rise out of a mask when the heading scrolls into view.
export default function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;

  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ staggerChildren: 0.055, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-top" aria-hidden="true">
          <motion.span
            className="inline-block origin-bottom-left"
            variants={{
              hidden: { y: "115%", rotate: 7 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
