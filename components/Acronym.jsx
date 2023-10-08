import React, { useState } from 'react';

const Acronym = () => {
    const [wordMap, setWordMap] = useState({
        H: 'Heterogeneity',
        e: 'Empathy',
        a: 'Analysis',
        l: 'Leadership',
        t: 'Teamwork',
        h: 'Harmony',
    });

    const [currWord, setCurrWord] = useState('Heterogeneity')

    const handleClick = (letter) => {
        setCurrWord(wordMap[letter]);
    };

    return (
        <div id='acronym' className='font-marcellus w-full h-screen text-center bg-[#F7FAFA] select-none'>
            <div className='max-w-[1440px] w-full h-full mx-auto flex flex-col justify-center items-center'>
                <div className='p-8 text-2xl uppercase flex'>
                    What we stand for
                </div>

                <div className='p-8'>
                    <div className='flex justify-center items-center p-2 pb-4'>
                        {Array.from('Health').map((letter, index) => (
                            <div
                                key={index}
                                className='bg-white text-3xl uppercase hover:bg-[#CADEDF] text-black font-bold py-2 px-4 cursor-pointer'
                                onClick={() => handleClick(letter)}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                    <div className='h-[60px] text-2xl p-2 pt-4 bg-white'>
                        {currWord}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acronym