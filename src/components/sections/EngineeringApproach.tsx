"use client";

import { motion, useReducedMotion } from "framer-motion";
import { principles } from "@/data/journey";
import SplitText from "@/components/motion/SplitText";
import Tilt from "@/components/motion/Tilt";

const colors = ["var(--s-yellow)", "var(--s-pink)", "var(--s-blue)", "var(--s-mint)"];

export default function EngineeringApproach() {
  const reduced = useReducedMotion();
  return (
    <section className="relative">
      <div className="wrap py-24 md:py-36">
        <h2 className="max-w-3xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
          <SplitText text="Product first, then the system underneath it." />
        </h2>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={reduced ? false : { opacity: 0, y: 90, rotate: i % 2 ? 5 : -5, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: (i % 2) * 0.12 }}
            >
              <Tilt max={5} className="rounded-[2rem]">
                <div
                  className="sticker group relative flex min-h-[17rem] flex-col justify-between overflow-hidden rounded-[2rem] p-8 md:p-10"
                  style={{ background: colors[i % colors.length] }}
                >
                  <span className="font-[family-name:var(--font-display)] text-[8rem] font-extrabold leading-none tracking-tighter opacity-20 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-110 md:text-[11rem] absolute -right-3 -top-6 select-none" aria-hidden="true">
                    {p.number}
                  </span>
                  <h3 className="relative max-w-[12ch] text-4xl leading-none md:text-5xl">{p.title}</h3>
                  <p className="relative max-w-xs text-base font-medium opacity-80">{p.body}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
