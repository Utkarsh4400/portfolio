"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/motion/Magnetic";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 20%"] });
  // The yellow section rises over the page, its top corners flattening as it lands.
  const radius = useTransform(scrollYProgress, [0, 1], [96, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [70, 0]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const lines = ["Let’s build", "something."];

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={reduced ? undefined : { borderTopLeftRadius: radius, borderTopRightRadius: radius, y: lift }}
      className="relative overflow-hidden bg-[var(--s-yellow)] text-[var(--ink)]"
    >
      <div className="wrap py-28 md:py-44">
        <motion.h2
          className="text-[clamp(3.4rem,12vw,11rem)] font-extrabold leading-[0.88] tracking-[-0.045em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          aria-label="Let’s build something."
        >
          {lines.map((line, li) => (
            <span key={li} className="-my-[0.08em] block overflow-hidden py-[0.08em]" aria-hidden="true">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%", rotate: 4 },
                  show: { y: "0%", rotate: 0, transition: { duration: 1.1, delay: li * 0.12, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Button href={`mailto:${site.email}`} variant="ink">
            Email me
          </Button>
          <Button href={site.linkedin} target="_blank" rel="noreferrer" variant="inkGhost">
            LinkedIn
          </Button>
          <Button href={site.github} target="_blank" rel="noreferrer" variant="inkGhost">
            GitHub
          </Button>
          <Button href={site.resumeUrl} target="_blank" rel="noreferrer" variant="inkGhost">
            Résumé (PDF)
          </Button>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-base font-medium md:mt-20 md:flex-row md:items-center md:gap-8">
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={copy}
              data-cursor={copied ? "Copied" : "Copy"}
              className="text-left font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight underline decoration-2 underline-offset-8 md:text-4xl"
              aria-label={`Copy email address ${site.email}`}
            >
              {site.email}
            </button>
          </Magnetic>
          <span className="opacity-70" aria-live="polite">
            {copied ? "Copied to clipboard" : site.phone}
          </span>
          <span className="opacity-70">{site.location}</span>
        </div>
      </div>
    </motion.section>
  );
}
