import { section } from 'motion/react-client'
import React from 'react'
import Herotext from '../sections/Herotext'
import Parallax from '../sections/Parallax'

const Hero = () => {
  return (
    <section className='flex items-start justify-center md:justify-center md:items-start min-h-screen overflow-hidden c-space' >
        <Herotext />
        <Parallax />

    </section>
  )
}

export default Hero