import Hero from "@/components/sections/Hero";
import SkillBands from "@/components/sections/SkillBands";
import SelectedWork from "@/components/sections/SelectedWork";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import TechStack from "@/components/sections/TechStack";
import Education from "@/components/sections/Education";
import Ventures from "@/components/sections/Ventures";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillBands />
      <SelectedWork />
      <ExperienceTimeline />
      <EngineeringApproach />
      <TechStack />
      <Education />
      <Ventures />
      <About />
      <Contact />
    </>
  );
}
