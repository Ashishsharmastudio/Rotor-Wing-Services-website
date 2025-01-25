import React from "react";
import { SafetyFirst, TailoredLuxury } from "@/svg";

const OurComitment = () => {
  return (
    <section className="bg-fourMetrics-OurCommitment-background overlay min-h-dvh bg-[-670px_center] min-[450px]:bg-center md:bg-top bg-no-repeat bg-cover overflow-hidden px-0 flex items-center">
      <div className="max-w-[1800px] mx-auto flex flex-col text-white px-5 md:px-10 lg:px-20">
        <h2 className="mb-4 text-white">Our Unwavering Commitment</h2>
        <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-14">
          {/* Safety Commitment */}
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <SafetyFirst />
            </div>
            <h3 className="font-bold">Aviation Safety Excellence</h3>
            <p className="mt-3">
              At Rotor Wing Services, safety forms the foundation of every
              operation. Our SMS (Safety Management System) exceeds EASA and FAA
              requirements, with rigorous risk assessments and 98.7% audit
              compliance across 1500+ global operations. We implement
              MIL-STD-882 standards for military contracts and maintain ISO
              9001/45001 certifications, ensuring every mission - from routine
              maintenance to urgent deployments - meets the highest safety
              benchmarks.
            </p>
          </div>

          {/* Global Support Commitment */}
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <TailoredLuxury />
            </div>
            <h3 className="font-bold">Global Operational Support</h3>
            <p className="mt-3">
              With 24/7 coverage across 12 time zones, our network of 500+
              aviation professionals delivers tailored solutions for diverse
              operational environments. Whether supporting offshore energy
              projects in the North Sea or urgent MEDEVAC missions in remote
              regions, we maintain 99.1% operational readiness. Our teams are
              certified in ICAO Annex 6 standards and equipped to handle complex
              logistics, ensuring seamless support for both routine operations
              and time-critical missions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurComitment;
