import React, { useState, useEffect } from 'react'
import { useManual } from '../contexts/ManualContext'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import LogoL from '../public/assets/logos/logo-ww.png'
import LogoD from '../public/assets/logos/logo-ww.png'
import Switch from "react-switch";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [visible, setVisible] = useState(false);
    const { theme, setTheme } = useTheme();
    const { manual } = useManual();
    const [aboutDropDownActive, setAboutDropDownActive] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setAboutDropDownActive(false);
    };

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

    const handleDropDownToggle = () => {
        setAboutDropDownActive(!aboutDropDownActive);
    };

    return (
        <div id='navbar' className={visible ? 'font-montserrat text-[#F7FAFA] fixed w-full bg-[#16796F] dark:bg-[#041312] h-28 z-[100] select-none xs:overflow-x-hidden' :
            'font-montserrat text-[#F7FAFA] fixed w-full bg-gradient-to-b from-white/10 dark:bg-gradient-to-b dark:from-black/50 h-28 z-[100] select-none xs:overflow-x-hidden'}>
            <div className='flex justify-between items-center w-full h-full px-8'>
                <Link href='/'>
                    <div className='flex items-center'>
                        <Image src={theme === 'dark' ? LogoD : LogoL} alt="/" width='70' height='70' />
                    </div>
                </Link>
                <div>
                    <ul className='font-regular hidden md:flex text-sm items-center transition-all duration-200'>

                        <li className='uppercase px-6 p-3 relative ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100' onMouseEnter={handleDropDownToggle} onMouseLeave={handleDropDownToggle}>
                            About
                            {aboutDropDownActive && (
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-5 p-4 bg-[#09302C] dark:bg-[#041312]'>
                                    <div className='flex-col items-center justify-center text-center w-50'>
                                        <Link href='/about/Welcome'>
                                            <div className='uppercase p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Welcome</div>
                                        </Link>

                                        <Link href='/about/Secretariat'>
                                            <div className='uppercase p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Secretariat</div>
                                        </Link>

                                        <Link href='/about/Info'>
                                            <div className='uppercase p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:text-[#041312] dark:hover:bg-[#cadede] duration-100'>Info</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

                        <Link href='/area/AreaGuide'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Area Guide</li>
                        </Link>

                        <Link href='/committees/Committees'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Committees</li>
                        </Link>

                        <Link href='/schedule/Schedule'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Schedule</li>
                        </Link>

                        <Link href='/register/Register'>
                            <li className='ml-3 uppercase px-6 p-3 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Register</li>
                        </Link>

                        <Switch className='ml-3 px-6'
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                            height={30}
                            width={60}
                            handleDiameter={30}
                            borderRadius={4}
                            uncheckedIcon={
                                <div className="flex h-full items-center justify-center">
                                    <BsSunFill className='text-[#F7FAFA]' size={12} />
                                </div>
                            }
                            checkedIcon={
                                <div className="flex h-full items-center justify-center">
                                    <BsMoonFill className='text-[#F7FAFA]' size={12} />
                                </div>
                            }
                            uncheckedHandleIcon={false}
                            checkedHandleIcon={false}
                            onColor="#253130"
                            offColor="#1EA497"
                        />
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu className='text-[#F7FAFA]' size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'font-montserrat md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 ease-in duration-200' : ''}>
                <div onClick={handleNav} className={nav ? 'w-full h-screen' : ''} />
                <div className={nav ? 'fixed left-0 top-0 w-[80vw] h-screen text-[#F7FAFA] bg-[#16796F] dark:bg-[#041312] p-12 ease-in duration-200' : 'fixed left-[-100%] top-0 h-screen p-10 ease-in duration-200'}>
                    <div className='py-12 flex flex-col items-left justify-left'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={handleNav} className='uppercase px-6 p-3 my-2 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Home</li>
                            </Link>
                            <li className='uppercase px-6 p-3 my-2 relative ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100' onClick={handleDropDownToggle}>
                                About
                            </li>
                            {aboutDropDownActive && (
                                <div>
                                    <div className='flex-col text-sm'>
                                        <Link href='/about/Welcome'>
                                            <div onClick={handleNav} className='uppercase ml-6 px-6 p-3 my-2 relative ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Welcome</div>
                                        </Link>

                                        <Link href='/about/Secretariat'>
                                            <div onClick={handleNav} className='uppercase ml-6 px-6 p-3 my-2 relative ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Secretariat</div>
                                        </Link>

                                        <Link href='/about/Info'>
                                            <div onClick={handleNav} className='uppercase ml-6 px-6 p-3 my-2 relative ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Info</div>
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {!aboutDropDownActive && (
                                <Link href='/area/AreaGuide'>
                                    <li className='uppercase px-6 p-3 my-2 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Area Guide</li>
                                </Link>)}

                            {!aboutDropDownActive && (
                                <Link href='/committees/Committees'>
                                    <li className='uppercase px-6 p-3 my-2 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Committees</li>
                                </Link>)}

                            {!aboutDropDownActive && (
                                <Link href='/schedule/Schedule'>
                                    <li className='uppercase px-6 p-3 my-2 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Schedule</li>
                                </Link>)}

                            {!aboutDropDownActive && (
                                <Link href='/register/Register'>
                                    <li className='uppercase px-6 p-3 my-2 ease-in hover:bg-[#F7FAFA]/30 dark:hover:bg-[#F7FAFA]/20 duration-100'>Register</li>
                                </Link>)}

                            <Switch className='mt-8 px-6'
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                                height={30}
                                width={60}
                                handleDiameter={30}
                                borderRadius={4}
                                uncheckedIcon={
                                    <div className="flex h-full items-center justify-center">
                                        <BsSunFill className='text-[#F7FAFA]' size={12} />
                                    </div>
                                }
                                checkedIcon={
                                    <div className="flex h-full items-center justify-center">
                                        <BsMoonFill className='text-[#F7FAFA]' size={12} />
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
        </div>
    )
}

export default Navbar