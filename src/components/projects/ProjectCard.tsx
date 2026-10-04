"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ProjectMeta from "./ProjectMeta";
import Tilt from "@/components/motion/Tilt";
import { useMedia } from "@/lib/useMedia";

// Cards pin to the top and get covered by the next one, which pushes the
// previous card back (scale + dim) as it slides over.
export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shotRef = useRef<HTMLDivElement>(null);
  // observe an unclipped wrapper: a fully clipped element never reports as visible
  const shotIn = useInView(shotRef, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();
  const desktop = useMedia("(min-width: 1024px) and (min-height: 760px)");
  const stacking = desktop && !reduced;
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.9]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : 0.55]);

  return (
    <div
      ref={wrapRef}
      className={stacking ? "relative min-h-[88vh]" : "relative mb-10"}
    >
      <motion.article
        style={stacking ? { scale, top: `calc(5.5rem + ${index * 14}px)`, transformOrigin: "50% 0%" } : undefined}
        className={`relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--bg-elevated)] ${
          stacking ? "sticky" : ""
        }`}
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6 p-7 md:p-12">
            <span
              className="sticker w-fit rounded-full px-3.5 py-1.5 text-xs font-semibold"
              style={{ background: project.tint }}
            >
              {project.category}
            </span>

            <h3 className="text-4xl leading-[0.95] md:text-5xl">
              <a href={project.url} className="link-underline">
                {project.title}
              </a>
            </h3>

            <p className="max-w-md text-[var(--fg)]/80">{project.description}</p>

            <ul className="flex flex-col gap-2 text-sm text-[var(--fg)]/85">
              {project.proof.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="7" fill={project.tint} />
                    <path d="M4 7.200l2 2 4-4.400" stroke="var(--ink)" strokeWidth="1.600" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>

            <ProjectMeta role={project.role} year={project.year} stack={project.stack} />
          </div>

          <a
            href={project.url}
            data-cursor="View"
            className="relative flex items-center justify-center overflow-hidden p-6 md:p-12"
            style={{ background: project.tint }}
            aria-label={`View ${project.title}`}
          >
            <div ref={shotRef} className="w-full">
              <motion.div
                initial={false}
                animate={
                  reduced || shotIn
                    ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1, rotate: -1.5 }
                    : { clipPath: "inset(100% 0% 0% 0%)", scale: 1.25, rotate: 3 }
                }
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <Tilt max={6}>
                  <ProjectVisual
                    kind={project.visual}
                    title={project.title}
                    image={project.hasImage ? project.image : undefined}
                  />
                </Tilt>
              </motion.div>
            </div>
          </a>
        </div>

        {stacking && (
          <motion.div
            aria-hidden="true"
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 bg-[var(--bg)]"
          />
        )}
      </motion.article>
    </div>
  );
}
