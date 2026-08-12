import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {

    const sectionRef = useRef(null)

    useGSAP(() => {

        const stats = gsap.utils.toArray('.about-stat')

        stats.forEach((stat) => {

            const target = Number(stat.dataset.target)
            const suffix = stat.dataset.suffix || ''

            const counter = {
                value: 0
            }

            gsap.set(stat, {
                opacity: 0.3
            })

            gsap.to(counter, {
                value: target,
                duration: 1.5,
                ease: 'power2.out',

                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    once: true
                },

                onUpdate: () => {
                    stat.textContent = `${Math.floor(counter.value)}${suffix}`
                },

                onComplete: () => {
                    stat.textContent = `${target}${suffix}`

                    gsap.to(stat, {
                        opacity: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    })
                }
            })

        })

    }, {
        scope: sectionRef
    })

    return (
        <section
            ref={sectionRef}
            id="about"
            className="mx-auto max-w-[1140px] px-6"
        >


            <div className="flex items-center gap-2">

                <h2 className="flex shrink-0 items-center gap-3">

                    <span className="font-mono text-[12px] text-[var(--accent)]">
                        01
                    </span>

                    <span className="font-sans text-[30px] font-semibold text-[var(--text)]">
                        About
                    </span>

                    <span className="font-mono text-[12px] text-[var(--text-dim)]">
                        私について
                    </span>

                </h2>

                <div className="h-px flex-1 bg-[var(--border)]" />

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
                                01
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                DEVELOPER IN PROGRESS
                            </p>

                        </div>



                        <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6">

                            <h3
                                data-target="5"
                                data-suffix="+"
                                className="about-stat font-mono text-[32px] font-bold text-[var(--accent)]"
                            >
                                0+
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                HACKATHONS
                            </p>

                        </div>



                        <div className="border-r border-[var(--border)] bg-[var(--surface)] p-6">

                            <h3
                                data-target="2"
                                data-suffix="+"
                                className="about-stat font-mono text-[32px] font-bold text-[var(--accent)]"
                            >
                                0+
                            </h3>

                            <p className="mt-2 font-mono text-[11px] text-[var(--text-faint)]">
                                YEARS BUILDING
                            </p>

                        </div>



                        <div className="bg-[var(--surface)] p-6">

                            <h3
                                data-target="10"
                                data-suffix="+"
                                className=" font-mono text-[32px] font-bold text-[var(--accent)]"
                            >
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

                        <div className="mt-4 flex flex-wrap items-center gap-2">

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                React
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                TypeScript
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                Tailwind
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                Express
                            </span>

                        </div>

                    </div>


                    <div>

                        <h3 className="font-mono text-[11px] font-medium text-[var(--accent)]">
                            EXPLORING
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                GSAP
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                Three.js
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                R3F
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                Gen AI / LLMs
                            </span>

                        </div>

                    </div>



                    <div>

                        <h3 className="font-mono text-[11px] font-medium text-[var(--accent)]">
                            LEVELING UP
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                DSA
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                System Design
                            </span>

                            <span className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)]">
                                Problem Solving
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutPage