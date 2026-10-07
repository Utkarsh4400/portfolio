"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/journey";
import SplitText from "@/components/motion/SplitText";

const colors = [
  "var(--s-blue)",
  "var(--s-orange)",
  "var(--s-mint)",
  "var(--s-yellow)",
  "var(--s-violet)",
  "var(--s-pink)",
  "var(--s-blue)",
];

// Mixed sticker angles — intentionally irregular
const stickerAngles = [-5, 3, -2, 5, -4, 2, -6, 4, -3, 6, -1, 3];

export default function TechStack() {
  return (
    <section id="stack" className="relative">
      <div className="wrap py-24 md:py-36">
        <h2 className="max-w-3xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
          <SplitText text="Technology in service of the product, not the other way around." />
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          The tools I use to design, build, ship and scale digital products.
          Everything in the open. Pick one up and throw it around.
        </p>

        <div className="mt-16 flex flex-col gap-0 md:mt-24">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: groupIndex * 0.05,
                ease: "easeOut",
              }}
              className="py-8 md:py-10"
            >
              {/* Category heading */}
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    background: colors[groupIndex % colors.length],
                  }}
                />

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold md:text-2xl">
                  {group.label}
                </h3>

                <span className="ml-auto text-xs text-[var(--muted)]">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Technologies */}
              <div
                className="flex flex-wrap items-center gap-3"
                aria-label={`${group.label} technologies`}
              >
                {group.items.map((item, itemIndex) => {
                  const angle =
                    stickerAngles[
                      (groupIndex * 3 + itemIndex) % stickerAngles.length
                    ];

                  return (
                    <motion.span
                      key={item}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                        rotate: angle,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: angle,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: itemIndex * 0.04,
                      }}
                      drag
                      dragSnapToOrigin
                      dragElastic={0.45}
                      whileHover={{
                        scale: 1.08,
                        rotate: 0,
                        zIndex: 10,
                      }}
                      whileDrag={{
                        scale: 1.12,
                        rotate: 3,
                        zIndex: 20,
                      }}
                      data-cursor="Drag"
                      className="sticker cursor-grab touch-none select-none rounded-2xl px-4 py-2.5 text-sm font-semibold active:cursor-grabbing md:px-5 md:py-3 md:text-base"
                      style={{
                        background:
                          colors[
                            (groupIndex + itemIndex) % colors.length
                          ],
                      }}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>

              {/* Full-width separator */}
              {groupIndex !== skillGroups.length - 1 && (
                <div className="mt-10 h-px w-full bg-[var(--muted)] opacity-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}