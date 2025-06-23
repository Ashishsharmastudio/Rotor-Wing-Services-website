import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

type Section = {
  title: string;
  links: { title: string; link: string }[];
};

const Footer = () => {
  const sections: Section[] = [
    {
      title: "Core Services",
      links: [
        { title: "Crew Resourcing", link: "/crew-resourcing" },
        { title: "Operational Support", link: "/operational-support" },
        { title: "Maintenance Management", link: "/maintenance-management" },
        { title: "Compliance Auditing", link: "/compliance-auditing" },
        { title: "Aviation Training", link: "/training-programs" },
        { title: "Fleet Optimization", link: "/fleet-optimization" },
        { title: "VTOL Solutions", link: "/vtol-solutions" },
      ],
    },
    {
      title: "Training Programs",
      links: [
        { title: "EASA Part 66 Certification", link: "/training/easa-part66" },
        { title: "FAA A&P Prep Courses", link: "/training/faa-ap" },
        { title: "Airbus H Series Training", link: "/training/airbus-h" },
        { title: "Bell 400 Series Training", link: "/training/bell-400" },
        { title: "Safety Management Systems", link: "/training/sms" },
        { title: "Human Factors Training", link: "/training/human-factors" },
        { title: "Military Standards Training", link: "/training/military" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { title: "CAR 21 Certification", link: "/compliance/car21" },
        { title: "JAR 145 Maintenance", link: "/compliance/jar145" },
        { title: "ICAO Annex 6 Compliance", link: "/compliance/icao-annex6" },
        { title: "MIL-STD-882 Support", link: "/compliance/mil-std-882" },
        { title: "Risk Assessment", link: "/compliance/risk-assessment" },
        {
          title: "Airworthiness Directives",
          link: "/compliance/airworthiness",
        },
        { title: "Audit Preparation", link: "/compliance/audits" },
      ],
    },
    {
      title: "Global Network",
      links: [
        { title: "North Sea Operations", link: "/operations/north-sea" },
        { title: "Middle East Support", link: "/operations/middle-east" },
        { title: "Asia-Pacific Region", link: "/operations/asia-pacific" },
        { title: "African Operations", link: "/operations/africa" },
        { title: "South America Network", link: "/operations/south-america" },
        { title: "24/7 Emergency Support", link: "/emergency-support" },
        { title: "Regional Offices", link: "/contact#offices" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Safety Manuals", link: "/resources/safety-manuals" },
        { title: "Technical Documentation", link: "/resources/tech-docs" },
        { title: "Regulatory Updates", link: "/resources/regulations" },
        { title: "Operational Case Studies", link: "/resources/case-studies" },
        { title: "Certification Database", link: "/resources/certifications" },
        { title: "Industry Whitepapers", link: "/resources/whitepapers" },
      ],
    },
  ];

  return (
    <section className="bg-black pt-5 px-5 md:px-10 lg:px-20 pb-0">
      <div className="max-w-[1800px] mx-auto pt-10 text-[#f0f1f2]">
        {/* Logo section remains unchanged */}
        <div className="pb-4 flex flex-col justify-between w-fit mx-auto min-[1180px]:w-full min-[1180px]:m-0 min-[1180px]:flex-row gap-5">
          <div className="mb-4 min-[1180px]:mb-8">
            <Image
              src="/Logo 2.PNG"
              alt="Rotor Wing Services Logo"
              width={200}
              height={50}
              className="md:w-72 max-w-72 mx-auto h-auto"
            />
          </div>
          {/* Social icons remain unchanged */}
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="flex flex-col lg:flex-row lg:items-center lg:h-[54px] gap-4 pb-0 lg:pb-0">
              <h4 className="text-lg text-center m-0">Connect with us</h4>
              <div className="flex gap-6 items-center mx-auto">
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585]"
                  href="#"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585]"
                  href="#"
                >
                  <FaXTwitter />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585]"
                  href="#"
                >
                  <FaInstagram />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585]"
                  href="#"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Updated content sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`bg-[#202020] py-8 border-b border-black lg:flex items-baseline ${
              index === 0 ? "rounded-[20px_20px_0px_0px]" : ""
            }`}
          >
            <div className="lg:w-1/4 pb-4">
              <h4 className="font-playfair tracking-widest text-[15px] lg:w-fit px-8 lg:pl-[25%] lg:pr-0">
                {section.title}
              </h4>
            </div>
            <ul className="list-none lg:w-3/4 pl-8 pr-4 lg:pr-12 lg:pl-0 text-sm">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="inline">
                  <Link
                    href={link.link}
                    className="text-[#858585] leading-7 hover:text-blue mr-2 inline-flex"
                  >
                    {link.title}
                  </Link>
                  {linkIndex !== section.links.length - 1 && (
                    <span className="text-[#858585] mr-2 hidden sm:inline">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer bottom - Updated text only */}
      <div className="relative">
        <hr className="-ml-5 md:-ml-20 border-[#858585] absolute w-[calc(100%_+40px)] md:w-[calc(100%_+120px)] lg:w-[calc(100%_+160px)]" />
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row text-[#f0f1f2] gap-5 mt-8 py-4">
          <div className="flex items-center justify-start gap-3">
            <div className="flex gap-5 flex-col text-[11px]">
              <div>&copy; 2025 Rotor Wing Services Limited</div>
              <div className="flex flex-row gap-3 lg:mx-0">
                <Link href="/privacy-policy" className="hover:text-blue">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-blue">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 text-[#858585] text-[9px] flex flex-col gap-2">
            <p>
              Rotor Wing Services and its divisions, Rotor Wing Academy, Rotor Wing Team, MROlytics, and AeroGuardian, are registered trademarks of JavAirTec Holding Group.
            </p>
            <p>
              Rotor Wing Services maintains EASA Part 145, FAA 14 CFR Part 145, and GCAA CAR 21 certifications. All operations comply with ICAO Annex 6 standards and military aviation requirements under MIL-STD-882. Training programs delivered in accordance with EASA Part 66 and FAA CFR Part 147 regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
