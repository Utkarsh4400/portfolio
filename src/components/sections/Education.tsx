"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/data/journey";
import SplitText from "@/components/motion/SplitText";

export default function Education() {
  const reduced = useReducedMotion();
  return (
    <section className="relative">
      <div className="wrap py-16 md:py-24">
        <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.98]">
          <SplitText text="The learning behind the building." />
        </h2>
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delayChildren: i * 0.12 }}
              className="relative pt-6"
            >
              <motion.span
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="absolute left-0 top-0 h-[2px] w-full origin-left bg-[var(--fg)]"
                aria-hidden="true"
              />
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <p className="text-sm text-[var(--muted)]">{e.period}</p>
                <h3 className="mt-2 text-xl leading-tight md:text-2xl">{e.degree}</h3>
                <p className="mt-1.5 text-sm text-[var(--muted)]">{e.school}</p>
                <p className="mt-4 text-sm text-[var(--fg)]/75">{e.note}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
