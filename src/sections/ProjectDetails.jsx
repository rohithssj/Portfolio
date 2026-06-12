import React from 'react'
import { motion } from "motion/react"

const ProjectDetails = ({
    title, description, subDescription = [], href, image, tags = [], close
}) => {
    return (
        // Added layout click protection backdrop layer
        <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/40'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl border shadow-xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 mx-4"
            >
                <button onClick={close} className='absolute p-2 rounded-full top-5 right-5 bg-midnight hover:bg-gray-800 transition-colors z-10 cursor-pointer'>
                    <img src="/assets/close.svg" alt="Close modal button" className='w-5 h-5'/>
                </button>
                
                <img src={image} alt={title} className='w-full h-48 object-cover rounded-t-2xl' />
                
                <div className="p-6">
                    <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-neutral-300'>{description}</p>
                    
                    {subDescription.map((subDesc, index) => (
                        <p key={index} className='mb-3 text-sm font-normal text-neutral-400'>{subDesc}</p>
                    ))}
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <img 
                                    key={tag.id || tag.name}
                                    src={tag.path || tag}
                                    className='rounded-md size-8 object-contain bg-white/5 p-1'
                                    alt={tag.name || "tech logo"}
                                />
                            ))}
                        </div>
                        <a 
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer'
                        >
                            View Project <img src="/assets/arrow-up.svg" alt="Arrow Up" className='size-4'/>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectDetails
