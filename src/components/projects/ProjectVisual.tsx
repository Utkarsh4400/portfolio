import Image from "next/image";
import type { ProjectVisualKind } from "@/data/projects";

const patterns: Record<ProjectVisualKind, string> = {
  "pandit-ai":
    "radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 55%), repeating-radial-gradient(circle at 70% 75%, transparent 0 10px, var(--line) 10px 11px)",
  quickona:
    "linear-gradient(135deg, var(--accent-soft) 0%, transparent 45%), repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 42px)",
  hrms: "linear-gradient(180deg, var(--bg-elevated-2) 0%, transparent 60%), repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 36px), repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 36px)",
  nfttrace:
    "conic-gradient(from 210deg at 25% 30%, var(--accent-soft), transparent 40%), repeating-linear-gradient(45deg, var(--line) 0 1px, transparent 1px 24px)",
  sutr: "radial-gradient(ellipse at 70% 30%, var(--accent-soft), transparent 60%), repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 30px)",
  "skate-supply":
    "linear-gradient(160deg, var(--accent-soft) 0%, transparent 50%), repeating-linear-gradient(0deg, var(--line) 0 2px, transparent 2px 20px)",
  "hearty-way":
    "radial-gradient(circle at 80% 20%, var(--accent-soft), transparent 50%), repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 48px)",
};

export default function ProjectVisual({
  kind,
  title,
  image,
}: {
  kind: ProjectVisualKind;
  title: string;
  image?: string;
}) {
  if (image) {
    return (
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={1600}
          height={900}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--bg-elevated)] p-6"
      style={{ backgroundImage: patterns[kind] }}
      role="img"
      aria-label={`${title} visual placeholder`}
    >
      <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--fg)]/70">
        {title}
      </span>
    </div>
  );
}
