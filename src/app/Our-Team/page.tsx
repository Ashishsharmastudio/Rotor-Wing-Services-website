import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import BrandNames from "@/sections/BrandNames";
import React from "react";

const OurTeamPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[url('/hero_images/3.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white">
          Our Team
        </h1>
      </div>

      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 pb-0 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      <section className="px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="text-center">
          <h2 className="mb-5 mt-6">Our Team</h2>
          <p className="text-[#727982] text-md text-center mb-8 details">
            At Rotor Wing Services, we are a global alliance of over 100
            multidisciplinary aviation professionals, committed to delivering
            operational excellence, regulatory compliance, and forward-thinking
            innovation across the rotorcraft and wider aerospace sector.
          </p>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Our diverse network includes:</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#727982]">
            <li>
              Licensed Aircraft Maintenance Engineers (FAA A&P/IA, EASA, GCAA
              B1.3/C, and more)
            </li>
            <li>
              Current and Former Regulatory Inspectors from various National
              Civil Aviation Authorities (NCAA)
            </li>
            <li>
              Part 21 Design and Airworthiness Engineers (both current and
              former)
            </li>
            <li>
              Pilots with operational experience in civil, parapublic, and
              government missions
            </li>
            <li>
              Certified CAMO personnel, Safety Officers, and QA Auditors
            </li>
            <li>
              Project Managers with Lean Six Sigma and PMP certifications
            </li>
            <li>
              Civil Engineers specialized in aviation infrastructure (helipads,
              hangars, vertiports)
            </li>
            <li>
              Software Engineers with IA experience, leading Thrive-compliant
              automation and digital transformation projects
            </li>
            <li>Human Resources Professionals with deep aviation industry knowledge</li>
            <li>
              Talent Acquisition Experts specialized in sourcing, vetting, and
              deploying qualified aviation staff globally
            </li>
          </ul>

          <p className="text-[#727982] text-md text-left mt-8 details">
            At RWS, we go beyond individuals — we deliver a mission-ready,
            scalable task force tailored to your needs. From technical
            operations and compliance audits to MRO setup, staff deployment,
            and infrastructure projects, our collective expertise ensures
            high-impact results in every engagement. We don't showcase names —
            we showcase results. RWS represents the convergence of elite
            aviation talent under one unified platform, ready to support your
            operation anywhere in the world.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurTeamPage;
