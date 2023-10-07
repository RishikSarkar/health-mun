import React, { useEffect, useState } from 'react'

const Acronym = () => {
    const [wordMap, setWordMap] = useState({
        H: 'Heterogeneity',
        e: 'Empathy',
        a: 'Analysis',
        l: 'Leadership',
        t: 'Teamwork',
        h: 'Harmony',
    });

    const [currWord, setCurrWord] = useState('')

    const handleClick = (letter) => {
        setCurrWord(wordMap[letter]);
    };

    return (
        <div id='countdown' className='font-marcellus w-full h-screen text-center bg-[#F7FAFA]'>
            <div className='max-w-[1440px] w-full h-full mx-auto flex flex-col justify-center items-center'>
                <div className='p-8 text-2xl uppercase flex'>
                    What we stand for:
                </div>

                <div className='flex justify-center items-center p-8'>
                    {Array.from('Health').map((letter, index) => (
                        <div
                            key={index}
                            className='bg-white text-3xl uppercase hover:bg-gray-200 text-black font-bold py-2 px-4 rounded cursor-pointer'
                            onClick={() => handleClick(letter)}
                        >
                            {letter}
                        </div>
                    ))}

                    <div className='w-[400px] h-auto text-2xl'>
                        {currWord}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acronym