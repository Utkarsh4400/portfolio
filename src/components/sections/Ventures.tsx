"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ventures, type Venture } from "@/data/ventures";
import SplitText from "@/components/motion/SplitText";
import Tilt from "@/components/motion/Tilt";
import { useMedia } from "@/lib/useMedia";

function VentureCard({
  v,
  i,
  progress,
  fan,
}: {
  v: Venture;
  i: number;
  progress: MotionValue<number>;
  fan: boolean;
}) {
  const side = i - 1; // -1, 0, 1
  const x = useTransform(progress, [0, 1], [`${-side * 104}%`, "0%"]);
  const rotate = useTransform(progress, [0, 1], [side * 9, side * 1.8]);
  const y = useTransform(progress, [0, 1], [side === 0 ? 40 : 0, side === 0 ? -14 : 0]);

  return (
    <motion.a
      href={v.url}
      data-cursor="Visit"
      style={fan ? { x, rotate, y, zIndex: side === 0 ? 2 : 1 } : undefined}
      className="block"
    >
      <Tilt max={5} className="rounded-[1.75rem]">
        <div
          className="sticker flex h-full flex-col overflow-hidden rounded-[1.75rem]"
          style={{ background: v.tint }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {v.image ? (
              <Image
                src={v.image}
                alt={`${v.name} storefront`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="grid h-full place-items-center bg-[var(--ink)] p-6">
                <span
                  className="text-center font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.9] tracking-tighter md:text-5xl"
                  style={{ color: v.tint }}
                >
                  Bubble
                  <br />
                  skatzz
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-2xl leading-none md:text-3xl">{v.name}</h3>
            </div>
            <p className="text-sm font-semibold opacity-70">{v.role}</p>
            <p className="mt-1 text-sm font-medium opacity-85">{v.description}</p>
          </div>
        </div>
      </Tilt>
    </motion.a>
  );
}

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const desktop = useMedia("(min-width: 768px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 35%"] });
  const fan = desktop && !reduced;

  return (
    <section id="ventures" className="relative">
      <div className="wrap py-24 md:py-36">
        <h2 className="max-w-3xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
          <SplitText text="I have powered the tech behind these skate brands." />
        </h2>
        <p className="mt-6 max-w-lg text-[var(--muted)]">
          Building online stores, optimizing SEO, crafting content, and driving CRO and AOV growth. From storefront to checkout, I build digital experiences that turn visitors into customers.
        </p>

        <div ref={ref} className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
          {ventures.map((v, i) => (
            <VentureCard key={v.id} v={v} i={i} progress={scrollYProgress} fan={fan} />
          ))}
        </div>
      </div>
    </section>
  );
}
