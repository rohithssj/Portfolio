import React from "react";
import { experiences } from "../data/experience";

const ExperiencePage = () => {
  return (
    <section
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

        {experiences.map((exp, index) => (
          <div
            key={exp.id || index}
            className="relative pb-14 last:pb-0"
          >

            <span
              className="
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