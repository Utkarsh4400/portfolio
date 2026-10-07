import Marquee from "@/components/motion/Marquee";

const row1 = ["Next.js", "Flutter", "Shopify", "AdonisJS", "PostgreSQL", "Solidity", "Razorpay"];
const row2 = ["React", "Node.js", "Prisma", "MongoDB", "Liquid", "Tailwind", "IPFS"];

// Two crossing bands that speed up and reverse with the scroll.
export default function SkillBands() {
  return (
    <div className="relative overflow-hidden py-14 md:py-24" aria-label="Technologies I work with">
      <div className="-rotate-2 bg-[var(--s-yellow)] py-4 text-[var(--ink)] md:py-5">
        <Marquee
          items={row1}
          speed={3.5}
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold tracking-tight"
        />
      </div>
      <div className="-mt-3 rotate-2 border-y border-[var(--line)] bg-[var(--bg-elevated)] py-4 md:-mt-6 md:py-5">
        <Marquee
          items={row2}
          speed={-3.5}
          className="outline-marquee font-[family-name:var(--font-display)] text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold tracking-tight"
        />
      </div>
    </div>
  );
}
