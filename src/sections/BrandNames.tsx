import React from 'react';
import Image from 'next/image';

const BrandNames = () => {
    const logos = [
        { src: '/brandNamesImages/Yahoo Logo.png', alt: 'Yahoo Logo' },
        { src: '/brandNamesImages/USA Today Logo.png', alt: 'USA Today Logo' },
        { src: '/brandNamesImages/The Mercury News Logo.png', alt: 'The Mercury News Logo' },
        { src: '/brandNamesImages/GO BankingRates Logo.png', alt: 'GO BankingRates Logo' },
        { src: '/brandNamesImages/Techopedia Logo.png', alt: 'Techopedia Logo' },
        { src: '/brandNamesImages/NewsBreak Logo.png', alt: 'NewsBreak Logo' },
    ];

    // Duplicate logos for a seamless scrolling effect
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center xl:justify-start items-center lg:items-start xl:items-center max-w-[1800px] mx-auto pt-7 pb-2 px-5 md:px-10 xl:px-20">
            <h4 className='text-center text-xs tracking-[1px] text-[#476679] whitespace-nowrap lg:self-center xl:self-auto md:mr-3 xl:mr-6 mb-2 md:mb-0'>AS SEEN ON</h4>
            <div className="w-full xl:w-[90%] overflow-hidden relative">
                <div className="flex w-max animate-infinite-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-8">
                            <Image className="opacity-80 max-h-12 w-auto" width={150} height={70} src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandNames;
