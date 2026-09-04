import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      const root = containerRef.current;
      if (!root) return;

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      const scroller = root.closest(".overflow-y-scroll") as HTMLElement | null;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(cards, {
          y: 20,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            scroller: scroller || undefined,
            start: "top 85%",
            once: true,
          },
        });

        const cleanups = cards.map((card) => {
          const enter = contextSafe(() => {
            gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          });
          const leave = contextSafe(() => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          });
          card.addEventListener("pointerenter", enter);
          card.addEventListener("pointerleave", leave);
          return () => {
            card.removeEventListener("pointerenter", enter);
            card.removeEventListener("pointerleave", leave);
          };
        });

        return () => cleanups.forEach((fn) => fn());
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <h3 className="text-orange uppercase tracking-wide mb-8 font-['Rubik'] text-lg font-medium">
        PROJECTS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card rounded-lg border border-border bg-card/60 p-4"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-['Rubik'] text-base font-medium uppercase italic">
                {project.name}
              </h4>
              <span className="text-orange font-['Rubik'] text-[11px] uppercase tracking-wide shrink-0">
                {project.status}
              </span>
            </div>
            <p className="font-['Rubik'] text-sm text-foreground leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-['Rubik'] text-[11px] uppercase tracking-wide text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-orange font-['Rubik'] text-xs uppercase tracking-wide hover:opacity-70"
                  >
                    Live
                    <ExternalLink className="size-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-orange font-['Rubik'] text-xs uppercase tracking-wide hover:opacity-70"
                  >
                    Code
                    <Github className="size-3" />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
