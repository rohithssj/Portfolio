import React, { useRef } from 'react'
import Card from '../sections/Card'
import { Globe } from '../sections/Globe'
import Email from '../sections/Email'
import { Frameworks } from '../sections/Frameworks'

const About = () => {
    const grid2 = useRef()
    return (
        <section className='c-space section-spacing' id='about'>
            <h2 className='text-heading'>About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[14rem] mt-12">


                <div className="relative flex items-end grid-default-color grid-1 overflow-hidden p-6 rounded-2xl">


                    <img
                        src="assets/coding-pov.png"
                        alt="Coding POV"
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:inset-y-10 lg:scale-[2.5] object-cover'
                    />

                    <div className="z-10 relative">
                        <p className='headtext'>Hi I'm Durga Rohith</p>

                        <p className='subtext text-neutral-300 mt-2'>
                            I'm a Full-Stack Developer and AI enthusiast passionate about building
                            real-world products. From AI-powered dashboards to immersive 3D
                            experiences, I enjoy turning ambitious ideas into working solutions.
                        </p>
                    </div>

                    <div className='absolute inset-x-0 pointer-events-none bottom-0 h-1/2 bg-gradient-to-t from-indigo-950/80 to-transparent' />
                </div>

                <div className="grid-default-color grid-2" ref={grid2}>
                    <div className="flex items-center justify-center w-full h-full">
                        <p className='flex items-end text-5xl text-gray-500'>
                            BUILD. LEARN. SHIP.
                        </p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="BUILD"
                            container={grid2} />

                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="CREATE" container={grid2} />

                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="LEARN" container={grid2} />

                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="DEPLOY" container={grid2} />

                        <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} text="INNOVATE" container={grid2} />

                        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/html5.svg" container={grid2} />

                        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/javascript.svg" container={grid2} />

                        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/react.svg" container={grid2} />

                        <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} image="assets/logos/tailwindcss.svg" container={grid2} />

                    </div>
                </div>

                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className='headtext'>Based in India</p>
                        <p className='subtext'>
                            Collaborating globally and building projects that combine AI,
                            web technologies, and immersive experiences.
                        </p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>

                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className='text-center headtext'>
                            Looking for a Developer? Let's Connect.
                        </p>
                        <Email />
                    </div>
                </div>
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className='headetext'>Tech Stack</p>
                        <p className='subtext'>
                            I work with modern technologies across frontend, backend, AI, and 3D
                            development to create fast, scalable, and engaging digital products.
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
