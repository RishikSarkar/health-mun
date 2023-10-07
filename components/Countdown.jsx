import React, { useEffect, useState } from 'react'

const Countdown = () => {

    const targetDate = new Date('2024-06-11T12:00:00Z');
    const currDate = new Date();

    const timeDiff = targetDate - currDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const [timeLeft, setTimeLeft] = useState({
        days,
        hours,
        minutes,
        seconds,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const offset = now.getTimezoneOffset() * 60 * 1000;

            const newTimeDiff = targetDate - now + offset;

            if (newTimeDiff <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
            else {
                const newDays = Math.floor(newTimeDiff / (1000 * 60 * 60 * 24));
                const newHours = Math.floor((newTimeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const newMinutes = Math.floor((newTimeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const newSeconds = Math.floor((newTimeDiff % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds,
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div id='countdown' className='font-marcellus w-full h-full text-center bg-[#CADEDF] select-none'>
            <div className='max-w-[1440px] w-full h-[300px] mx-auto flex flex-col justify-center items-center'>
                <div className='p-3 text-xl uppercase flex'>
                    Conference Starts in
                </div>

                <div className='mt-4 p-3 text-3xl flex flex-col'>
                    <div className="grid grid-cols-4 gap-4">

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

                        <div className="col-span-1  w-12 text-2xl">
                            D
                        </div>
                        <div className="col-span-1  w-12 text-2xl">
                            H
                        </div>
                        <div className="col-span-1  w-12 text-2xl">
                            M
                        </div>
                        <div className="col-span-1  w-12 text-2xl">
                            S
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown