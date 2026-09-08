import { Link, Navigate, useParams } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Layout from "@/components/Layout";
import { getProjectBySlug, projects } from "@/data/portfolio-data";

gsap.registerPlugin(useGSAP);

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".detail-block", { autoAlpha: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".detail-block", {
          y: 24,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [slug], revertOnUpdate: true }
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <Layout>
      <article
        ref={containerRef}
        className="w-full max-w-7xl mx-auto px-8 md:px-12 py-16"
      >
        <Link
          to="/"
          className="detail-block inline-flex items-center gap-2 text-orange font-['Rubik'] text-sm uppercase tracking-wide mb-12 hover:opacity-70"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <header className="detail-block mb-12">
          <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-4">
            {project.org} · {project.year} · {project.status}
          </p>
          <h1 className="font-['Rubik'] text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
            {project.fullName}
          </h1>
          <p className="font-['Rubik'] text-xl md:text-2xl leading-tight max-w-3xl">
            {project.description}
          </p>
        </header>

        <div className="detail-block grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-8 border-b border-border">
          <div>
            <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-2">Role</p>
            <p className="font-['Rubik'] text-base">{project.role}</p>
          </div>
          <div>
            <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-2">Year</p>
            <p className="font-['Rubik'] text-base">{project.year}</p>
          </div>
          <div>
            <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-2">Stack</p>
            <p className="font-['Rubik'] text-base">{project.techStack.join(" · ")}</p>
          </div>
        </div>

        <div className="detail-block max-w-3xl mb-16">
          <h2 className="text-orange uppercase tracking-wide mb-6 font-['Rubik'] text-lg font-medium">
            Overview
          </h2>
          <p className="font-['Rubik'] text-lg leading-relaxed mb-10">{project.overview}</p>
          <h2 className="text-orange uppercase tracking-wide mb-6 font-['Rubik'] text-lg font-medium">
            What it covers
          </h2>
          <ul className="space-y-4">
            {project.highlights.map((item) => (
              <li key={item} className="font-['Rubik'] text-base leading-relaxed pl-5 border-l-2 border-orange">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-block flex flex-wrap gap-6 mb-20">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-orange font-['Rubik'] text-sm uppercase tracking-wide hover:opacity-70"
            >
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-orange font-['Rubik'] text-sm uppercase tracking-wide hover:opacity-70"
            >
              Source
              <Github className="size-4" />
            </a>
          )}
        </div>

        <Link
          to={`/projects/${next.slug}`}
          className="detail-block group flex items-end justify-between gap-6 pt-8 border-t border-border"
        >
          <div>
            <p className="text-orange font-['Rubik'] text-xs uppercase tracking-wide mb-2">Next</p>
            <p className="font-['Rubik'] text-2xl md:text-4xl font-bold uppercase tracking-tighter">
              {next.fullName}
            </p>
          </div>
          <ArrowUpRight className="size-8 text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </article>
    </Layout>
  );
}
