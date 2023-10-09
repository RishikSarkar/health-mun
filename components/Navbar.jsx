import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/logos/logo-white.png'

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

    const [dropDownActive, setDropDownActive] = useState(false);

    const handleDropDownToggle = () => {
        setDropDownActive(!dropDownActive);
    };

    return (
        <div id='navbar' className={shadow ? 'font-marcellus text-[#F7FAFA] fixed w-full bg-[#16796F] h-36 z-[100] select-none transition-all duration-200' :
            'font-marcellus text-[#F7FAFA] fixed w-full h-36 z-[100] select-none transition-all duration-200'}>
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
                <div className='ml-8 md:ml-0 flex items-center'>
                    <Image src={Logo} alt="/" width='100' height='100' />
                </div>
                <div>
                    <ul className='font-regular hidden md:flex text-sm'>

                        <li className='uppercase px-6 p-3 relative ease-in hover:bg-white/30 duration-100' onMouseEnter={handleDropDownToggle} onMouseLeave={handleDropDownToggle}>
                            About
                            {dropDownActive && (
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-5 p-4 bg-[#09302C]'>
                                    <div className='flex-col items-center justify-center text-center w-50'>
                                        <Link href='/'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 duration-100'>Welcome</div>
                                        </Link>

                                        <Link href='/'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 duration-100'>Secretariat</div>
                                        </Link>

                                        <Link href='/'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 duration-100'>Info</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

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