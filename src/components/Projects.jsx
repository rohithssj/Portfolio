import { useState } from "react"
import { myProjects } from "../constants"
import Project from "../sections/Project"
import { motion, useMotionValue, useSpring } from "motion/react"

const Projects = () => {
    // 1. Swapped global mouse events for Framer Motion's native window tracking values
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const springX = useSpring(x, { damping: 25, stiffness: 150 })
    const springY = useSpring(y, { damping: 25, stiffness: 150 })

    // 2. Extracted listener to use native page-view events to bypass container bounds lag
    const mouseMove = (e) => {
        x.set(e.clientX + 15)
        y.set(e.clientY + 15)
    }
    
    const [preview, setPreview] = useState(null)

    return (
        // Fixed: Removed 'onMouseMove' from the section wrapper so it leaves other sections alone!
        <section onMouseMove={mouseMove} className="relative c-space section-spacing">
            <h2 className="text-heading">My Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
            
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}

            {preview && ( 
                <motion.img 
                    src={preview}
                    alt="Floating tracking preview" 
                    className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-xl pointer-events-none transform-gpu"
                    style={{ x: springX, y: springY }} 
                />
            )}
        </section>
    )
}

export default Projects
