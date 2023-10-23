import React from 'react';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoEnter } from 'react-icons/io5';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { PiGavelFill } from 'react-icons/pi';

const FAQ = () => {
    return (
        <div id='faq' className='font-marcellus w-full h-auto pb-2 text-center bg-[#CADEDF] dark:bg-[#1a2726]'>
            <div className='w-full h-[200px] mx-auto flex justify-center items-center bg-[#16796F] dark:bg-[#041312] text-[#F7FAFA]'>
                <div className='p-8 text-6xl uppercase flex select-none'>
                    FAQ
                </div>
            </div>
            <div className='px-16 py-8 mt-12 mx-32 grid grid-cols-3 gap-x-8 text-[#09302C] selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>

                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <MdLocationOn size={100} />
                    </div>
                </div>
                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <FaRegCalendarAlt size={100} />
                    </div>
                </div>
                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <IoEnter size={100} />
                    </div>
                </div>

                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Where?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference will take place at ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        When?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference is from ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Registration?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        You can register at ...
                    </h5>
                </div>

            </div>

            <div className='px-16 py-8 mx-32 grid grid-cols-3 gap-x-8 text-[#09302C] selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>

                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <BsFillPersonCheckFill size={100} />
                    </div>
                </div>
                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <FaMoneyCheckAlt size={100} />
                    </div>
                </div>
                <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <div className='p-4 flex justify-center items-center'>
                        <PiGavelFill size={100} />
                    </div>
                </div>

                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Eligibility
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        You are eligible if ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Fees
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference costs ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#F7FAFA]/60 dark:bg-[#041312] dark:text-[#F7FAFA] border-2 border-t-0 border-[#09302C] dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Awards
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference awards ...
                    </h5>
                </div>

            </div>

            <div className='text-xl font-montserrat p-4 mt-4 mb-12 uppercase flex select-none justify-center items-center'>
                <div className='p-6 bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] hover:bg-[#16796F]/70 dark:hover:bg-[#cadede]/60 cursor-pointer ease-in duration-100'>
                    <Link href='/#contact'>
                        Questions?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FAQ