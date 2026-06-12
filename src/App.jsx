import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      
      <Navbar />
      <Hero />
      <About />
      {/* <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section> */}
      </div>
  )
}

export default App