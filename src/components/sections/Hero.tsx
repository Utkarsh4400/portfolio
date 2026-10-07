"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { site } from "@/data/site";
import { useIntroDone } from "@/lib/intro";
import Button from "@/components/ui/Button";

const roles = ["AI products", "online stores", "HR platforms", "Web3 apps"];

function Letters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span className="-my-[0.1em] inline-flex overflow-hidden py-[0.1em]" aria-hidden="true">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: "115%", rotate: (i % 2 ? 1 : -1) * 12 },
            show: {
              y: "0%",
              rotate: 0,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: (offset + i) * 0.045 },
            },
          }}
          whileHover={{
            y: "-0.07em",
            rotate: i % 2 ? 4 : -4,
            transition: { type: "spring", stiffness: 420, damping: 11 },
          }}
          className="inline-block cursor-default transition-colors duration-200 hover:text-[var(--accent)]"
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

function RoleSwap() {
  return (
    <span
      className="relative inline-block h-[1.25em] overflow-hidden align-bottom"
      style={{ width: "13ch" }}
    >
      <span className="role-track absolute left-0 top-0 flex flex-col">
        {[...roles, roles[0]].map((r, i) => (
          <span key={i} className="block h-[1.25em] whitespace-nowrap font-semibold text-[var(--accent)]">
            {r}
          </span>
        ))}
      </span>
    </span>
  );
}

function Chip({
  label,
  color,
  className,
  depth,
  rotate,
  mx,
  my,
  scroll,
}: {
  label: string;
  color: string;
  className: string;
  depth: number;
  rotate: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  scroll: MotionValue<number>;
}) {
  const x = useTransform(mx, [-1, 1], [-14 * depth, 14 * depth]);
  const yMouse = useTransform(my, [-1, 1], [-14 * depth, 14 * depth]);
  const yScroll = useTransform(scroll, [0, 1], [0, -160 * depth]);
  return (
    <motion.span
      style={{ x, y: yMouse, rotate }}
      className={`absolute ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay: 1.1 + depth * 0.25 }}
    >
      <motion.span
        style={{ y: yScroll, background: color }}
        whileHover={{ scale: 1.12, rotate: -rotate * 1.5 }}
        className="sticker inline-block rounded-2xl px-4 py-2 text-sm font-semibold"
      >
        {label}
      </motion.span>
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const introDone = useIntroDone();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });

  const flip = useMotionValue(0);
  const spin = () => {
    if (reduced) return;
    animate(flip, flip.get() + 360, { duration: 0.9, ease: [0.45, 0, 0.2, 1] });
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <motion.div
        style={reduced ? undefined : { y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="wrap relative grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={introDone || reduced ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3.5 py-1.5 text-xs text-[var(--fg)]/80"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--s-mint)] opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--s-mint)]" />
            </span>
            {site.availabilityText}
          </motion.div>

          <motion.h1
            className="mt-7 text-[clamp(3.6rem,11.5vw,10.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em]"
            initial="hidden"
            animate={introDone || reduced ? "show" : "hidden"}
            aria-label={site.name}
          >
            <span className="block">
              <Letters text={site.firstName} />
            </span>
            <span className="block text-[var(--fg)]/40">
              <Letters text={site.lastName} offset={site.firstName.length} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={introDone || reduced ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 text-xl text-[var(--fg)]/90 md:text-3xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Full-stack developer building <RoleSwap />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={introDone || reduced ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-md text-[var(--muted)]"
          >
            {site.heroSupport}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={introDone || reduced ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="#work">See selected work</Button>
            <Button href={site.resumeUrl} target="_blank" rel="noreferrer" variant="ghost">
              Download résumé
            </Button>
            <Button href={site.github} target="_blank" rel="noreferrer" variant="ghost">
              GitHub
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-[min(78vw,26rem)] lg:w-full lg:max-w-[28rem]">
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotate: -40 }}
            animate={introDone || reduced ? { scale: 1, opacity: 1, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.3 }}
            style={reduced ? undefined : { y: portraitY, rotate: portraitRotate }}
            className="absolute inset-0"
          >
            {/* rotating badge ring */}
            <svg
              viewBox="0 0 200 200"
              className="spin-slow absolute -inset-[11%] h-[122%] w-[122%] text-[var(--fg)]"
              aria-hidden="true"
            >
              <defs>
                <path id="ring" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
              </defs>
              <text fontSize="12.500" fontWeight="600" fill="currentColor" style={{ fontFamily: "var(--font-display)" }}>
                <textPath href="#ring" textLength="536" lengthAdjust="spacing">Full stack • E-commerce • Web3 • Full stack • E-commerce • Web3 •</textPath>
              </text>
            </svg>

            <div className="absolute inset-[5%] rounded-full" style={{ background: "var(--s-yellow)" }} />
            <motion.button
              type="button"
              onClick={spin}
              data-cursor="Spin me"
              aria-label="Spin the portrait"
              style={{ rotateY: flip, transformPerspective: 900 }}
              className="absolute inset-[5%] overflow-hidden rounded-full"
            >
              <Image
                src={site.avatar}
                alt="Portrait of Utkarsh Chauhan"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 78vw"
                className="object-cover"
              />
            </motion.button>
          </motion.div>

          <Chip label="Next.js" color="var(--s-blue)" className="-left-3 -top-2 md:-left-10" depth={1} rotate={-8} mx={mx} my={my} scroll={scrollYProgress} />
          <Chip label="Shopify" color="var(--s-mint)" className="-right-2 -top-3 md:-right-8" depth={1.6} rotate={7} mx={mx} my={my} scroll={scrollYProgress} />
          <Chip label="Flutter" color="var(--s-pink)" className="-right-3 bottom-[2%] md:-right-10" depth={1.2} rotate={-6} mx={mx} my={my} scroll={scrollYProgress} />
          <Chip label="Solidity" color="var(--s-orange)" className="-left-3 bottom-[0%] md:-left-12" depth={1.8} rotate={9} mx={mx} my={my} scroll={scrollYProgress} />
        </div>
      </motion.div>
    </section>
  );
}
