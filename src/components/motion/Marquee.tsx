"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function Wheel() {
  return (
    <svg viewBox="0 0 24 24" className="mx-8 h-[0.7em] w-[0.7em] shrink-0 md:mx-12" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.500" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Scrolling faster speeds it up; scrolling back flips its direction.
export default function Marquee({
  items,
  speed = 4,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const dir = useRef(speed < 0 ? -1 : 1);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const f = factor.get();
    if (f < -0.05) dir.current = speed < 0 ? 1 : -1;
    else if (f > 0.05) dir.current = speed < 0 ? -1 : 1;
    const base = Math.abs(speed) * (delta / 1000);
    baseX.set(baseX.get() + dir.current * base * (1 + Math.abs(f)));
  });

  const row = items.flatMap((t, i) => [
    <span key={`t${i}`} className="shrink-0">
      {t}
    </span>,
    <Wheel key={`w${i}`} />,
  ]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <motion.div style={{ x }} className="flex w-max">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="flex shrink-0 items-center">
            {row}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
