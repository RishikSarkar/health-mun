import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useManual } from '../../contexts/ManualContext';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Info = () => {
    const { setManual } = useManual();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const Newsletter = '/assets/documents/placeholder-pdf.pdf'
    const Constitution = '/assets/documents/constitution.pdf'
    const GISlides = '/assets/documents/gi-slides.pdf'

    useEffect(() => {
        setManual(true);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleNewsletterClick = () => {
        window.open(Newsletter, '_blank');
    };

    const handleConstitutionClick = () => {
        window.open(Constitution, '_blank');
    };

    const handleGISlidesClick = () => {
        window.open(GISlides, '_blank');
    };

    return (
        <>
            <Head>
                <title>Info — HealthMUN</title>
            </Head>
            <div id='info' className='pt-28 w-full h-full bg-[#F7FAFA] dark:bg-[#1a2726] selection:text-[#F7FAFA] dark:selection:text-black selection:bg-[#09302C] dark:selection:bg-[#F7FAFA] overflow-x-hidden'>
                <div className='w-full h-full p-16 md:p-24 text-center bg-gradient-to-b from-[#16796F] to-[#1EA497] dark:bg-gradient-to-b dark:from-[#041312] dark:to-[#253130] text-[#F7FAFA] border-b-4 border-[#F7FAFA] dark:border-[#F7FAFA]/20'>
                    <div className='text-3xl md:text-5xl font-marcellus uppercase'>
                        I<span className='text-2xl md:text-4xl'>nfo</span>
                    </div>
                </div>
                <div className='w-full h-full font-marcellus px-20 md:px-32'>
                    <div className='text-center py-12 text-lg md:text-2xl'>
                        <span className='text-[#16796F] text-xl md:text-2xl dark:text-[#F7FAFA]/60'>Highlight of the Week:</span> Newsletter (TBD)
                    </div>
                    <div className='flex justify-center pb-12'>
                        <div>
                            <Document className={"border-8 border-[#16796F] dark:border-[#F7FAFA]/60 cursor-pointer"} onClick={handleNewsletterClick} file='/assets/documents/placeholder-pdf.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} renderTextLayer={false} width={350} />
                            </Document>
                        </div>
                    </div>
                </div>

                <hr className="border-2 border-[#16796F]/20 dark:border-[#F7FAFA]/20 my-4 md:my-8 md:my-4 mx-12 md:mx-64" />

                <div className='w-full h-full font-marcellus px-20 md:px-32'>
                    <div className='text-center pt-8 pb-12 text-xl md:text-2xl text-[#16796F] dark:text-[#F7FAFA]/60'>
                        Organization Documents
                    </div>
                    <div className='md:grid md:grid-cols-2 md:px-32'>
                        <div className='md:col-span-1'>
                            <div className='flex justify-center pb-12'>
                                <div>
                                    <Document className={"border-8 border-[#16796F] dark:border-[#F7FAFA]/60 cursor-pointer"} onClick={handleConstitutionClick} file='/assets/documents/constitution.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pageNumber} renderTextLayer={false} width={350} />
                                    </Document>
                                    <div className='text-center py-6 text-sm md:text-lg'>
                                        HealthMUN Constitution
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='md:col-span-1'>
                            <div className='flex justify-center pb-12'>
                                <div>
                                    <Document className={"border-8 border-[#16796F] dark:border-[#F7FAFA]/60 cursor-pointer"} onClick={handleGISlidesClick} file='/assets/documents/gi-slides.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pageNumber} renderTextLayer={false} width={350} />
                                    </Document>
                                    <div className='text-center py-6 text-sm md:text-lg'>
                                        General Interest Meeting Slides
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Info;