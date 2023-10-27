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
        <div id='secretariat' className='pt-28 w-full h-full items-center justify-center bg-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-[#F7FAFA] selection:text-[#F7FAFA] dark:selection:text-[#09302C] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>
            <div className='w-full h-full p-32 text-center bg-[#CADEDF] dark:bg-[#253130]'>
                <div className='text-4xl font-marcellus'>
                    Meet the Secretariat
                </div>
            </div>
            <div className='w-full h-full font-montserrat text-[#09302C] px-40'>
                <div className='px-40 py-32 grid grid-cols-3 gap-x-4 gap-y-8'>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Secretary-General
                    </div>
                    <div className="col-span-1 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <div className='p-8 pb-4 text-2xl text-[#09302C] bg-[#F7FAFA] font-marcellus'>
                            Yasmin C. Khan
                        </div>
                        <div className='p-8 pt-4 text-sm text-[#09302C] bg-[#F7FAFA]'>
                            Yasmin C. Khan is a ...
                        </div>
                    </div>

                    <div className="col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#09302C]/20 m-2 mb-4" />
                    </div>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Deputy Secretary-General
                    </div>
                    <div className="col-span-1 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <div className='p-8 pb-4 text-2xl text-[#09302C] bg-[#F7FAFA] font-marcellus'>
                            Ayah Elzibak
                        </div>
                        <div className='p-8 pt-4 text-sm text-[#09302C] bg-[#F7FAFA]'>
                            Ayah Elzibak is a ...
                        </div>
                    </div>

                    <div className="col-span-3">
                        <hr className="border-2 border-[#16796F]/20 dark:border-[#09302C]/20 m-2 mb-4" />
                    </div>

                    <div className='col-span-3 px-2 text-2xl uppercase font-marcellus'>
                        Chief Technology Officer
                    </div>
                    <div className="col-span-1 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <Image src={placeholder1} />
                    </div>
                    <div className="col-span-2 p-1 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                        <div className='p-8 pb-4 text-2xl text-[#09302C] bg-[#F7FAFA] font-marcellus'>
                            Rishik Sarkar
                        </div>
                        <div className='p-8 pt-4 text-sm text-[#09302C] bg-[#F7FAFA]'>
                            Rishik Sarkar is a ...
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Secretariat