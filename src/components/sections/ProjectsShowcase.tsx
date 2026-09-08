import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const active = projects.find((project) => project.slug === activeSlug) ?? projects[0];
  const activeIndex = projects.findIndex((project) => project.slug === active.slug);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;
      const scroller = root.closest(".overflow-y-scroll") as HTMLElement | null;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root, { autoAlpha: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(root, {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            scroller: scroller || undefined,
            start: "top 82%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(panel, { autoAlpha: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [activeSlug], revertOnUpdate: true }
  );

  return (
    <div ref={containerRef}>
      <div className="flex items-end justify-between gap-6 mb-10">
        <h3 className="text-orange uppercase tracking-wide font-['Rubik'] text-lg font-medium">
          PROJECTS
        </h3>
        <p className="text-orange font-['Rubik'] text-sm uppercase tracking-wide">
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 lg:gap-16">
        <div
          className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1"
          role="listbox"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
            event.preventDefault();
            const nextIndex =
              event.key === "ArrowDown"
                ? (activeIndex + 1) % projects.length
                : (activeIndex - 1 + projects.length) % projects.length;
            setActiveSlug(projects[nextIndex].slug);
          }}
        >
          {projects.map((project, index) => {
            const selected = project.slug === active.slug;
            return (
              <button
                key={project.id}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => setActiveSlug(project.slug)}
                className="group flex min-w-[11rem] lg:min-w-0 items-baseline gap-4 border-b border-border py-3 text-left cursor-pointer"
              >
                <span className="text-orange font-['Rubik'] text-xs uppercase tracking-wide shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-['Rubik'] text-base uppercase tracking-tight transition-opacity ${
                    selected ? "italic text-foreground" : "text-muted-foreground opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {project.name}
                </span>
              </button>
            );
          })}
        </div>

        <div ref={panelRef} className="min-h-[280px]">
          <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-3">
            {active.org} · {active.year} · {active.role}
          </p>
          <h4 className="font-['Rubik'] text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
            {active.fullName}
          </h4>
          <p className="font-['Rubik'] text-base md:text-lg leading-relaxed text-foreground max-w-2xl mb-6">
            {active.overview}
          </p>
          <ul className="space-y-2 mb-8 max-w-2xl">
            {active.highlights.map((item) => (
              <li key={item} className="font-['Rubik'] text-sm text-muted-foreground leading-relaxed pl-4 border-l border-orange">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-8">
            {active.techStack.map((tech) => (
              <span
                key={tech}
                className="font-['Rubik'] text-xs uppercase tracking-wide text-orange"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={`/projects/${active.slug}`}
            className="inline-flex items-center gap-2 text-orange font-['Rubik'] text-sm uppercase tracking-wide hover:opacity-70"
          >
            View details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
