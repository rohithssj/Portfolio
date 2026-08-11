import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] font-mono text-sm text-[var(--text-dim)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="aspect-[16/9] overflow-hidden bg-[var(--surface-2)]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-fill"
          />
        </div>

        <div className="p-6 md:p-10">

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[11px] text-[var(--accent)]">
              {String(project.id).padStart(2, "0")} / PROJECT
            </span>

            <span className="font-mono text-[11px] text-[var(--text-faint)]">
              {project.category}
            </span>
          </div>

          <h2 className="mt-4 font-sans text-[32px] font-semibold leading-tight text-[var(--text)] md:text-[40px]">
            {project.name}
          </h2>

          <p className="mt-4 max-w-2xl font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
            {project.longDescription || project.description}
          </p>

          <div className="mt-8">
            <p className="font-mono text-[11px] text-[var(--accent)]">
              BUILT WITH
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-dim)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 font-mono text-[12px] font-medium text-black transition-colors duration-300 hover:bg-[var(--text)]"
                onClick={(e) => e.stopPropagation()}
              >
                LIVE PROJECT ↗
              </a>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[var(--border)] px-5 py-3 font-mono text-[12px] font-medium text-[var(--text-dim)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                onClick={(e) => e.stopPropagation()}
              >
                GITHUB ↗
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;