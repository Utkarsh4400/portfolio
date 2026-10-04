"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, anchors: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Preloader locks scrolling while it runs.
    const stop = () => lenis.stop();
    const start = () => lenis.start();
    window.addEventListener("intro:lock", stop);
    window.addEventListener("intro:done", start);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("intro:lock", stop);
      window.removeEventListener("intro:done", start);
      lenis.destroy();
    };
  }, []);

  return null;
}
