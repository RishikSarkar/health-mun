import React, { useState, useEffect } from 'react';
import { useManual } from '../../contexts/ManualContext';

const Welcome = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <div id='welcome' className='pt-28 w-full h-full flex items-center justify-center bg-[#F7FAFA] dark:bg-[#253130] selection:text-[#F7FAFA] dark:selection:text-[#09302C] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>
            <div className='w-full h-full py-32 px-48 font-montserrat'>
                <div className='text-xl font-bold font-marcellus'>
                    A Letter from the Secretary-General:
                </div>
                <div className='text-md pt-8'>
                    Dear Delegates, Faculty Advisors, & Staff,
                </div>
                <div className='text-md pt-6'>
                    Model United Nations has traditionally been a platform that underscores the essence of diplomacy,
                    challenges political boundaries, and acts as a bridge to mend global differences. However, it has
                    come to our attention that much of the educational culture surrounding Model UN has disproportionately
                    emphasized specific liberal political topics. We must remember that STEM is not just a field of academic
                    pursuit but stands tall as a cornerstone for diplomacy and international relations.
                </div>
                <div className='text-md pt-6'>
                    From the inception of HealthMUN, our foremost intention has been to illuminate the intricate relationship
                    between global health and politics. We believe that irrespective of one's academic trajectory, individual
                    interests, or prior experiences, each of you holds the potential to shape the world.
                </div>
                <div className='text-md pt-6'>
                    With great anticipation and pride, the Secretariat and I usher you into a transformative era for the Model 
                    UN community worldwide. Join us in making this not just an event but a movement that redefines our 
                    collective approach to global challenges.
                </div>
                <div className='text-md pt-6'>
                    Welcome to HealthMUN!
                </div>
                <div className='text-md pt-6'>
                    Cheers,
                </div>
                <div className='text-md pt-6 text-right'>
                    Yasmin C. Khan
                </div>
                <div className='text-md pt-6 text-right'>
                    Secretary-General
                </div>
                <div className='text-md pt-6 text-right'>
                    Health Model United Nations 2024
                </div>
                <div className='text-md pt-6 text-right'>
                    secretarygeneral@healthmun.org
                </div>
            </div>
        </div>
    )
}

export default Welcome