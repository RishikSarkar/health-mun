import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useManual } from '../../contexts/ManualContext';

import placeholder1 from '../../public/assets/placeholder-bg-1.png'
import rishik from '../../public/assets/secretariat/rishik.jpg'


const Secretariat = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <div id='secretariat' className='pt-28 w-full h-full items-center justify-center bg-[#F7FAFA] dark:bg-[#1a2726] dark:text-[#F7FAFA] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
            <div className='w-full h-full p-16 md:p-24 text-center bg-[#CADEDF] dark:bg-[#253130] dark:text-[#F7FAFA] border-b-4 border-[#16796F]/20 dark:border-[#F7FAFA]/20'>
                <div className='text-3xl md:text-6xl font-marcellus'>
                    Meet the Secretariat
                </div>
            </div>
            <div className='w-full h-full font-marcellus px-20 md:px-32'>
                <div className='md:px-40 w-full md:w-full md:py-36 pt-16 md:pt-24 md:grid md:grid-cols-3 md:gap-x-4 gap-y-8'>

                    <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase font-bold'>
                        Secretary-General
                    </div>
                    <div className="md:col-span-1 my-6 md:mt-0">
                        <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                            <Image src={placeholder1} width={500} />
                        </div>
                        <div className="hidden md:flex justify-center">
                            {/* Change email */}
                            <a href="mailto:tempemail@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                Contact Yasmin
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA]">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                            <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                Yasmin C. Khan
                            </div>
                            <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                Yasmin C. Khan is a ...
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-12 md:my-4" />
                    </div>

                    <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase font-bold'>
                        Deputy Secretary-General
                    </div>
                    <div className="md:col-span-1 my-6 md:mt-0">
                        <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                            <Image src={placeholder1} width={500} />
                        </div>
                        <div className="hidden md:flex justify-center">
                            {/* Change email */}
                            <a href="mailto:tempemail@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                Contact Ayah
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA]">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                            <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                Ayah Elzibak
                            </div>
                            <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                Ayah Elzibak is a ...
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-12 md:my-4" />
                    </div>

                    <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase font-bold'>
                        Chief Technology Officer
                    </div>
                    <div className="md:col-span-1 my-6 md:mt-0">
                        <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                            <Image src={rishik} width={500} />
                        </div>
                        <div className="hidden md:flex justify-center">
                            {/* Change email */}
                            <a href="mailto:tempemail@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                Contact Rishik
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA] pb-12 md:pb-0">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                            <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                Rishik Sarkar
                            </div>
                            <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                Born in Los Angeles, California, and raised in West Bengal, India, Rishik considers himself
                                a member of a global community of innovationists. As a senior at Rutgers University-New Brunswick,
                                double majoring in Computer Science and Cognitive Science, his passions lie in the nexus of
                                artificial intelligence and cognitive neuropsychiatry. In addition to his academic ventures,
                                Rishik works as an ML full-stack developer intern at a fintech firm and as a Computational
                                Cognitive Neuropsychiatry research assistant at a collaborative Rutgers-Princeton lab. With
                                several years of development and research experience, his greatest ambition is to utilize
                                machine learning in diagnosing and treating mental health disorders by pursuing a Master's degree
                                and eventually establishing a digital health technology startup. Despite having the least
                                experience in Model U.N. out of the original three founders, Rishik aims to learn more about
                                conferences while building and maintaining the online platform for HealthMUN. His ultimate
                                dream for this conference is to host a hackathon-like committee for delegates interested in
                                the intersection of technology and healthcare; of course, all majors would be welcome to
                                participate in it! In his free time, Rishik enjoys coding ML projects (of course!), watching
                                One Piece, and playing the guitar and the violin. His interest in linguistics has also inspired
                                him to learn Bengali, Hindi, Japanese, and German, so feel free to contact him in your native tongue!
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Secretariat