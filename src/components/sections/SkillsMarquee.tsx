import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skillCategories } from "@/data/portfolio-data";
import type { SkillItem } from "@/types/portfolio";

gsap.registerPlugin(useGSAP);

function iconUrl(slug: string) {
  return `https://cdn.simpleicons.org/${slug}`;
}

function MarqueeRow({
  skills,
  reverse,
  duration,
}: {
  skills: SkillItem[];
  reverse?: boolean;
  duration: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loop = [...skills, ...skills, ...skills, ...skills];

  useGSAP(
    (context, contextSafe) => {
      const track = trackRef.current;
      const row = rowRef.current;
      if (!track || !row) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(track, { x: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let tween: gsap.core.Tween | undefined;
        let pause: () => void = () => {};
        let play: () => void = () => {};

        const start = () => {
          const setWidth = track.scrollWidth / 4;
          gsap.set(track, { x: reverse ? -setWidth : 0 });
          tween = gsap.to(track, {
            x: reverse ? 0 : -setWidth,
            duration,
            ease: "none",
            repeat: -1,
          });
          pause = contextSafe(() => tween?.pause());
          play = contextSafe(() => tween?.play());
          row.addEventListener("pointerenter", pause);
          row.addEventListener("pointerleave", play);
        };

        const images = Array.from(track.querySelectorAll("img"));
        const pending = images.filter((img) => !img.complete);

        if (pending.length === 0) {
          start();
        } else {
          Promise.all(
            pending.map(
              (img) =>
                new Promise<void>((resolve) => {
                  img.addEventListener("load", () => resolve(), { once: true });
                  img.addEventListener("error", () => resolve(), { once: true });
                })
            )
          ).then(start);
        }

        return () => {
          row.removeEventListener("pointerenter", pause);
          row.removeEventListener("pointerleave", play);
          tween?.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: rowRef, dependencies: [duration, reverse] }
  );

  return (
    <div
      ref={rowRef}
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div ref={trackRef} className="flex w-max gap-8 pr-8">
        {loop.map((skill, index) => (
          <div
            key={`${skill.slug}-${index}`}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src={iconUrl(skill.slug)}
              alt=""
              width={28}
              height={28}
              className="size-7 object-contain"
            />
            <span className="font-['Rubik'] text-sm text-foreground whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="space-y-6">
      <h3 className="text-orange uppercase tracking-wide font-['Rubik'] text-lg font-medium">
        SKILLS
      </h3>
      <div className="space-y-5">
        {skillCategories.map((category, index) => (
          <div key={category.category} className="space-y-3">
            <p className="text-orange font-['Rubik'] text-xs font-medium uppercase tracking-wide">
              {category.category}
            </p>
            <MarqueeRow
              skills={category.skills}
              reverse={index % 2 === 1}
              duration={18 + index * 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
