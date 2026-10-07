import ScrollWords from "@/components/motion/ScrollWords";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="wrap py-24 md:py-40">
        <ScrollWords
          className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.8vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.03em]"
          text="Started with a background in business. Moved into applications, blockchain and software development. Then into full-stack engineering. Now building products across AI, commerce, SaaS and Web3."
        />

        <Reveal y={30} delay={0.05} className="mt-14 grid gap-6 md:max-w-2xl">
          <p className="text-[var(--fg)]/80">
            A BBA gave me an early, practical sense of how people and businesses
            actually operate, something that still shapes how I think about products, not just
            code. A diploma in computer applications and blockchain technology was the pivot into
            software, followed by two years of hands-on full-stack development across the MERN
            stack, AdonisJS, Flutter and PostgreSQL.
          </p>
          <p className="text-[var(--fg)]/80">
            I&rsquo;ve recently completed my MCA while continuing to build and scale digital products. Alongside development, I contribute to the technology and growth of skateboarding brands in India. Continuous learning isn&rsquo;t just a line on my resume. It&rsquo;s how I keep evolving as a developer and building better products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
