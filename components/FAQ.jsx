import React, { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoEnter } from 'react-icons/io5';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { PiGavelFill } from 'react-icons/pi';

// import WhereGIF from '../public/assets/faq/gif/where.gif';
// import WhereStatic from '../public/assets/faq/static/where.png';

// import WhenGIF from '../public/assets/faq/gif/when.gif';
// import WhenStatic from '../public/assets/faq/static/when.png';

// import RegGIF from '../public/assets/faq/gif/registration.gif';
// import RegStatic from '../public/assets/faq/static/registration.png';

// import EligGIF from '../public/assets/faq/gif/eligibility.gif';
// import EligStatic from '../public/assets/faq/static/eligibility.png';

// import FeesGIF from '../public/assets/faq/gif/fees.gif';
// import FeesStatic from '../public/assets/faq/static/fees.png';

// import AwardsGIF from '../public/assets/faq/gif/awards.gif';
// import AwardsStatic from '../public/assets/faq/static/awards.png';

const FAQ = () => {
    // const [whereH, setWhereH] = useState(false);
    // const [whenH, setWhenH] = useState(false);
    // const [regH, setRegH] = useState(false);
    // const [eligH, setEligH] = useState(false);
    // const [feesH, setFeesH] = useState(false);
    // const [awardsH, setAwardsH] = useState(false);

    return (
        <div id='faq' className='font-marcellus w-full h-auto pb-2 text-center bg-gradient-to-b from-[#1EA497] to-[#16796F] dark:bg-gradient-to-b dark:from-[#1a2726] dark:to-[#041312] overflow-x-hidden'>
            <div className='w-full h-[150px] md:h-[200px] mx-auto flex justify-center items-center bg-[#16796F] dark:bg-[#041312] text-[#F7FAFA]'>
                <div className='p-8 text-5xl md:text-6xl uppercase flex select-none'>
                    FAQ
                </div>
            </div>

            <div className='px-8 md:px-16 py-8 mt-12 md:mx-32 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-12 md:gap-y-0 text-black selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>

                {/* <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setWhereH(true)} onMouseLeave={() => setWhereH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={whereH ? WhereGIF : WhereStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setWhenH(true)} onMouseLeave={() => setWhenH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={whenH ? WhenGIF : WhenStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setRegH(true)} onMouseLeave={() => setRegH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={regH ? RegGIF : RegStatic} alt="/" width='220' height='220' />
                    </div>
                </div> */}

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <MdLocationOn size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            Where?
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* The conference will take place at ... */}
                        </h5>
                    </div>
                </div>

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <FaRegCalendarAlt size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            When?
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* The conference is from ... */}
                        </h5>
                    </div>
                </div>

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <IoEnter size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            Registration?
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* You can register at ... */}
                        </h5>
                    </div>
                </div>
            </div>

            <div className='px-8 md:px-16 py-8 pt-4 md:pt-8 md:mt-12 md:mx-32 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-12 md:gap-y-0 text-black selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA]'>

                {/* <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setEligH(true)} onMouseLeave={() => setEligH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={eligH ? EligGIF : EligStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setFeesH(true)} onMouseLeave={() => setFeesH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={feesH ? FeesGIF : FeesStatic} alt="/" width='220' height='220' />
                    </div>
                </div>
                <div className="col-span-1 border-4 bg-[#F7FAFA] border-white dark:border-[#F7FAFA] transition-opacity duration-300" onMouseEnter={() => setAwardsH(true)} onMouseLeave={() => setAwardsH(false)} >
                    <div className='flex justify-center items-center'>
                        <Image src={awardsH ? AwardsGIF : AwardsStatic} alt="/" width='220' height='220' />
                    </div>
                </div> */}

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <BsFillPersonCheckFill size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            Eligibility
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* You are eligible if ... */}
                        </h5>
                    </div>
                </div>

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <FaMoneyCheckAlt size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            Fees
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* The conference costs ... */}
                        </h5>
                    </div>
                </div>

                <div className="col-span-1 border-4 border-white dark:border-[#F7FAFA]">
                    <div className="h-[22vh] md:h-[200px] p-8 flex justify-center items-center text-2xl bg-[#16796F] dark:bg-[#cadede] text-[#F7FAFA] dark:text-[#041312]">
                        <div className='p-4'>
                            <PiGavelFill size={100} />
                        </div>
                    </div>
                    <div className="h-auto md:h-[250px] p-8 bg-[#F7FAFA] text-black dark:bg-[#041312] dark:text-[#F7FAFA]">
                        <h2 className='p-4'>
                            Awards
                        </h2>
                        <h5 className='p-4 font-marcellus'>
                            {/* The conference awards ... */}
                        </h5>
                    </div>
                </div>
            </div>

            <div className='text-xl font-marcellus p-4 mt-4 mb-12 uppercase flex select-none justify-center items-center'>
                <div className='p-6 bg-[#16796F] text-[#F7FAFA] dark:bg-[#041312] dark:text-[#F7FAFA] hover:bg-[#16796F]/60 dark:hover:bg-[#041312]/20 border-4 border-white dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                    <Link href='/#contact'>
                        Questions?
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default FAQ