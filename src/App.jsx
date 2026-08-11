import React from 'react'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <ContactPage />
    </div>
  )
}

export default App