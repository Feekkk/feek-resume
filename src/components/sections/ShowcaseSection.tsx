import SkillsMarquee from "@/components/sections/SkillsMarquee";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";

export default function ShowcaseSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 md:px-12 pb-16 space-y-16">
      <ProjectsShowcase />
      <SkillsMarquee />
    </section>
  );
}
