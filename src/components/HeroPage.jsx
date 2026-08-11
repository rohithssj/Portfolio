import React from 'react'

const HeroPage = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-16"
        >

            <div className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 font-sans text-[clamp(220px,28vw,500px)] leading-none text-[var(--text)] opacity-[0.035]">
                斬
            </div>

            
            <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6">

                <div className="max-w-3xl">

                    <p className="font-mono text-[12px] text-[var(--accent)]">
        // DEVELOPER IN PROGRESS
                    </p>

                    <h1 className="mt-6 font-sans text-[clamp(38px,5vw,60px)] font-bold leading-[1.05] tracking-tight text-[var(--text)]">
                        I'm still building <br />
                        the developer <br />
                        <span className="text-[var(--accent)]">
                            I want to become.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl font-sans text-[15.5px] leading-relaxed text-[var(--text-dim)]">
                        I design and ship full-stack products end to end —
                        interaction design through production code.
                    </p>

                    <p className="mt-3 font-mono text-[12px] text-[var(--text-faint)]">
                        Computer Science Student · Developer · Builder
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button className='bg-orange-500 px-5 py-3 rounded font-mono text-black text-sm font-medium cursor-pointer hover:bg-orange-400 transition duration-200 border 
                        hover:-translate-y-1'>
                            View my work
                        </button>
                        <button className='bg-transparent px-5 py-3 rounded font-mono text-sm border border-[var(--border)] font-medium cursor-pointer hover:text-[var(--accent)] hover:border-orange-400 transition duration-200'>
                            Get In Touch
                        </button>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroPage