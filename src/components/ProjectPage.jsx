import React, { useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeProject, setActiveProject] = useState(0)

    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const trackRef = useRef(null);




    useGSAP(() => {

        const track = trackRef.current;
        const pin = pinRef.current;

        if (!pin || !track) return;

        const cards = gsap.utils.toArray(".project-card");

        const scrollAmount = () => {
            return track.scrollWidth - pin.offsetWidth;
        };

        gsap.to(track, {

            x: () => -scrollAmount(),

            ease: "none",

            scrollTrigger: {

                trigger: pin,

                start: "top top",

                pin: true,

                scrub: 1,

                end: () => `+=${scrollAmount()}`,

                invalidateOnRefresh: true,

                onUpdate: (self) => {

                    const progress = self.progress;

                    const activeIndex = Math.min(
                        cards.length - 1,
                        Math.floor(progress * cards.length)
                    );

                    setActiveProject((previous) => {
                        if (previous === activeIndex) {
                            return previous;
                        }

                        return activeIndex;
                    });

                    cards.forEach((card, index) => {

                        const distance = index - activeIndex;

                        if (distance === 0) {

                            gsap.set(card, {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            });

                        } else if (distance < 0) {

                            gsap.set(card, {
                                opacity: 0.45,
                                scale: 0.96,
                                y: 8,
                            });

                        } else {

                            gsap.set(card, {
                                opacity: 0.7,
                                scale: 0.98,
                                y: 0,
                            });

                        }

                    });

                }
            }

        });

    }, {
        scope: sectionRef
    });

    return (
        <section
            ref={sectionRef}
            id="work"
            className="mx-auto max-w-[1140px] px-6 py-24"
        >


            <div className="flex items-center gap-4">

                <h2 className="flex shrink-0 items-center gap-3">

                    <span className="font-mono text-[12px] text-[var(--accent)]">
                        02
                    </span>

                    <span className="font-sans text-[30px] font-semibold text-[var(--text)]">
                        Selected Work
                    </span>

                    <span className="font-mono text-[12px] text-[var(--text-faint)]">
                        作品
                    </span>

                </h2>

                <div className="h-px flex-1 bg-[var(--border)]" />

            </div>



            <div
                ref={pinRef}
                className="relative mt-12">


                <div className="overflow-hidden">

                    <div
                        ref={trackRef}
                        className="flex gap-6"
                    >

                        {projects.map((project, index) => (

                            <article
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="
                                    project-card
                                    group
                                    shrink-0
                                    w-full
                                    cursor-pointer
                                    overflow-hidden
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--surface)]
                                "
                            >


                                <div className="aspect-[16/8] overflow-hidden bg-[var(--surface-2)]">

                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-[1.02]
                                        "
                                    />

                                </div>



                                <div className="border-t border-[var(--border)] p-6 md:p-8">

                                    <div className="
                                        flex
                                        flex-col
                                        gap-6
                                        md:flex-row
                                        md:items-end
                                        md:justify-between
                                    ">

                                        <div className="max-w-2xl">

                                            <p className="font-mono text-[11px] text-[var(--accent)]">
                                                {String(index + 1).padStart(2, "0")} / PROJECT
                                            </p>

                                            <h3 className="mt-2 font-sans text-[24px] font-semibold text-[var(--text)]">
                                                {project.name}
                                            </h3>

                                            <p className="mt-3 font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                                                {project.description}
                                            </p>

                                        </div>



                                        <div className="flex flex-wrap gap-2">

                                            {project.tech?.map((tech) => (

                                                <span
                                                    key={tech}
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-[var(--border)]
                                                        px-3
                                                        py-1
                                                        font-mono
                                                        text-[11px]
                                                        text-[var(--text-dim)]
                                                    "
                                                >
                                                    {tech}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </div>



            <div className="mt-8 flex items-center justify-between">

                <span className="font-mono text-[11px] text-[var(--text-faint)]">
                    SCROLL TO EXPLORE
                </span>

                <span className="font-mono text-[11px] text-[var(--text-faint)]">
                    CLICK PROJECT FOR DETAILS ↗
                </span>

            </div>



            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

        </section>
    );
};

export default ProjectPage;