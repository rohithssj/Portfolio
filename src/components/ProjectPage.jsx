import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const ProjectPage = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section
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


            <div className="relative mt-12 flex flex-col gap-16">
                {projects.map((project, index) => (
                    <div key={project.id || index} className="relative">

                        
                        <div className="mb-4 flex items-center justify-between font-mono text-[11px]">
                            <span className="text-[var(--text-faint)]">
                                SELECTED PROJECT
                            </span>

                            <span className="text-[var(--text-dim)]">
                                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                            </span>
                        </div>


                        <article 
                        onClick={() => setSelectedProject(project)}
                        className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">

                            <div className="aspect-[16/6] overflow-hidden bg-[var(--surface-2)]">
                                <img
                                    src={project.image} 
                                    alt={project.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                                />
                            </div>


                           
                            <div className="border-t border-[var(--border)] p-6 md:p-8">

                                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                                    <div className="max-w-2xl">

                                        <p className="font-mono text-[11px] text-[var(--accent)]">
                                            {String(index + 1).padStart(2, '0')} / PROJECT
                                        </p>

                                        <h3 className="mt-2 font-sans text-[24px] font-semibold text-[var(--text)]">
                                            {project.name}
                                        </h3>

                                        <p className="mt-3 font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                                            {project.description}
                                        </p>

                                    </div>


                                  
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech && project.tech.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] text-[var(--text-dim)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </article>

                    </div>
                ))}
            </div>


            <div className="mt-8 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--text-faint)]">
                    SCROLL TO EXPLORE
                </span>

                <span className="font-mono text-[11px] text-[var(--text-faint)]">
                    CLICK PROJECT FOR DETAILS ↗
                </span>
            </div>

                {
                    selectedProject && (
                        <ProjectModal 
                        project={selectedProject}
                        onClose={()=>setSelectedProject(null)}
                        />
                    )
                }
        </section>
    )
}

export default ProjectPage
