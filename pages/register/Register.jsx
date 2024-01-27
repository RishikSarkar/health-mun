import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useManual } from '../../contexts/ManualContext';

const Register = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <>
            <Head>
                <title>Register — HealthMUN</title>
            </Head>
            <div id='register' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        R<span className='text-2xl md:text-4xl'>egistration</span>
                    </div>
                </div>
                <div className='w-full h-full font-marcellus px-20 md:px-64'>
                    <div className='md:px-40 w-full pt-16 md:py-20'>

                        <div className='text-center px-2 text-lg'>
                            <p className='py-4'>HealthMUN will take place at [TBD] on [TBD]. The conference is open to [TBD]. Delegates may
                                attend with a delegation or independently.</p>
                            <p className='py-4'>The HealthMUN Registration Portal is currently undergoing maintenance. We encourage delegations
                                interested in attending HealthMUN 2024 to check back once the conference details have been finalized. For questions
                                please email <a href='mailto:communications.healthmun@gmail.com' className='text-[#16796F] dark:text-[#F7FAFA]/60'>communications.healthmun@gmail.com</a></p>
                        </div>

                        <div className='text-xl font-marcellus p-4 mt-4 mb-12 uppercase flex select-none justify-center items-center'>
                            <div className='font-montserrat px-12 py-4 text-lg uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 cursor-pointer ease-in duration-100'>
                                {/* <Link href='/register/Portal'> */}
                                <Link href='/register/Register'>
                                    {/* Register for HealthMUN */}
                                    Registration Closed
                                </Link>
                            </div>
                        </div>

                        <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 my-4 md:my-8 md:my-4" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register