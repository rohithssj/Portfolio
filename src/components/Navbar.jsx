import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md p-3'>
            <div className='  mx-auto flex h-12 max-w-[1140px] items-center justify-between px-6 text-white  w-full font-mono text-sm'>
                <h1 className=' flex gap-2 font-light'>
                    <span>DURGA ROHITH</span>
                    <span className='text-[var(--accent)] font-bold pointer-events-none'>ロヒト</span></h1>
                <ul className='flex items-center justify-center gap-4 font-mono'>
                    <li className='cursor-pointer hover:text-[var(--accent)] transition duration-200'>Home</li>
                    <li className='cursor-pointer hover:text-[var(--accent)] transition duration-200'>About</li>
                    <li className='cursor-pointer hover:text-[var(--accent)] transition duration-200'>Work</li>
                    <li className='cursor-pointer hover:text-[var(--accent)] transition duration-200'>Experience</li>
                    <li className='cursor-pointer hover:text-[var(--accent)] transition duration-200'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar