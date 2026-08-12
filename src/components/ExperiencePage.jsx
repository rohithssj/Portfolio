import React, { useRef } from "react";
import { experiences } from "../data/experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ExperiencePage = () => {


  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useGSAP(() => {

    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0
      },
      {
        scaleY: 1,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
        }
      }
    )

    const items = gsap.utils.toArray(".experience-item")

    items.forEach((item) => {

      const dot = item.querySelector(".experience-dot");
      gsap.fromTo(
        item,
        {
          opacity: 0.25,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",

          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      )

      gsap.fromTo(
    dot,
    {
        backgroundColor: "var(--bg)",
        scale: 1
    },
    {
        backgroundColor: "var(--accent)",
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",

        scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    }
)

    })
  }, {
    scope: sectionRef
  })
  return (
    <section
    ref={sectionRef}
      id="experience"
      className="mx-auto max-w-[1140px] px-6 py-24"
    >
      <div className="flex items-center gap-4">
        <h2 className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-[12px] text-[var(--accent)]">
            03
          </span>

          <span className="font-sans text-[30px] font-semibold text-[var(--text)]">
            Experience
          </span>

          <span className="font-mono text-[12px] text-[var(--text-faint)]">
            経験
          </span>
        </h2>

        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>


      <div className="relative mt-12 pl-10">

        <div className="absolute bottom-0 left-2 top-2 w-px bg-[var(--border)]" />

        <div
          ref={lineRef}
          className="absolute left-2 top-2 w-px origin-top bg-[var(--accent)]" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id || index}
            className="experience-item relative pb-14 last:pb-0"
          >

            <span
              className="
              experience-dot
                absolute
                -left-[34px]
                top-1
                h-3
                w-3
                rounded-full
                border
                border-[var(--accent)]
                bg-[var(--bg)]
              "
            />

            <div className="flex flex-col gap-2">

              <p className="font-mono text-[11px] text-[var(--text-faint)]">
                {exp.years}
              </p>

              <h3 className="font-sans text-[18px] font-semibold text-[var(--text)]">
                {exp.name}
              </h3>

              <p className="font-mono text-[12px] text-[var(--accent)]">
                {exp.tagLine}
              </p>

              <p className="max-w-2xl font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                {exp.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ExperiencePage;