import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import placeholder1 from '../public/assets/placeholder-bg-1.png'
import placeholder2 from '../public/assets/placeholder-bg-2.png'
import { ParallaxBanner } from 'react-scroll-parallax';

const easing = [.6, -.05, .01, .9]

const fadeInUp = {
    initial: {
        y: 100,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: .8,
            ease: easing
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Main = () => {
    return (
        <motion.div initial='initial' animate='animate'>
            <div id='home' className='font-marcellus w-full h-screen text-center text-[#F7FAFA]'>
                <div className='flex justify-center h-full items-center'>
                    <ParallaxBanner
                        layers={[
                            {
                                speed: -40,
                                children: (
                                    <div className='w-[50%] h-[50%] absolute left-0 top-[25%] z-0 bg-[#181C19] border-r-2 border-black'>
                                        <div className='opacity-30'>
                                            <Image
                                                src={placeholder1}
                                                fill={true}
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                speed: -40,
                                children: (
                                    <div className='w-[50%] h-[50%] absolute right-0 top-[25%] z-0 bg-[#12201E] border-l-2 border-black'>
                                        <div className='opacity-30'>
                                            <Image
                                                src={placeholder2}
                                                fill={true}
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                ),
                            },
                        ]}
                        className='bg-container'
                    >
                        <div className='bg-container flex justify-center h-screen items-center'>
                            <motion.div variants={stagger}>
                                <div className='relative z-10'>
                                    <motion.div variants={fadeInUp}>
                                        <h1 className='font-medium text-8xl font-marcellus py-4 select-none'>
                                            HealthMUN
                                        </h1>

                                        <div className='max-w-[300px] m-auto select-none'>
                                            <div className='font-medium text-2xl uppercase'>
                                                June 11 - July 9, 2024
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </ ParallaxBanner>
                </div>
            </div>
        </motion.div>
    )
}

export default Main