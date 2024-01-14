import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useManual } from '../../contexts/ManualContext';

const Register = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    const handleFormSubmission = (event) => {
        // TODO
    }

    return (
        <>
            <Head>
                <title>Registration Portal — HealthMUN</title>
            </Head>
            <div id='registerportal' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        R<span className='text-2xl md:text-4xl'>egistration</span> F<span className='text-2xl md:text-4xl'>orm</span> 2024
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center font-montserrat px-20 md:px-32 py-20'>

                    <form className='w-[50vw]' action='' method='POST' encType='multipart/form-data' onSubmit={handleFormSubmission}>
                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 select-none'>School Name *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='School_Name' type="text" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>School Address *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='School_Address' type="text" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Head Delegate Name *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Head_Delegate_Name' type="text" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Head Delegate Cell Phone *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Head_Delegate_Cell_Phone' type="tel" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Primary Email *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Primary_Email' type="email" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Secondary Email</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Secondary_Email' type="email" style={{ outline: 'none' }} />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Total Delegates *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Total_Delegates' type="number" min="1" step="1" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Additional Comments</label>
                            <textarea className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2' name='Message' type="text" rows='1' style={{ resize: 'none', outline: 'none' }} ></textarea>
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Current Date *</label>
                            <input className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2 flex' name='Current_Date' type="date" style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 mt-4 select-none'>Intended Payment Method *</label>
                            <select className='text-black text-sm dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 border-[#16796F] dark:border-white py-2 px-2' name='Payment_Method' style={{ outline: 'none' }} required>
                                <option value='check'>Check</option>
                                <option value='credit'>Credit/Debit Card</option>
                            </select>
                        </div>

                        <button className='font-montserrat py-4 my-8 w-full text-lg uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 cursor-pointer ease-in duration-100'>Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register