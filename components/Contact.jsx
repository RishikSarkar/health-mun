import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='font-marcellus w-full h-auto flex flex-col justify-center items-center text-center bg-[#16796F] dark:bg-[#09302C] text-[#F7FAFA] select-none'>
            <div className='pt-8 mt-16 text-3xl uppercase flex'>
                Contact Us
            </div>
            <div className='w-[50%] h-auto p-4 mb-10'>

                <form action='' method='POST' encType='multipart/form-data'>
                    <div className='grid grid-cols-2 gap-4 py-2'>

                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>First Name</label>
                            <input className='text-black dark:text-white bg-white dark:bg-[#041312] border-2 py-1 px-2 flex' name='Name' type="text" style={{ outline: 'none' }} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Last Name</label>
                            <input className='text-black dark:text-white bg-white dark:bg-[#041312] border-2 py-1 px-2 flex' name='Name' type="text" style={{ outline: 'none' }} />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Email Address *</label>
                        <input className='text-black dark:text-white bg-white dark:bg-[#041312] border-2 py-1 px-2 flex' name='Email' type="email" style={{ outline: 'none' }} required />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message *</label>
                        <textarea className='text-black dark:text-white bg-white dark:bg-[#041312] border-2 py-1 px-2' name='Message' rows='3' style={{ resize: 'none', outline: 'none' }} required></textarea>
                    </div>

                    <button className='text-md py-2 w-[50%] px-4 mt-6 bg-white/10 dark:bg-black/40 hover:bg-white/30 dark:hover:bg-black/20 ease-in duration-100'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Contact