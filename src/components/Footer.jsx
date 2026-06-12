import React from 'react'
import { mySocials } from '../constants'

const Footer = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 pb-6 text-sm text-neutral-400 c-space w-full text-center'>
        
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        
        <div className="flex items-center justify-center gap-2 mt-2">
            <p>Made With ❤️ by Rohith</p>
        </div>
        
        <div className="flex items-center justify-center gap-5 mt-1">
            {mySocials.map((social, index) => (
                <a 
                    href={social.href} 
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-110 opacity-80 hover:opacity-100"
                >
                    <img src={social.icon} alt={social.name || "Social link"} className='w-5 h-5'/>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Footer
