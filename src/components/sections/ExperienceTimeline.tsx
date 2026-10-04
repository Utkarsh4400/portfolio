"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { journey } from "@/data/journey";
import SplitText from "@/components/motion/SplitText";

export default function ExperienceTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const head = useTransform(grow, (v) => `${v * 100}%`);

  return (
    <section id="journey" className="relative">
      <div className="wrap py-24 md:py-36">
        <h2 className="max-w-3xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
          <SplitText text="From business to full-stack product engineering." />
        </h2>

        <ol ref={listRef} className="relative mt-20 flex flex-col gap-16 pl-8 md:mt-28 md:gap-24 md:pl-14">
          <span className="absolute bottom-0 left-0 top-0 w-px bg-[var(--line)]" aria-hidden="true" />
          <motion.span
            style={{ scaleY: reduced ? 1 : grow }}
            className="absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-[var(--accent)]"
            aria-hidden="true"
          />
          {!reduced && (
            <motion.span
              style={{ top: head }}
              className="absolute -left-[7px] h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_var(--accent-soft)]"
              aria-hidden="true"
            />
          )}

          {journey.map((m, i) => (
            <motion.li
              key={`${m.year}-${i}`}
              initial={reduced ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid gap-3 md:grid-cols-[minmax(0,16rem)_1fr] md:items-baseline md:gap-10 lg:grid-cols-[minmax(0,25rem)_1fr]"
            >
              <motion.span
                initial={reduced ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
                className="absolute -left-[calc(2rem+4px)] top-4 h-2 w-2 rounded-full md:-left-[calc(3.5rem+4px)] md:top-8"
                style={{ background: m.current ? "var(--accent)" : "var(--muted)" }}
                aria-hidden="true"
              />
              <span
                className="outline-text font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-tighter"
                style={m.current ? { color: "var(--accent)", WebkitTextStroke: "0" } : undefined}
              >
                {m.year}
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl">{m.title}</h3>
                <p className="mt-2.5 max-w-xl text-[var(--muted)]">{m.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
