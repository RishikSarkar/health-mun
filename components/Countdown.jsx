import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const targetDate = new Date('2024-04-02T01:00:00Z');

    const [timeLeft, setTimeLeft] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const timeDiff = targetDate - now;

            if (timeDiff <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        };

        updateCountdown();  // Call immediately to set the initial value.
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    // If the time hasn't been initialized yet, you can choose to render nothing.
    if (timeLeft.days === null) {
        return null;
    }

    return (
        <div id='countdown' className='font-marcellus w-full h-full text-center text-[#F7FAFA] bg-[#16796F] dark:bg-[#041312] select-none overflow-x-hidden'>
            <div className='w-full h-[200px] md:h-[300px] mx-auto flex flex-col justify-center items-center'>
                <div className='p-3 text-lg md:text-2xl uppercase flex'>
                    {/* Conference Starts in */}
                    {/* General Interest Meeting in */}
                    {/* Join Us for Workshop #3 in  */}
                    {/* Thanks for joining our General Interest Meeting! */}
                    More Updates Coming Soon!
                </div>
                {/* <div className='p-3 text-lg md:text-xl uppercase flex'>
                    More Updates Coming Soon!
                </div> */}

                {/* <div className='mt-2 p-3 text-xl md:text-3xl flex flex-col'>
                    <div id='timer' className="grid grid-cols-4 gap-4">
                        <div className="col-span-1 w-12">
                            {`${timeLeft.days}`}
                        </div>
                        <div className="col-span-1 w-12">
                            {`${timeLeft.hours}`}
                        </div>
                        <div className="col-span-1 w-12">
                            {`${timeLeft.minutes}`}
                        </div>
                        <div className="col-span-1 w-12">
                            {`${timeLeft.seconds}`}
                        </div>

                        <div className="col-span-1 w-12 text-xl md:text-2xl">
                            D
                        </div>
                        <div className="col-span-1 w-12 text-xl md:text-2xl">
                            H
                        </div>
                        <div className="col-span-1 w-12 text-xl md:text-2xl">
                            M
                        </div>
                        <div className="col-span-1 w-12 text-xl md:text-2xl">
                            S
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Countdown;