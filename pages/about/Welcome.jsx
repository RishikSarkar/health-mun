import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useManual } from '../../contexts/ManualContext';
import SigBlack from '../../public/assets/signatures/signature_black.png'
import SigWhite from '../../public/assets/signatures/signature_white.png'

const Welcome = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    // flex items-center justify-center
    return (
        <div id='welcome' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-[#09302C] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>
            <div className='w-full h-full p-24 text-center bg-[#CADEDF] dark:bg-[#253130] dark:text-[#F7FAFA] border-b-4 border-[#16796F]/20 dark:border-[#F7FAFA]/20'>
                <div className='text-6xl font-marcellus'>
                    Welcome
                </div>
            </div>
            <div className='w-full h-full py-32 px-48 font-montserrat'>
                <div className='text-xl font-bold font-marcellus'>
                    A Letter from the Secretary-General:
                </div>
                <div className='text-md pt-8'>
                    Dear Delegates, Faculty Advisors, & Staff,
                </div>
                <div className='text-md pt-6'>
                    Model United Nations has traditionally been an extracurricular platform that highlights the essence of
                    diplomacy, challenges political boundaries, and mends global differences. However, after actively engaging
                    in Model UN for over a decade, it has come to my attention that much of the educational culture surrounding
                    it has disproportionately underscored liberal and political topics. There has been a clear imbalance in
                    academic focus. Crucial issues pertinent to our ever-changing world, such as health, technology, and the
                    sciences, have unfortunately been ignored or rarely discussed. We must remember that STEM is not just a
                    field of academic pursuit but also a cornerstone for diplomacy and international affairs.
                </div>
                <div className='text-md pt-6'>
                    From the inception of HealthMUN, my primary goal has been to emphasize the intricate relationship between
                    global health and politics within the Model UN community. I firmly believe that irrespective of one’s
                    academic trajectory, individual interests, or prior experiences, Model UN fosters invaluable skills for
                    all students as they prepare to navigate the real world. At HealthMUN, each and every one of you holds
                    the potential to shape the world.
                </div>
                <div className='text-md pt-6'>
                    With great anticipation and pride, the Secretariat and I usher you into a transformative era for the Model
                    UN community worldwide. Join us in making this not just an event but a movement that redefines our collective
                    approach to global challenges.
                </div>
                <div className='text-md pt-6'>
                    Welcome to HealthMUN!
                </div>
                <div className='text-md pt-6'>
                    Cheers,
                </div>
                <div className='flex justify-end -mx-10 -my-10'>
                    <div className="block dark:hidden">
                        <Image src={SigBlack} width='300' height='300' />
                    </div>
                    <div className="dark:block hidden">
                        <Image src={SigWhite} width='300' height='300' />
                    </div>
                </div>
                <div className='text-md text-right font-marcellus'>
                    Yasmin C. Khan
                </div>
                <div className='text-md pt-6 text-right font-marcellus'>
                    Secretary-General
                </div>
                <div className='text-md pt-6 text-right font-marcellus'>
                    Health Model United Nations 2024
                </div>
                <div className='text-md pt-6 text-right font-marcellus'>
                    secretarygeneral@healthmun.org
                </div>
            </div>
        </div>
    )
}

export default Welcome