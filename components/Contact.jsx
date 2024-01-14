import React from 'react'

const Contact = () => {
    const handleFormSubmission = (event) => {
        event.preventDefault();

        const userAnswer = window.prompt("What does MUN stand for?");

        const regex = /^m[oaeiu]*d[eaiou]*l\s*u[nioaue]*t[eaiou]*d\s*n[aioeu]*t[eaiou]*[eaiou]*[eaiou]*n[eaiou]*s$/i;

        if (userAnswer && regex.test(userAnswer.trim())) {
            event.target.submit();
        } else {
            alert('MUN stands for Model United Nations. The more you know!');
        }
    }

    return (
        <div className='font-marcellus w-full h-screen flex flex-col justify-center items-center text-center bg-[#16796F] dark:bg-[#041312] text-[#F7FAFA] selection:text-[#F7FAFA] dark:selection:text-[#041312] selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
            <div id='contact' className='pt-8 mt-24 text-3xl uppercase flex select-none'>
                Contact Us
            </div>
            <div className='w-[50%] h-auto py-4 md:p-4 mb-16 pb-8 font-montserrat'>

                <form action='https://getform.io/f/f3e777d7-a5fd-42fd-8561-682d83f8c51d' method='POST' encType='multipart/form-data' onSubmit={handleFormSubmission}>
                    <div className='grid grid-cols-2 gap-4 py-2'>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 select-none'>First Name</label>
                            <input className='xs:w-[25vw] text-black dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 py-1 px-2 flex' name='First_Name' type="text" style={{ outline: 'none' }} />
                        </div>

                        <div className='flex flex-col xs:items-center'>
                            <label className='uppercase text-sm py-2 select-none'>Last Name</label>
                            <input className='xs:w-[25vw] text-black dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 py-1 px-2 flex' name='Last_Name' type="text" style={{ outline: 'none' }} />
                        </div>
                    </div>

                    <div className='flex flex-col xs:items-center'>
                        <label className='uppercase text-sm py-2 select-none'>Email Address *</label>
                        <input className='xs:w-[52vw] text-black dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 py-1 px-2 flex' name='Email' type="email" style={{ outline: 'none' }} required />
                    </div>

                    <div className='flex flex-col py-2 xs:items-center'>
                        <label className='uppercase text-sm py-2 select-none'>Message *</label>
                        <textarea className='xs:w-[52vw] text-black dark:text-[#F7FAFA] bg-[#F7FAFA] dark:bg-black/40 border-2 py-1 px-2' name='Message' type="text" rows='3' style={{ resize: 'none', outline: 'none' }} required></textarea>
                    </div>

                    <button className='text-sm py-2 w-[50%] px-4 mt-6 bg-[#F7FAFA]/10 dark:bg-black/40 border-2 border-[#16796F] dark:border-white hover:bg-[#F7FAFA]/30 dark:hover:bg-black/20 ease-in duration-100 select-none uppercase'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Contact