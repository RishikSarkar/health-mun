import React, { useState } from 'react';
import Image from 'next/image';
import LogoW from '../public/assets/logos/logo-white.png'
import LogoB from '../public/assets/logos/logo-black.png'

const Acronym = () => {
    const [wordMap, setWordMap] = useState({
        H: 'Heterogeneity',
        e: 'Empathy',
        a: 'Analysis',
        l: 'Leadership',
        t: 'Teamwork',
        h: 'Harmony',
    });

    const [acronymDetails, setAcronymDetails] = useState({
        H: 'At HealthMUN, we firmly acknowledge the significance of heterogeneity in genetics and beyond. From elected staff members to selected committee topics, cognitive and sociological diversity establishes representation for all. At our yearly meritocratic conference, we welcome and encourage delegates from all backgrounds, interests, and experience levels.',
        e: 'HealthMUN strongly believes empathy to be the key to successful diplomatic relations. Making compromises amidst conflict is a coveted skill in the real world and is highly rewarded here at HealthMUN.',
        a: 'Like any traditional Model United Nations conference, delegates are assigned a random topic and character. They will then be tasked to solve issues presented in the committee via comprehension of the given committee topic, analysis of their character’s portfolio, and reasoning skills when devising solutions. HealthMUN’s unique educational simulation cultivates sharp analysis skills in competing delegates.',
        l: 'Confidence, effective communication, and more are all illuminated here at HealthMUN. While delegates present their researched topics and ideas, debate and devise solutions, and vocalize their thoughts and opinions with like-minded individuals, they strengthen their leadership skills.',
        t: 'Great leaders are great team players first. Working through group conflict regardless of differences in opinion or identity is the heart of HealthMUN’s conferences. Our delegates can work amongst various individuals through solution writing, brainstorming, researching, and more. At HealthMUN, we teach our competitors that successful teamwork is a fundamental prerequisite to leadership.',
        h: 'Successful Diplomacy at HealthMUN requires tranquility and harmony amongst all individuals of every background, experience, opinion, and beyond. No matter the differences, we should always be able to draw solutions from the most challenging situations.',
    })

    const [currWord, setCurrWord] = useState('Heterogeneity')
    const [currLetter, setCurrLetter] = useState('H')
    const [currDetails, setCurrDetails] = useState('At HealthMUN, we firmly acknowledge the significance of heterogeneity in genetics and beyond. From elected staff members to selected committee topics, cognitive and sociological diversity establishes representation for all. At our yearly meritocratic conference, we welcome and encourage delegates from all backgrounds, interests, and experience levels.')

    const handleClick = (letter) => {
        setCurrWord(wordMap[letter]);
        setCurrLetter(letter)
        setCurrDetails(acronymDetails[letter])
    };

    return (
        <div id='acronym' className='font-marcellus w-full h-screen text-center bg-[#F7FAFA] dark:bg-[#253130] selection:text-[#F7FAFA] dark:selection:text-[#09302C] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>
            <div className='max-w-[1440px] w-full h-full mx-auto flex flex-col justify-center items-center relative'>
                {/* <div className='p-8 text-2xl uppercase flex'>
                    What we stand for
                </div> */}
                <div className='absolute z-0 center-0 w-[850px] h-[850px] z-0'>
                    <div className='opacity-10 block dark:hidden'>
                        <Image
                            src={LogoB}
                            fill={true}
                            quality={100}
                        />
                    </div>
                    <div className='opacity-10 hidden dark:block'>
                        <Image
                            src={LogoW}
                            fill={true}
                            quality={100}
                        />
                    </div>
                </div>
                
                <div className='z-10'>
                    <div className='flex justify-center items-center select-none'>
                        {Array.from('Health').map((letter, index) => (
                            <div
                                key={index}
                                className={`${letter === currLetter ? 'bg-[#CADEDF] dark:bg-[#253130]' : 'bg-white dark:bg-[#041312]'} text-3xl text-center w-[60px] uppercase text-black dark:text-white font-bold py-2 px-4 cursor-pointer border-2 border-[#09302C] dark:border-[#F7FAFA]`}
                                onClick={() => handleClick(letter)}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                    <div className='h-[60px] w-[600px] flex mt-8 justify-center items-center text-2xl bg-[#CADEDF] dark:bg-[#253130] text-black dark:text-white border-2 border-[#09302C] dark:border-[#F7FAFA]'>
                        {currWord}
                    </div>
                    <div className='font-montserrat h-[300px] w-[600px] p-6 mt-4 flex justify-center items-center text-md bg-white dark:bg-[#041312] text-black dark:text-white border-2 border-[#09302C] dark:border-[#F7FAFA]'>
                        {currDetails}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acronym