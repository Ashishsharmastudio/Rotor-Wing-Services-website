import React, { Suspense } from "react";
import Markdown from "markdown-to-jsx";

type HeroProps = {
  image?: string;
  video?: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  hasOverlay?: boolean;
  hasCalculator?: boolean;
  showCalculator?: string;
};

const Hero: React.FC<HeroProps> = ({
  image,
  video,
  title,
  subtitle,
  tagline,
  description,
  hasOverlay,
  hasCalculator,
  showCalculator = "LeadForm",
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-[65vh] md:min-h-[75vh] ${
        hasCalculator ? "xl:pb-5 pt-5" : "pb-5 sm:pb-10"
      } bg-center bg-cover text-center text-white bg-no-repeat relative overflow-hidden`}
      style={{ backgroundImage: video ? "none" : `url('${image}')` }}
    >
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      {hasOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      )}
      <div className="w-full max-w-[1800px] mx-auto px-5 mb-6 md:px-10 xl:px-20 relative z-20">
        <p className="mb-1 subtitle drop-shadow-lg">{subtitle}</p>
        <h1 className="mb-5 drop-shadow-2xl">{title}</h1>
        <p className={`${tagline ? "TitleTtagline mb-5 " : "hidden"} drop-shadow-lg`}>
          {tagline}
        </p>
        <div className={`${description ? "mb-5 " : "hidden"}`}>
          <Markdown
            options={{
              forceBlock: true,
              overrides: {
                p: {
                  props: {
                    className: "TitleTtagline drop-shadow-lg",
                  },
                },
                a: {
                  props: {
                    className: `TitleTtagline text-white drop-shadow-lg`,
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
