import React from 'react'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import AboutPage from './components/AboutPage'

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <HeroPage />
      <AboutPage />
    </div>
  )
}

export default App