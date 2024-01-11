import React, { useEffect, useRef } from 'react'
import { useManual } from '../contexts/ManualContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
// import placeholder1 from '../public/assets/placeholder/placeholder-bg-1.png'
// import placeholder2 from '../public/assets/placeholder/placeholder-bg-2.png'
import { ParallaxBanner } from 'react-scroll-parallax';
import { AiFillCaretDown } from 'react-icons/ai';

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
    const { setManual } = useManual();

    useEffect(() => {
        setManual(false);
    }, []);

    return (
        <motion.div initial='initial' animate='animate'>
            <div id='home' className='font-marcellus w-full h-[90vh] md:h-screen text-center text-[#F7FAFA] overflow-x-hidden overflow-y-hidden'>
                <div className='flex justify-center h-full items-center'>
                    <ParallaxBanner
                        layers={[
                            {
                                speed: -40,
                                children: (
                                    <div className='w-full h-[50%] absolute left-0 top-[25%] z-0 bg-[#16796F]/90 dark:bg-[#1a2726] md:bg-black md:dark:bg-black'>
                                        <div className='hidden md:block opacity-30'>
                                            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                                <source src="/assets/videos/main-bg.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ),
                            },
                            // {
                            //     speed: -40,
                            //     children: (
                            //         <div className='w-[50%] h-[50%] absolute left-0 top-[25%] z-0 bg-[#16796F] dark:bg-[#041312] md:bg-[#181C19] md:dark:bg-[#181C19]'>
                            //             <div className='hidden md:block opacity-30 dark:opacity-10'>
                            //                 <Image
                            //                     src={placeholder1}
                            //                     fill={true}
                            //                     quality={100}
                            //                 />
                            //             </div>
                            //         </div>
                            //     ),
                            // },
                            // {
                            //     speed: -40,
                            //     children: (
                            //         <div className='w-[50%] h-[50%] absolute right-0 top-[25%] z-0 bg-[#16796F]/90 dark:bg-[#1a2726] md:bg-[#12201E] md:dark:bg-[#12201E]'>
                            //             <div className='hidden md:block opacity-30 dark:opacity-10'>
                            //                 <Image
                            //                     src={placeholder2}
                            //                     fill={true}
                            //                     quality={100}
                            //                 />
                            //             </div>
                            //         </div>
                            //     ),
                            // },
                        ]}
                        className='bg-container'
                    >
                        <div className='bg-container flex justify-center h-screen items-center'>
                            <motion.div variants={stagger}>
                                <div className='relative z-10'>
                                    <motion.div variants={fadeInUp}>
                                        <h1 className='font-medium text-6xl md:text-9xl font-marcellus py-4 select-none'>
                                            H<span className='text-5xl md:text-8xl'>ealth</span>MUN
                                        </h1>

                                        <div className='max-w-[300px] m-auto select-none'>
                                            <div className='font-medium text-xl md:text-2xl uppercase'>
                                                {/* June 11 - July 9, 2024 */}
                                                2024
                                            </div>
                                        </div>

                                        <div>
                                            <div className='p-6 mt-32 -mb-60 text-[#F7FAFA] flex justify-center items-center ease-in duration-100'>
                                                <Link href='/#timer'>
                                                    <AiFillCaretDown size={50} className='cursor-pointer' />
                                                </Link>
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