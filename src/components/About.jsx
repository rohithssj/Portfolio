import React, { useRef } from 'react'
import Card from '../sections/Card'

const About = () => {
    const grid2 = useRef()
    return (
        <section className='c-space section-spacing'>
            <h2 className='text-heading'>About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">


                <div className="relative flex items-end grid-default-color grid-1 overflow-hidden p-6 rounded-2xl">


                    <img
                        src="assets/coding-pov.png"
                        alt="Coding POV"
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:inset-y-10 lg:scale-[2.5] object-cover'
                    />

                    <div className="z-10 relative">
                        <p className='headtext'>Hi I'm Durga Rohith</p>

                        <p className='subtext text-neutral-300 mt-2'>
                            Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
                        </p>
                    </div>

                    <div className='absolute inset-x-0 pointer-events-none bottom-0 h-1/2 bg-gradient-to-t from-indigo-950/80 to-transparent' />
                </div>

                <div className="grid-default-color grid-2" ref={grid2}>
                    <div className="flex items-center justify-center w-full h-full">
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODING IS FUN!  
                        </p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP"
                        container={grid2} />

                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="GRASP" container={grid2} />

                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="GRASP" container={grid2} />

                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="GRASP" container={grid2}/>

                        <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} text="GRASP" container={grid2} />

                        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/html5.svg" container={grid2}/>

                        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/javascript.svg" container={grid2} />

                        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/react.svg" container={grid2} />

                        <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} image="assets/logos/tailwindcss.svg" container={grid2} />

                    </div>
                </div>

                <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                  <p className='headtext'>Time Zone</p>  
                  <p className='subtext'>
                    I'm based in India, and open to remote work worldwide.
                  </p>
                    </div>   
                    <figure className='absolute left-[30%] top-[10%]'>
                        </figure> 
                </div>
                <div className="grid-special-color grid-4"></div>
                <div className="grid-default-color grid-5"></div>
            </div>
        </section>
    )
}

export default About
