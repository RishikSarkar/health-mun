import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useManual } from '../../contexts/ManualContext';

import placeholder_y from '../../public/assets/secretariat/placeholder_y.png'
import placeholder_a from '../../public/assets/secretariat/placeholder_a.jpg'
import rishik from '../../public/assets/secretariat/rishik.jpg'
import olivier from '../../public/assets/secretariat/olivier.jpg'


const Secretariat = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(true);
    }, []);

    return (
        <>
            <Head>
                <title>Secretariat — HealthMUN</title>
            </Head>
            <div id='secretariat' className='pt-28 w-full h-full items-center justify-center bg-[#F7FAFA] dark:bg-[#1a2726] dark:text-[#F7FAFA] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        M<span className='text-2xl md:text-4xl'>eet</span> t<span className='text-2xl md:text-4xl'>he</span> S<span className='text-2xl md:text-4xl'>ecretariat</span>
                    </div>
                </div>
                <div className='w-full h-full font-marcellus px-20 md:px-32'>
                    <div className='md:px-40 w-full md:w-full md:py-36 pt-16 md:pt-24 md:grid md:grid-cols-3 md:gap-x-4 gap-y-8'>

                        <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase'>
                            Secretary-General
                        </div>
                        <div className="md:col-span-1 my-6 md:mt-0">
                            <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                                <Image src={placeholder_y} width={500} />
                            </div>
                            <div className="hidden md:flex justify-center">
                                {/* Change email */}
                                <a href="mailto:secgen.healthmun@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                    Contact Yasmin
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA]">
                            <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                                <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                    Yasmin C. Khan
                                </div>
                                <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                    <p>Yasmin paints herself as a simple woman: an addict of cats, chess, and boba. These three pillars,
                                        she claims, are essential for her survival. And if there were to be a fourth, it would undoubtedly
                                        be Model United Nations—a passion she has basked in since the age of nine. Pre-COVID, Yasmin relished
                                        traveling annually to conferences in the tri-state area, with EmpireMUNC, CMUNCE, and SHUMUN being
                                        cherished highlights. It wasn’t until her junior year of high school that she achieved a gavel for
                                        best delegate in EmpireMUNC’s sixth session, sparking a unique love for specialized crisis committees.
                                        But with or without awards, Yasmin found joy in the meticulous practice of research, public speaking,
                                        and creative resolution paper acronyms. Later in the collegiate realm, Yasmin discovered the universal
                                        allure of Model UN, with conferences spanning the globe, including her blood roots in Morocco and Pakistan.</p>
                                    <p className='mt-2'>As a Muslim American, Yasmin spent her entire life in an Islamic private institution before embarking
                                        on her pre-medical freshman year at Rutgers University, pursuing a double major in Neuroscience
                                        and Psychology. As an aspiring health professional, she wanted her favorite academic pursuit to
                                        be a valuable experience for STEM students like herself—educating insights into the intersection
                                        of healthcare and international policies. To this day, her gratitude extends profusely to the
                                        faculty and peers of her elementary, middle, and high school years who nurtured her Model UN
                                        career from a young age. It was under their guidance that she recognized Model UN’s potential
                                        as an extracurricular activity, cultivating skills beneficial to every student, regardless
                                        of their intended career paths. In Yasmin’s eyes, the possibilities are limitless, and the
                                        founding of HealthMUN was just the beginning.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-12 md:my-4" />
                        </div>

                        <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase'>
                            Deputy Secretary-General
                        </div>
                        <div className="md:col-span-1 my-6 md:mt-0">
                            <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                                <Image src={placeholder_a} width={500} />
                            </div>
                            <div className="hidden md:flex justify-center">
                                {/* Change email */}
                                <a href="mailto:depgen.healthmun@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                    Contact Ayah
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA]">
                            <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                                <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                    Ayah Elzibak
                                </div>
                                <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                    If life were a sitcom, Ayah would be the quirky protagonist navigating the chaotic but utterly
                                    entertaining plot of existence. She defines herself as an inquisitive soul, navigating life with an
                                    inclination for calculated risks. She is deeply immersed in the fields of motor rehabilitation,
                                    physical movement, and entrepreneurship. While her academic pursuits may not align conventionally with
                                    the typical Model UN enthusiast, Ayah has discovered herself through taking part in a secretarial role
                                    within this organization, driven by a tenacious interest she has actively pursued. Picture this: her
                                    MUN journey kicking off in junior high, courtesy of her best friend and current Secretary General of
                                    HealthMUN, who, let's be honest, deserves an award for convincing her to join the team. Despite initial
                                    apprehensions, Ayah encouraged herself to keep engaging in various conferences, fueling her passion
                                    for public speaking, emotional intelligence, and conflict resolution—skills she deems essential in
                                    any new endeavors. Beyond MUN, Ayah has contributed as a Physical Therapy aide in numerous rehabilitation
                                    clinics and hospitals. Engaged in a global health initiative, she traveled to third-world countries,
                                    extending aid and medical relief to orphanages, educational institutions, and communities at large.
                                    She discovers a profound sense of peace in providing care, a sentiment she carries into her diverse
                                    interests. She takes pleasure in the continuous pursuit of knowledge, dedicating a considerable
                                    portion of her free time to exploring new interests and honing her skills in gymnastics, music,
                                    drawing, and the art of imaginative storytelling. For Ayah, the most challenging yet pivotal aspect
                                    of any new endeavor lies in taking that initial step—a philosophy she wholeheartedly embraces.
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-12 md:my-4" />
                        </div>

                        <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase'>
                            USG for Global Communications
                        </div>
                        <div className="md:col-span-1 my-6 md:mt-0">
                            <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                                <Image src={rishik} width={500} />
                            </div>
                            <div className="hidden md:flex justify-center">
                                {/* Change email */}
                                <a href="mailto:communications.healthmun@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                    Contact Rishik
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA] pb-12 md:pb-0">
                            <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                                <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                    Rishik Sarkar
                                </div>
                                <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                    Born in California and raised in India, Rishik considers himself a
                                    member of a global community of innovationists. As a senior at Rutgers University-New Brunswick,
                                    double majoring in Computer Science and Cognitive Science, his passions lie in the nexus of
                                    artificial intelligence and cognitive neuropsychiatry. In addition to his academic ventures,
                                    Rishik works as an ML full-stack developer intern at a fintech firm and as a Computational
                                    Cognitive Neuropsychiatry research assistant at a collaborative Rutgers-Princeton lab. With
                                    several years of development and research experience, his greatest ambition is to utilize
                                    machine learning in diagnosing and treating mental health disorders by pursuing a Master's
                                    degree and eventually establishing a digital health technology startup. Besides being one of
                                    the three founders, Rishik also serves as the Under-Secretary-General for Global Communications
                                    and the Chief Technology Officer of HealthMUN; as a relatively new member of the Model U.N. scene,
                                    he aims to learn more about conferences while building and maintaining the organization's online
                                    platform. His ultimate dream for this conference is to host a hackathon-like committee for
                                    delegates interested in the intersection of technology and healthcare: of course, all majors
                                    would be welcome to participate! In his free time, Rishik enjoys coding ML projects (clearly!),
                                    watching One Piece, and playing the guitar and the violin. His interest in linguistics has also
                                    inspired him to learn Bengali, Hindi, Japanese, and German, so feel free to contact him in your
                                    native tongue!
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 m-2 my-12 md:my-4" />
                        </div>

                        <div className='text-center md:text-left md:col-span-3 px-2 text-2xl uppercase'>
                            USG for Economic and Social Affairs
                        </div>
                        <div className="md:col-span-1 my-6 md:mt-0">
                            <div className='border-8 border-[#16796F] dark:border-[#F7FAFA]'>
                                <Image src={olivier} width={500} />
                            </div>
                            <div className="hidden md:flex justify-center">
                                {/* Change email */}
                                <a href="mailto:finance.healthmun@gmail.com" className='font-montserrat p-4 text-sm mt-8 w-[15vw] uppercase text-center bg-[#16796F] text-[#F7FAFA] dark:bg-[#F7FAFA] dark:text-black hover:bg-[#16796F]/60 dark:hover:bg-[#F7FAFA]/50 border-0 border-[#16796F] dark:border-[#F7FAFA] cursor-pointer ease-in duration-100'>
                                    Contact Olivier
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2 text-[#F7FAFA] dark:text-[#F7FAFA] border-0 border-[#16796F] dark:border-[#F7FAFA] pb-12 md:pb-0">
                            <div className='w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] text-black dark:text-[#F7FAFA]'>
                                <div className='text-center md:text-left px-8 pb-6 md:pb-2 text-xl md:text-2xl'>
                                    Olivier Diegue
                                </div>
                                <div className='text-left px-8 md:pb-6 py-4 md:py-2 text-sm border-4 md:border-0 border-[#16796F] dark:border-[#F7FAFA] max-h-[40vh] md:max-h-full overflow-y-scroll'>
                                    <p>Olivier is a passionate biology major at Rutgers University with a vision of making a
                                        meaningful impact on the intersection of healthcare and community development. His
                                        academic journey has equipped him with a profound understanding of the biological
                                        sciences, laying the foundation for his aspirations in the field. Fueled by his desire
                                        to contribute to the improvement of healthcare systems, Olivier is determined to
                                        carve a path in hospital consulting. His goal is not only to navigate the complexities
                                        of healthcare administration but also to be a catalyst for positive change within his
                                        community. Looking ahead, he sees himself as a meteor of change, aiming to bring about
                                        transformative initiatives that address the unique needs of the community. One of the
                                        avenues through which he plans to realize this vision is by actively contributing to
                                        the growth of HealthMun, an organization close to his heart.</p>
                                    <p className='mt-2'>As an advocate for HealthMun, Olivier is committed to leveraging his
                                        skills in fundraising, financial management, and consulting. By strategically steering the
                                        organization through these realms, he aspires to nurture HealthMun into a robust and
                                        enduring entity. His vision is to empower HealthMun to play a pivotal role in shaping the
                                        future of healthcare, making lasting contributions to community well-being. With support
                                        from the Secretary-General and Executive Board Members, Olivier hopes to help foster
                                        invaluable skills for all students as they prepare to navigate the real world. Join him on
                                        this journey as he works together with the community to build an organization focused
                                        on a healthier and more connected future for all.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Secretariat