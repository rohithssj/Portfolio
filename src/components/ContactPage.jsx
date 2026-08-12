import React from 'react'

const ContactPage = () => {
    return (
        <section
            id="contact"
            className="mx-auto max-w-[1140px] px-6 py-16 sm:py-20 md:py-24"
        >

            <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">

                <div className="flex flex-col gap-4 p-6 sm:p-8 md:p-12 lg:p-15">

                    <h1 className="max-w-md font-mono text-4xl leading-tight font-bold text-[var(--text)] sm:text-5xl">
                        Let's Build Something.
                    </h1>

                    <p className="max-w-md font-sans text-[var(--text-dim)]">
                        Open to internships, collaborations, and interesting problems worth solving.
                    </p>

                    <a
                        href="mailto:rohithssj23@gmail.com"
                        className="w-fit text-[var(--accent)] transition-opacity hover:opacity-80"
                    >
                        rohithssj23@gmail.com
                    </a>

                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">

                        <li className="font-mono">
                            <a
                                href="https://github.com/rohithssj"
                                target='__blank'
                                className="inline-block py-2 text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                            >
                                Github
                            </a>
                        </li>

                        <li className="font-mono">
                            <a
                                href="https://www.linkedin.com/in/durga-rohith/"
                                target='__blank'
                                className="inline-block py-2 text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li className="font-mono">
                            <a
                                href="/resume/Resume_Draft-1.pdf"
                                download="Resume_Draft-1.pdf"
                                className="inline-block py-2 text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                            >
                                Resume
                            </a>
                        </li>

                    </ul>

                </div>


                <div className="pointer-events-none absolute bottom-0 right-2 select-none sm:right-4 md:right-8">

                    <span className="font-sans text-[clamp(70px,18vw,260px)] font-bold leading-none text-[var(--accent)] opacity-[0.025]">
                        卍解
                    </span>

                </div>

            </div>

        </section>
    )
}

export default ContactPage