import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useManual } from '../../contexts/ManualContext';
import YasminSigBlack from '../../public/assets/signatures/yasmin_signature_black.png'
import YasminSigWhite from '../../public/assets/signatures/yasmin_signature_white.png'
import AyahSigBlack from '../../public/assets/signatures/ayah_signature_black.png'
import AyahSigWhite from '../../public/assets/signatures/ayah_signature_white.png'

const Welcome = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    // flex items-center justify-center
    return (
        <>
            <Head>
                <title>Welcome — HealthMUN</title>
            </Head>
            <div id='welcome' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        W<span className='text-2xl md:text-4xl'>elcome</span>
                    </div>
                </div>
                <div className='w-full h-full py-16 md:py-32 px-16 md:px-36 font-marcellus md:grid md:grid-cols-2 md:divide-x-2 md:dark:divide-white/30 md:divide-black/20 md:text-justify'>
                    <div className='md:col-span-1 md:pr-16'>
                        <div className='text-lg md:text-2xl font-bold'>
                            A Letter from the Secretary-General:
                        </div>
                        <div className='text-sm md:text-base pt-8'>
                            Dear Delegates, Faculty Advisors, & Staff,
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            Model United Nations has traditionally been an extracurricular platform that highlights the essence of
                            diplomacy, challenges political boundaries, and mends global differences. However, after actively engaging
                            in Model UN for over a decade, it has come to my attention that much of the educational culture surrounding
                            it has disproportionately underscored liberal and political topics. There has been a clear imbalance in
                            academic focus. Crucial issues pertinent to our ever-changing world, such as health, technology, and the
                            sciences, have unfortunately been ignored or rarely discussed. We must remember that STEM is not just a
                            field of academic pursuit but also a cornerstone for diplomacy and international affairs.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            From the inception of HealthMUN, my primary goal has been to emphasize the intricate relationship between
                            global health and politics within the Model UN community. I firmly believe that irrespective of one’s
                            academic trajectory, individual interests, or prior experiences, Model UN fosters invaluable skills for
                            all students as they prepare to navigate the real world. At HealthMUN, you will be addressing the most
                            difficult challenges in today’s healthcare.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            With great anticipation and pride, the Secretariat and I usher you into a transformative era for the Model
                            UN community worldwide. Join us in making this not just an event but an initiative that redefines our collective
                            approach to global challenges.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            Welcome to HealthMUN!
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            Cheers,
                        </div>
                        <div className='flex md:justify-start -mx-10'>
                            <div className="block dark:hidden">
                                <Image src={YasminSigBlack} width='300' height='300' />
                            </div>
                            <div className="dark:block hidden">
                                <Image src={YasminSigWhite} width='300' height='300' />
                            </div>
                        </div>
                        <div className='text-sm md:text-base text-left'>
                            Yasmin C. Khan
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            Secretary-General
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            Health Model United Nations 2024
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            secgen.healthmun@gmail.com
                        </div>
                    </div>

                    <hr className="block md:hidden border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 my-16" />

                    <div className='md:col-span-1 md:pl-16'>
                        <div className='text-lg md:text-2xl font-bold'>
                            A Letter from the Deputy-General:
                        </div>
                        <div className='text-sm md:text-base pt-8'>
                            Greetings,
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            I am delighted to welcome you all to HealthMUN, where we embark on a journey of leadership and global
                            engagement. Here, you will learn the fundamentals of Model United Nations and have the extraordinary
                            opportunity to apply them in real-world scenarios. Through an array of workshops, meetings, and conferences,
                            we strive to provide an abundance of avenues for personal growth and development.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            At the heart of HealthMUN lies a commitment to bridging global health disparities with the art of
                            debate. Part of our mission is to establish a platform where every voice is not just acknowledged
                            but amplified, particularly when it comes to addressing critical global health issues. We firmly
                            believe that debate should never be daunting; rather, it should catalyze positive change. In a
                            world where global health conflicts persist, your voice becomes a powerful tool for advocacy and
                            development. Your opinions and your knowledge—are the driving forces behind our collective mission.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            As you embark on this transformative journey with us, I extend my heartfelt wishes for your success
                            and a wholehearted welcome to the vibrant community of HealthMUN. Let us amplify our voices together
                            and make a significant impact on health issues around the world.
                        </div>
                        <div className='text-sm md:text-base pt-6'>
                            Welcome to HealthMUN!
                        </div>
                        <div className='text-sm md:text-base pt-6 md:pt-24'>
                            Sincerely,
                        </div>
                        <div className='flex justify-start -mx-10 my-6'>
                            <div className="block dark:hidden">
                                <Image src={AyahSigBlack} width='300' height='300' />
                            </div>
                            <div className="dark:block hidden">
                                <Image src={AyahSigWhite} width='300' height='300' />
                            </div>
                        </div>
                        <div className='text-sm md:text-base text-left'>
                            Ayah Elzibak
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            Deputy-General
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            Health Model United Nations 2024
                        </div>
                        <div className='text-sm md:text-base pt-6 text-left'>
                            depgen.healthmun@gmail.com
                        </div>
                    </div>
                </div>

                {/* <div className='w-full h-full py-16 md:py-32 px-16 md:px-48 font-marcellus'>
                    <div className='text-lg md:text-2xl font-bold'>
                        A Letter from the Secretary-General:
                    </div>
                    <div className='text-sm md:text-base pt-8'>
                        Dear Delegates, Faculty Advisors, & Staff,
                    </div>
                    <div className='text-sm md:text-base pt-6'>
                        Model United Nations has traditionally been an extracurricular platform that highlights the essence of
                        diplomacy, challenges political boundaries, and mends global differences. However, after actively engaging
                        in Model UN for over a decade, it has come to my attention that much of the educational culture surrounding
                        it has disproportionately underscored liberal and political topics. There has been a clear imbalance in
                        academic focus. Crucial issues pertinent to our ever-changing world, such as health, technology, and the
                        sciences, have unfortunately been ignored or rarely discussed. We must remember that STEM is not just a
                        field of academic pursuit but also a cornerstone for diplomacy and international affairs.
                    </div>
                    <div className='text-sm md:text-base pt-6'>
                        From the inception of HealthMUN, my primary goal has been to emphasize the intricate relationship between
                        global health and politics within the Model UN community. I firmly believe that irrespective of one’s
                        academic trajectory, individual interests, or prior experiences, Model UN fosters invaluable skills for
                        all students as they prepare to navigate the real world. At HealthMUN, you will be addressing the most
                        difficult challenges in today’s healthcare.
                    </div>
                    <div className='text-sm md:text-base pt-6'>
                        With great anticipation and pride, the Secretariat and I usher you into a transformative era for the Model
                        UN community worldwide. Join us in making this not just an event but an initiative that redefines our collective
                        approach to global challenges.
                    </div>
                    <div className='text-sm md:text-base pt-6'>
                        Welcome to HealthMUN!
                    </div>
                    <div className='text-sm md:text-base pt-6'>
                        Cheers,
                    </div>
                    <div className='flex justify-end -mx-10'>
                        <div className="block dark:hidden">
                            <Image src={YasminSigBlack} width='300' height='300' />
                        </div>
                        <div className="dark:block hidden">
                            <Image src={YasminSigWhite} width='300' height='300' />
                        </div>
                    </div>
                    <div className='text-sm md:text-base text-right'>
                        Yasmin C. Khan
                    </div>
                    <div className='text-sm md:text-base pt-6 text-right'>
                        Secretary-General
                    </div>
                    <div className='text-sm md:text-base pt-6 text-right'>
                        Health Model United Nations 2024
                    </div>
                    <div className='text-sm md:text-base pt-6 text-right'>
                        secretarygeneral@healthmun.org
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Welcome