"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export default function ScrollBoard() {
  const reduced = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.4 });
  const left = useTransform(progress, (v) => `${v * 100}%`);
  const fill = useTransform(progress, (v) => `${v * 100}%`);
  const appear = useTransform(scrollY, [0, 160], [0, 1]);

  const velocity = useSpring(useVelocity(scrollY), { stiffness: 180, damping: 40 });
  const tilt = useTransform(velocity, [-2500, 0, 2500], [9, 0, -9]);
  const wheels = useTransform(scrollY, (v) => v / 2.2);

  const jump = useMotionValue(0);
  const flip = useMotionValue(0);
  const kickflip = () => {
    if (reduced) return;
    animate(jump, [0, -34, 0], { duration: 0.62, ease: "easeOut" });
    animate(flip, flip.get() + 360, { duration: 0.62, ease: [0.45, 0, 0.2, 1] });
  };

  if (reduced) return null;

  return (
    <motion.div
      style={{ opacity: appear }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] h-14 px-4 md:px-8"
      aria-hidden="true"
    >
      <div className="relative mx-auto h-full w-full max-w-[84rem] pr-[60px]">
        <div className="absolute inset-x-0 bottom-2 h-px bg-[var(--line)]" />
        <motion.div
          style={{ width: fill }}
          className="absolute bottom-2 left-0 h-[2px] bg-[var(--accent)]"
        />
        <motion.button
          type="button"
          tabIndex={-1}
          onClick={kickflip}
          data-cursor="Kickflip"
          style={{ left, y: jump, rotateX: flip, rotate: tilt, transformPerspective: 400 }}
          className="pointer-events-auto absolute bottom-[8px] h-[27px] w-[60px] origin-center"
        >
          <svg viewBox="0 0 44 20" width="60" height="27" fill="none">
            <path d="M1 2.200c.1 3.600 2.800 5.800 6.800 5.800h28.400c4 0 6.700-2.200 6.800-5.800 0-.9-1.100-.9-1.200 0-.3 2.300-2 3.400-4.600 3.400H6.800c-2.600 0-4.300-1.100-4.600-3.400-.1-.9-1.200-.9-1.200 0Z" fill="var(--accent)" />
            <rect x="9" y="11" width="4" height="2.500" rx="1" fill="var(--fg)" />
            <rect x="31" y="11" width="4" height="2.500" rx="1" fill="var(--fg)" />
            <motion.g style={{ rotate: wheels, transformBox: "fill-box", transformOrigin: "center" }}>
              <circle cx="11" cy="16" r="3.300" fill="var(--fg)" />
              <path d="M11 13.200v5.600" stroke="var(--bg)" strokeWidth="1" />
            </motion.g>
            <motion.g style={{ rotate: wheels, transformBox: "fill-box", transformOrigin: "center" }}>
              <circle cx="33" cy="16" r="3.300" fill="var(--fg)" />
              <path d="M33 13.200v5.600" stroke="var(--bg)" strokeWidth="1" />
            </motion.g>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
