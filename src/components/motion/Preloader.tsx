"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { site } from "@/data/site";
import { setIntroDone } from "@/lib/intro";

export default function Preloader() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);
  const count = useMotionValue(0);
  const label = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
    } catch {}

    if (seen || reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);
      setIntroDone();
      window.dispatchEvent(new Event("intro:done"));
      return;
    }

    window.dispatchEvent(new Event("intro:lock"));
    const controls = animate(count, 100, {
      duration: 1.3,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => {
        try {
          sessionStorage.setItem("intro-seen", "1");
        } catch {}
        setShow(false);
        // let the curtain start lifting, then bring the hero in
        setTimeout(() => {
          setIntroDone();
          window.dispatchEvent(new Event("intro:done"));
        }, 250);
      },
    });
    return () => controls.stop();
  }, [count, reduced]);

  return (
    <motion.div
      aria-hidden={!show}
      initial={false}
      animate={show ? { y: "0%", borderBottomLeftRadius: "0% 0vh", borderBottomRightRadius: "0% 0vh" } : { y: "-102%", borderBottomLeftRadius: "50% 14vh", borderBottomRightRadius: "50% 14vh" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{ background: "var(--s-yellow)", color: "var(--ink)", pointerEvents: show ? "auto" : "none" }}
      className="fixed inset-0 z-[300] flex flex-col justify-between p-6 md:p-12"
    >
      <p className="font-[family-name:var(--font-display)] text-lg font-semibold">{site.name}</p>
      <div className="flex items-end justify-between">
        <motion.span className="font-[family-name:var(--font-display)] text-[clamp(6rem,24vw,18rem)] font-extrabold leading-[0.8] tracking-tighter tabular-nums">
          {label}
        </motion.span>
        <p className="mb-2 max-w-[14ch] text-right text-sm font-medium md:text-base">
          {site.title}, Shimla
        </p>
      </div>
    </motion.div>
  );
}
