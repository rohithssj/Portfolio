import React, { useState } from 'react'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
]

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavigation = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 p-3 backdrop-blur-md">

            <div className="mx-auto flex h-12 max-w-[1140px] items-center justify-between px-3 font-mono text-sm text-[var(--text)] sm:px-6">

                <a
                    href="#home"
                    onClick={handleNavigation}
                    className="flex items-center gap-2 font-light"
                >
                    <span>DURGA ROHITH</span>

                    <span className="pointer-events-none font-bold text-[var(--accent)]">
                        ロヒト
                    </span>
                </a>


                <ul className="hidden items-center gap-6 md:flex">

                    {navItems.map((item) => (
                        <li key={item.name}>

                            <a
                                href={item.href}
                                className="group relative block py-2 text-[var(--text-dim)] transition-colors duration-200 hover:text-[var(--text)]"
                            >
                                {item.name}

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </a>

                        </li>
                    ))}

                </ul>


                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
                >

                    <span
                        className={`h-px w-5 bg-[var(--text)] transition-transform duration-300 ${
                            menuOpen ? 'translate-y-[4px] rotate-45' : ''
                        }`}
                    />

                    <span
                        className={`h-px w-5 bg-[var(--text)] transition-opacity duration-300 ${
                            menuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />

                    <span
                        className={`h-px w-5 bg-[var(--text)] transition-transform duration-300 ${
                            menuOpen ? '-translate-y-[4px] -rotate-45' : ''
                        }`}
                    />

                </button>

            </div>


            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${
                    menuOpen
                        ? 'max-h-80 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >

                <ul className="mx-auto flex max-w-[1140px] flex-col gap-1 px-3 pb-3 pt-3 sm:px-6">

                    {navItems.map((item) => (
                        <li key={item.name}>

                            <a
                                href={item.href}
                                onClick={handleNavigation}
                                className="block border-b border-[var(--border)] py-3 text-[var(--text-dim)] transition-colors duration-200 hover:text-[var(--accent)]"
                            >
                                {item.name}
                            </a>

                        </li>
                    ))}

                </ul>

            </div>

        </nav>
    )
}

export default Navbar