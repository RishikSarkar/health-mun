import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useManual } from '../../contexts/ManualContext';

import placeholder1 from '../../public/assets/placeholder-bg-1.png'


const Secretariat = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <div id='secretariat' className='pt-28 w-full h-full items-center justify-center bg-[#F7FAFA] dark:bg-[#1a2726] dark:text-[#F7FAFA] selection:text-[#F7FAFA] dark:selection:text-[#09302C] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
            <div className='w-full h-full p-24 text-center bg-[#CADEDF] dark:bg-[#253130] dark:text-[#F7FAFA] border-b-4 border-[#16796F]/20 dark:border-[#F7FAFA]/20'>
                <div className='text-6xl font-marcellus'>
                    Meet the Secretariat
                </div>
            </div>
            <div className='w-full h-full font-montserrat px-40'>
                <div className='px-40 py-36 pt-24 grid grid-cols-3 gap-x-4 gap-y-8'>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Secretary-General
                    </div>
                    <div className="col-span-1 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#041312] text-[#09302C] dark:text-[#F7FAFA]'>
                            <div className='p-8 pb-4 text-2xl font-marcellus'>
                                Yasmin C. Khan
                            </div>
                            <div className='p-8 pt-4 text-sm'>
                                Yasmin C. Khan is a ...
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-4" />
                    </div>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Deputy Secretary-General
                    </div>
                    <div className="col-span-1 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#041312] text-[#09302C] dark:text-[#F7FAFA]'>
                            <div className='p-8 pb-4 text-2xl font-marcellus'>
                                Ayah Elzibak
                            </div>
                            <div className='p-8 pt-4 text-sm'>
                                Ayah Elzibak is a ...
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-4" />
                    </div>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Chief Technology Officer
                    </div>
                    <div className="col-span-1 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 text-white dark:text-[#F7FAFA] border-4 border-[#16796F] dark:border-[#F7FAFA]">
                        <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#041312] text-[#09302C] dark:text-[#F7FAFA]'>
                            <div className='p-8 pb-4 text-2xl font-marcellus'>
                                Rishik Sarkar
                            </div>
                            <div className='p-8 pt-4 text-sm'>
                                Rishik Sarkar is a ...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Secretariat