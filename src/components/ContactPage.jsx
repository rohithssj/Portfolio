import React from 'react'

const ContactPage = () => {
    return (
        <section
            id="contact"
            className="mx-auto max-w-[1140px] px-6 py-24">
            <div>
                <div className='border border-[var(--border)] rounded-xl relative overflow-hidden'>

                    <div className='p-15 flex flex-col gap-4'>
                        <h1 className='text-5xl max-w-md leading-15 font-mono font-bold'>
                            Let's Build Something.
                        </h1>
                        <p className='text-[var(--text-dim)] max-w-md font-sans'>Open to internships, collaborations, and interesting problems worth solving.</p>
                        <a href="mailto:rohithssj23@gmail.com"
                            className='text-[var(--accent)]'>
                            rohithssj23@gmail.com
                        </a>

                        <ul className='flex gap-5'>
                            <li className='text-[var(--text-dim)] font-mono hover:text-[var(--accent)]'><a href="">Github</a></li>
                            <li className='text-[var(--text-dim)] font-mono hover:text-[var(--accent)]'><a href="">LinkedIn</a></li>
                            <li className='text-[var(--text-dim)] font-mono hover:text-[var(--accent)]'><a href="">Resume</a></li>
                        </ul>
                    </div>
                    <div className="absolute right-8 bottom-0 pointer-events-none select-none">
                        <span className="font-sans text-[clamp(120px,8vw,260px)] font-bold leading-none text-[var(--accent)] opacity-[0.025]">
                            卍解
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactPage