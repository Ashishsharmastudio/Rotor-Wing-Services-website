import React, { Suspense } from 'react';
// import IframeEmbed from './Iframe';
import Markdown from 'markdown-to-jsx';


type HeroProps = {
    image: string;
    title: string;
    subtitle?: string;
    tagline?: string;
    description?: string;
    hasOverlay?: boolean;
    hasCalculator?: boolean;
    showCalculator?:string
};

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, tagline, description, hasOverlay, hasCalculator, showCalculator = "LeadForm" }) => {
    return (
        <section 
    className={`flex flex-col items-center justify-center min-h-[65vh] md:min-h-[75vh] ${hasCalculator ? "xl:pb-5 pt-5" : "pb-5 sm:pb-10"} ${hasOverlay ? "overlay" : ""} bg-center bg-cover text-center text-white bg-no-repeat`}
    style={{ backgroundImage: `url('${image}')` }}
>
    <div className='w-full max-w-[1800px] mx-auto px-5 mb-6 md:px-10 xl:px-20'>
        <p className='mb-1 subtitle'>{subtitle}</p>
        <h1 className='mb-5'>{title}</h1>
        <p className={`${tagline ? 'TitleTtagline mb-5 ' : 'hidden'}`}>{tagline}</p>
        <div className={`${description ? 'mb-5 ' : 'hidden'}`}>
            <Markdown
                options={{
                    forceBlock: true,
                    overrides: {
                        p: {
                            props: {
                                className: 'TitleTtagline'
                            }
                        },
                        a: {
                            props: {
                                className: `TitleTtagline text-white`,
                            },
                        },
                    },
                }}
            >
                {description as string}
            </Markdown>
        </div>
    </div>
</section>

    );
};

export default Hero;
