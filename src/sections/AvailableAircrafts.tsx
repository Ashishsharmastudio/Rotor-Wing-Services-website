import Image from "next/image";
import Link from "next/link";
import React from "react";

type PageProps = {
  sectionClass?: string;
  heading?: string;
  subHeading?: string;
};

const AvailableAircrafts = ({
  sectionClass,
  heading,
  subHeading,
}: PageProps) => {
  const helicopters = [
    {
      type: "Light Helicopter",
      name: "Airbus H125",
      image: "/images/Turboprop.jpg",
      seats: 5,
      range: "400 mi",
      speed: "140 mph",
      description:
        "Mountain operations, utility missions, and emergency medical services support",
      price: "FROM $1,200/hr",
    },
    {
      type: "Medium Helicopter",
      name: "Bell 412",
      image: "/images/Very-Light-Jet.jpg",
      seats: 13,
      range: "450 mi",
      speed: "150 mph",
      description:
        "Offshore energy support, search & rescue operations, and VIP transport",
      price: "FROM $2,500/hr",
    },
    {
      type: "Heavy Helicopter",
      name: "Sikorsky S-92",
      image: "/images/Light-Jet.jpg",
      seats: 19,
      range: "600 mi",
      speed: "165 mph",
      description:
        "Offshore crew transfer, military operations, and heavy-lift capabilities",
      price: "FROM $4,800/hr",
    },
    {
      type: "Training Solutions",
      name: "EASA/FAA Certified",
      image: "/images/Mid-Size-Jet.jpg",
      seats: "Custom",
      range: "N/A",
      speed: "N/A",
      description:
        "Type-specific training for Airbus, Bell, and Sikorsky helicopters",
      price: "FROM $850/day",
    },
    {
      type: "Maintenance Support",
      name: "CAR 21 Certified",
      image: "/images/Super-Mid-Size-Jet.jpg",
      seats: "N/A",
      range: "N/A",
      speed: "N/A",
      description:
        "Airworthiness management and maintenance program optimization",
      price: "CONTRACT BASIS",
    },
    {
      type: "Crew Resourcing",
      name: "Global Network",
      image: "/images/Heavy-Jet.jpg",
      seats: "On Demand",
      range: "Worldwide",
      speed: "24/7",
      description:
        "Certified pilots and technical crews for short/long-term contracts",
      price: "ASK FOR RATES",
    },
  ];

  return (
    <section
      className={`max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 ${sectionClass}`}
    >
      <h2 className="text-center mb-2">
        {heading || "Aviation Solutions & Fleet"}
      </h2>
      <p className="text-center details leading-relaxed mb-8">
        {subHeading ||
          "Comprehensive helicopter services and operational support"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {helicopters.map((heli, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <div
              className="bg-cover bg-no-repeat bg-center h-56 flex justify-center items-end"
              style={{ backgroundImage: `url(${heli.image})` }}
            >
              <div className="text-white grid grid-cols-3 mb-2 gap-2 px-2">
                <div className="text-center px-3 py-4 flex-1 bg-[#202b349d]">
                  <h4 className="font-bold leading-tight">Capacity</h4>
                  <p className="text-sm">{heli.seats}</p>
                </div>
                <div className="text-center py-4 flex-1 bg-[#202b349d]">
                  <h4 className="font-bold leading-tight">Range</h4>
                  <p className="text-sm">{heli.range}</p>
                </div>
                <div className="text-center px-3 py-4 flex-1 bg-[#202b349d]">
                  <h4 className="font-bold leading-tight">Speed</h4>
                  <p className="text-sm">{heli.speed}</p>
                </div>
              </div>
            </div>
            <div className="p-4 box-border bg-blue-background h-64 lg:h-[300px] xl:h-64 flex flex-col justify-between bg-cover bg-no-repeat">
              <div>
                <h3 className="text-white font-bold mb-4">{heli.type}</h3>
                <p className="mb-3 font-bold text-white text-[16px]">
                  {heli.name}
                </p>
                <p className="mb-4 text-gray-300 text-base">
                  {heli.description}
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-xs md:text-sm gap-3">
                <Link
                  href="/aviation-solutions"
                  className="text-white px-3 py-2 md:py-3 min-w-fit w-2/5 md:w-[35%] rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 text-center text-xs sm:text-sm hover:shadow-card_shadow"
                >
                  REQUEST SOLUTION →
                </Link>
                <p className="text-white font-bold">{heli.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableAircrafts;
