import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useManual } from '../../contexts/ManualContext';

const AreaGuide = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <>
            <Head>
                <title>Area Guide — HealthMUN</title>
            </Head>
            <div id='areaguide' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        A<span className='text-2xl md:text-4xl'>rea</span> G<span className='text-2xl md:text-4xl'>uide</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AreaGuide