import { section } from 'motion/react-client'
import React, { Suspense } from 'react'
import Herotext from '../sections/Herotext'
import Parallax from '../sections/Parallax'
import Model from '../sections/Model'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../sections/Loader'


function Animate(){
    return useFrame((state,delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x/10,1+state.mouse.y/10,3],
            0.5,
            delta
        )
    })

}

const Hero = () => {
    const mobile = useMediaQuery({maxWidth:853})
    return (
        <section className='flex items-start justify-center md:justify-center md:items-start min-h-screen overflow-hidden c-space' >
            <Herotext />
            <Parallax />
            <figure className='absolute inset-0' style={{
                width: "100vw", height: "100vh"
            }}>

                <Canvas camera={{position:[0,1,3]}}>
                    <Suspense fallback={<Loader />}>
                    <Float>
                    <Model 
                    scale={mobile && 0.23} 
                    position={mobile && [0, -1.5, 0]} 
                    />
                    </Float>
                    <Animate />
                    </Suspense>
                    {/* <OrbitControls /> */}
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero