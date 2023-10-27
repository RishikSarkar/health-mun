import React, { useState, useEffect } from 'react'
import { useManual } from '../contexts/ManualContext'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import LogoL from '../public/assets/logos/logo-ww.png'
import LogoD from '../public/assets/logos/logo-ww.png'
import Switch from "react-switch";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { theme, setTheme } = useTheme();
    const { manual } = useManual();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (manual) {
            setVisible(true);
        } else {
            setVisible(window.scrollY >= 90);
        }

        const handleVisible = () => {
            if (manual) {
                setVisible(true);
            }
            else {
                if (window.scrollY >= 90) {
                    setVisible(true);
                }
                else {
                    setVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleVisible);

        return () => {
            window.removeEventListener('scroll', handleVisible);
        };
    }, [manual]);

    const [dropDownActive, setDropDownActive] = useState(false);

    const handleDropDownToggle = () => {
        setDropDownActive(!dropDownActive);
    };

    return (
        <div id='navbar' className={visible ? 'font-montserrat text-[#F7FAFA] fixed w-full bg-[#16796F] dark:bg-[#041312] h-28 z-[100] select-none transition-all duration-200' :
            'font-montserrat text-[#F7FAFA] fixed w-full h-28 z-[100] select-none transition-all duration-200'}>
            <div className='flex justify-between items-center w-full h-full px-8'>
                <Link href='/'>
                    <div className='flex items-center'>
                        <Image src={theme === 'dark' ? LogoD : LogoL} alt="/" width='70' height='70' />
                    </div>
                </Link>
                <div>
                    <ul className='font-regular hidden md:flex text-sm items-center'>

                        <li className='uppercase px-6 p-3 relative ease-in hover:bg-white/30 dark:hover:bg-white/20 duration-100' onMouseEnter={handleDropDownToggle} onMouseLeave={handleDropDownToggle}>
                            About
                            {dropDownActive && (
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-5 p-4 bg-[#09302C] dark:bg-[#041312]'>
                                    <div className='flex-col items-center justify-center text-center w-50'>
                                        <Link href='/about/Welcome'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Welcome</div>
                                        </Link>

                                        <Link href='/'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Secretariat</div>
                                        </Link>

                                        <Link href='/'>
                                            <div className='uppercase p-3 ease-in hover:bg-white/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Info</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 dark:hover:bg-white/20 duration-100'>Area Guide</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 dark:hover:bg-white/20 duration-100'>Committees</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 dark:hover:bg-white/20 duration-100'>Schedule</li>
                        </Link>

                        <Link href='/'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-white/30 dark:hover:bg-white/20 duration-100'>Register</li>
                        </Link>

                        <Switch className='ml-3 px-6'
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                            height={30}
                            width={60}
                            handleDiameter={28}
                            borderRadius={4}
                            uncheckedIcon={
                                <div className="flex h-full items-center justify-center">
                                    <BsSunFill className='text-white' size={12} />
                                </div>
                            }
                            checkedIcon={
                                <div className="flex h-full items-center justify-center">
                                    <BsMoonFill className='text-white' size={12} />
                                </div>
                            }
                            uncheckedHandleIcon={false}
                            checkedHandleIcon={false}
                            onColor="#253130"
                            offColor="#1ea496"
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar