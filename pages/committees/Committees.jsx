import React, { useState, useEffect } from 'react';
import { useManual } from '../../contexts/ManualContext';
import Image from 'next/image';
import placeholder from '../../public/assets/placeholder/placeholder-bg-1.png'

const Committees = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <div id='committees' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
            <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                <div className='text-3xl md:text-6xl font-marcellus'>
                    Committees
                </div>
            </div>
            <div className='w-full h-full font-marcellus px-20 md:px-32'>

                <div className='md:px-40 w-full md:w-full md:py-36 pt-16 md:pt-24 md:grid md:grid-cols-3 md:gap-x-4 gap-y-12'>
                    <div className='text-center md:col-span-3 py-8 mb-12 md:mb-0 text-2xl uppercase bg-[#1EA497] dark:bg-[#253130] text-[#F7FAFA]'>
                        General Assembly
                    </div>
                    
                    <div className="md:col-span-1 md:mt-0 mb-4 md:mb-0">
                        <div className='border-4 border-[#16796F] dark:border-[#F7FAFA]'>
                            <Image src={placeholder} width={500} />
                        </div>
                    </div>
                    <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA] mb-12 md:mb-0">
                        <div className='py-4 md:py-0 w-full h-full max-h-[40vh] bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA] border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] md:max-h-full overflow-y-scroll'>
                            <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                TBD
                            </div>
                            <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm'>
                                -
                            </div>
                        </div>
                    </div>

                    <div className='text-center md:col-span-3 py-8 mb-12 md:mb-0 mt-16 md:mt-0 text-2xl uppercase bg-[#1EA497] dark:bg-[#253130] text-[#F7FAFA]'>
                        Crisis Committees
                    </div>
                    
                    <div className="md:col-span-1 md:mt-0 mb-4 md:mb-0">
                        <div className='border-4 border-[#16796F] dark:border-[#F7FAFA]'>
                            <Image src={placeholder} width={500} />
                        </div>
                    </div>
                    <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA] mb-12 md:mb-0">
                        <div className='py-4 md:py-0 w-full h-full max-h-[40vh] bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA] border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] md:max-h-full overflow-y-scroll'>
                            <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                TBD
                            </div>
                            <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm'>
                                -
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Committees