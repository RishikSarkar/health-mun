import React from 'react'

const FAQ = () => {
    return (
        <div id='faq' className='font-marcellus w-full h-auto pb-2 text-center bg-[#CADEDF]'>
            <div className='w-full h-[200px] mx-auto flex justify-center items-center bg-[#09302C] text-[#F7FAFA]'>
                <div className='p-8 text-6xl uppercase flex select-none'>
                    FAQ
                </div>
            </div>
            <div className='p-12 my-12 mx-16 grid grid-cols-3 gap-8 text-left selection:text-[#F7FAFA] selection:bg-[#09302C]'>

                <div className="col-span-1 w-full p-8 text-2xl bg-white/30 uppercase border-b-2 border-black">
                    Where will the conference be held?
                </div>
                <div className="col-span-2 w-full p-8 text-xl bg-white/20 border-b-2 border-black">
                    The conference is located in ...
                </div>

                <div className="col-span-1 w-full p-8 text-2xl bg-white/30 uppercase border-b-2 border-black">
                    How long is the conference?
                </div>
                <div className="col-span-2 w-full p-8 text-xl bg-white/20 border-b-2 border-black">
                    The conference will go on for ...
                </div>

                <div className="col-span-1 w-full p-8 text-2xl bg-white/30 uppercase border-b-2 border-black">
                    Is there an attendance fee?
                </div>
                <div className="col-span-2 w-full p-8 text-xl bg-white/20 border-b-2 border-black">
                    The attendance fee is ...
                </div>

                <div className="col-span-1 w-full p-8 text-2xl bg-white/30 uppercase border-b-2 border-black">
                    Where can delegates register?
                </div>
                <div className="col-span-2 w-full p-8 text-xl bg-white/20 border-b-2 border-black">
                    Delegates can register at ...
                </div>

                <div className="col-span-1 w-full p-8 text-2xl bg-white/30 uppercase border-b-2 border-black">
                    Who can I contact for questions/concerns?
                </div>
                <div className="col-span-2 w-full p-8 text-xl bg-white/20 border-b-2 border-black">
                    You can contact ...
                </div>

            </div>
        </div>
    )
}

export default FAQ