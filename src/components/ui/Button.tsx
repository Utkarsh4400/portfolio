"use client";

import type { AnchorHTMLAttributes } from "react";
import Magnetic from "@/components/motion/Magnetic";
import RollText from "@/components/motion/RollText";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost" | "ink" | "inkGhost";
};

const variants = {
  primary: "bg-[var(--accent)] text-[var(--ink)] hover:bg-[var(--fg)]",
  ghost: "border border-[var(--line)] text-[var(--fg)] hover:border-[var(--accent)]",
  ink: "bg-[var(--ink)] text-[var(--s-yellow)] hover:bg-white hover:text-[var(--ink)]",
  inkGhost: "border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--s-yellow)]",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Magnetic strength={0.28}>
      <a
        className={`group/roll inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {typeof children === "string" ? <RollText>{children}</RollText> : children}
      </a>
    </Magnetic>
  );
}
