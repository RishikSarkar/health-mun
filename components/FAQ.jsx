import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoEnter } from 'react-icons/io5';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { PiGavelFill } from 'react-icons/pi';

import WhereGIF from '../public/assets/faq/gif/where.gif';
import WhereStatic from '../public/assets/faq/static/where.png';

import WhenGIF from '../public/assets/faq/gif/when.gif';
import WhenStatic from '../public/assets/faq/static/when.png';

import RegGIF from '../public/assets/faq/gif/registration.gif';
import RegStatic from '../public/assets/faq/static/registration.png';

import EligGIF from '../public/assets/faq/gif/eligibility.gif';
import EligStatic from '../public/assets/faq/static/eligibility.png';

import FeesGIF from '../public/assets/faq/gif/fees.gif';
import FeesStatic from '../public/assets/faq/static/fees.png';

import AwardsGIF from '../public/assets/faq/gif/awards.gif';
import AwardsStatic from '../public/assets/faq/static/awards.png';

const FAQ = () => {
    const [whereH, setWhereH] = useState(false);
    const [whenH, setWhenH] = useState(false);
    const [regH, setRegH] = useState(false);
    const [eligH, setEligH] = useState(false);
    const [feesH, setFeesH] = useState(false);
    const [awardsH, setAwardsH] = useState(false);

    return (
        <div id='faq' className='font-marcellus w-full h-auto pb-2 text-center bg-[#CADEDF] dark:bg-[#1a2726]'>
            <div className='w-full h-[200px] mx-auto flex justify-center items-center bg-[#16796F] dark:bg-[#041312] text-[#F7FAFA]'>
                <div className='p-8 text-6xl uppercase flex select-none'>
                    FAQ
                </div>
            </div>

            <div className='px-16 py-8 mt-12 mx-32 grid grid-cols-3 gap-x-8 text-[#09302C] selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>
                
                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setWhereH(true)} onMouseLeave={() => setWhereH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={whereH ? WhereGIF : WhereStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setWhenH(true)} onMouseLeave={() => setWhenH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={whenH ? WhenGIF : WhenStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setRegH(true)} onMouseLeave={() => setRegH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={regH ? RegGIF : RegStatic} alt="/" width='220' height='220' />
                    </div>
                </div>

                {/* <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
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
                </div> */}

                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Where?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference will take place at ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        When?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference is from ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Registration?
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        You can register at ...
                    </h5>
                </div>

            </div>

            <div className='px-16 py-8 mx-32 grid grid-cols-3 gap-x-8 text-[#09302C] selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>

                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setEligH(true)} onMouseLeave={() => setEligH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={eligH ? EligGIF : EligStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setFeesH(true)} onMouseLeave={() => setFeesH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={feesH ? FeesGIF : FeesStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-white border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setAwardsH(true)} onMouseLeave={() => setAwardsH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={awardsH ? AwardsGIF : AwardsStatic} alt="/" width='220' height='220' />
                    </div>
                </div>

                {/* <div className="col-span-1 p-8 text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312] border-2 border-b-0 border-[#09302C] dark:border-[#F7FAFA]">
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
                </div> */}

                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Eligibility
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        You are eligible if ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Fees
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference costs ...
                    </h5>
                </div>
                <div className="col-span-1 p-8 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] border-4 border-t-0 border-white dark:border-[#F7FAFA]">
                    <h2 className='p-4'>
                        Awards
                    </h2>
                    <h5 className='p-4 font-montserrat'>
                        The conference awards ...
                    </h5>
                </div>

            </div>

            <div className='text-xl font-montserrat p-4 mt-4 mb-12 uppercase flex select-none justify-center items-center'>
                <div className='p-6 bg-[#16796F] text-white dark:bg-[#041312] dark:text-[#F7FAFA] hover:bg-[#16796F]/60 dark:hover:bg-[#041312]/20 border-4 border-white dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                    <Link href='/#contact'>
                        Questions?
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default FAQ