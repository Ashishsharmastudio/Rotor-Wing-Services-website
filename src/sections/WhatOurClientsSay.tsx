import React from "react";

interface WhatOurClientsSayProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const WhatOurClientsSay: React.FC<WhatOurClientsSayProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  const testimonials = [
    {
      text: "Rotor Wing's crew resourcing team provided exceptional support during our North Sea operations. Their technical experts maintained 100% operational readiness despite harsh weather conditions, ensuring uninterrupted offshore energy operations.",
      client: "Offshore Energy Company",
      location: "North Sea Operations",
    },
    {
      text: "Their EASA-certified training programs transformed our maintenance team's capabilities. The Airbus H225 course reduced our aircraft downtime by 40% through hands-on troubleshooting techniques we now use daily.",
      client: "Aviation Maintenance Organization",
      location: "Middle East Region",
    },
    {
      text: "When we needed urgent MEDEVAC support in remote Africa, Rotor Wing deployed a certified crew and configured an AW139 within 90 minutes. Their ability to navigate complex airspace regulations was invaluable.",
      client: "Medical Aviation Service",
      location: "African Operations",
    },
    {
      text: "The compliance audit team identified critical gaps in our SMS implementation. Their CAR 21 expertise helped us achieve full regulatory compliance ahead of schedule, avoiding potential grounding of our fleet.",
      client: "Government Aviation Agency",
      location: "Southeast Asia",
    },
  ];

  return (
    <section
      className={`overlay bg-[url(/images/In-Flight-Productivity.webp)] bg-center bg-cover flex flex-col items-center min-h-screen justify-center ${
        hasSectionPadding === false ? "!py-10" : ""
      }`}
    >
      <div
        className={`max-w-[1800px] mx-auto ${
          hasInlinePadding ? "px-5 md:px-10 lg:px-20" : "px-5 md:px-10 xl:px-20"
        } `}
      >
        <h2 className="text-center text-white pb-7">Industry Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white bg-opacity-10 backdrop-blur-lg text-white p-6 rounded-lg border-2 border-blue text-[15px]"
            >
              <p className="mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.client}</p>
                <p className="text-sm opacity-80">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
