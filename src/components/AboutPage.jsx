import React from 'react'

const AboutPage = () => {
    return (
        <div className="mx-auto max-w-[1140px] px-6 flex gap-5 flex-col">
            <div>
                <div className='flex items-center gap-2'>
                    <h1 className='flex gap-3 items-center'>
                        <span className='text-[var(--accent)] font-mono'>01</span>
                        <span className='font-mono text-3xl'>About</span>
                        <span className='text-[var(--text-dim)] text-sm'>私について</span></h1>
                    <div className='bg-[var(--border)] h-px flex-1'></div>
                </div>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">

                <div>


                    <div className="flex max-w-xl flex-col gap-5">
                        <p className="font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                            I'm Rohith, a Computer Science student who turns ideas into
                            shipped products — I learn by building, and I'd rather ship
                            something imperfect than plan something perfect.
                        </p>

                        <p className="font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                            Design and code aren't separate steps for me. I sketch the
                            interaction first, then build it — this site is proof of that habit.
                        </p>
                    </div>


                    <div className="mt-10 grid grid-cols-2 border border-[var(--border)]">

                        <div className="border-b border-r border-[var(--border)] bg-[var(--surface)] p-6">
                            <h3 className="font-mono text-[32px] font-bold text-[var(--accent)]">
                                15+
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                PROJECTS BUILT
                            </p>
                        </div>


                        <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6">
                            <h3 className="font-mono text-[32px] font-bold text-[var(--accent)]">
                                5+
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                HACKATHONS
                            </p>
                        </div>


                        <div className="border-r border-[var(--border)] bg-[var(--surface)] p-6">
                            <h3 className="font-mono text-[32px] font-bold text-[var(--accent)]">
                                2+
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                YEARS BUILDING
                            </p>
                        </div>


                        <div className="bg-[var(--surface)] p-6">
                            <h3 className="font-mono text-[32px] font-bold text-[var(--accent)]">
                                ∞
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                IDEAS NOT BUILT YET
                            </p>
                        </div>

                    </div>

                </div>



                <div className="flex flex-col gap-9">

                    <div>
                        <h3 className="font-mono text-[11px] font-medium text-[var(--accent)]">
                            BUILDING WITH
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2 items-center">
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                React
                            </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                TypeScript
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                Tailwind
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                Express
                                </span>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-mono text-[11px] font-medium text-[var(--accent)]">
                            EXPLORING
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                GSAP
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                Three.js
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                R3F
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                Gen AI / LLMs
                                </span>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-mono text-[12px] font-medium text-[var(--accent)]">
                            LEVELING UP
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                DSA
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                System Design
                                </span>
                            <span className='text-[var(--text-dim)] text-sm px-3 py-2 border border-[var(--border) rounded-[20px]'>
                                Solving Skills
                                </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutPage