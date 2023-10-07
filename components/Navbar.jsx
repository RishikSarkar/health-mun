import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/placeholder-icon.png'

const Navbar = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            }
            else {
                setShadow(false);
            }
        };

        window.addEventListener('scroll', handleShadow);

        return () => {
            window.removeEventListener('scroll', handleShadow);
        };

    }, []);

    return (
        <div id='navbar' className={shadow ? 'font-marcellus text-[#F7FAFA] fixed w-full bg-[#16796F] h-36 z-[100] select-none transition-all duration-200' :
            'font-marcellus text-[#F7FAFA] fixed w-full h-36 z-[100] select-none transition-all duration-200'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div className='ml-8 md:ml-0 flex items-center'>
                    <Image src={Logo} alt="/" width='100' height='100' />
                </div>
                <div>
                    <ul className='font-regular hidden md:flex text-sm'>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 duration-100'>About</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 duration-100'>Area Guide</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 duration-100'>Committees</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 duration-100'>Schedule</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 duration-100'>Register</li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar