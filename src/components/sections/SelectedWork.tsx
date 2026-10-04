import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SplitText from "@/components/motion/SplitText";

export default function SelectedWork() {
  return (
    <section id="work" className="relative pb-24 md:pb-40">
      <div className="wrap pt-12 md:pt-20">
        <h2 className="max-w-4xl text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
          <SplitText text="Products built end to end, across AI, commerce and Web3." />
        </h2>
      </div>

      <div className="wrap mt-14 md:mt-20">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={featuredProjects.length} />
        ))}
      </div>
    </section>
  );
}
