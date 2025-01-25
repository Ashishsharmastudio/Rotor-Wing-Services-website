"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import NavClickedContent from "./NavClickedContent";
import Link from "next/link";

function NavOptions() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navOptionsRef = useRef<HTMLDivElement>(null);

  const handleClick = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdown = () => setActiveDropdown(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navOptionsRef.current &&
        !navOptionsRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  return (
    <div
      id="nav-options"
      className="flex items-center xl:gap-3 font-playfair text-sm tracking-wider"
      ref={navOptionsRef}
    >
      {/* Home */}
      <Link
        href="/"
        className="flex items-center text-white text-nowrap hover:text-blue transition-all duration-100 text-[16px]"
      >
        Home
      </Link>

      {/* About Us Dropdown */}
      <div onClick={() => handleClick("about")}>
        <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100">
          About Us <FaChevronDown />
        </span>
        {activeDropdown === "about" && (
          <div onClick={(e) => e.stopPropagation()}>
            <NavClickedContent
              subOptions={[
                {
                  name: "Our Mission & Vision",
                  link: "/mission-vision",
                  image: "/navInsideIcons/About us.svg",
                },
                {
                  name: "Why Choose Us",
                  link: "/why-choose-us",
                  image: "/navInsideIcons/Our Team.svg",
                },
                {
                  name: "Global Network",
                  link: "/global-network",
                  image: "/navInsideIcons/International.svg",
                },
                {
                  name: "Safety Commitment",
                  link: "/safety",
                  image: "/navInsideIcons/Air Ambulance.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          </div>
        )}
      </div>

      {/* Services Dropdown */}
      <div onClick={() => handleClick("services")}>
        <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100">
          Services <FaChevronDown />
        </span>
        {activeDropdown === "services" && (
          <div onClick={(e) => e.stopPropagation()}>
            <NavClickedContent
              subOptions={[
                {
                  name: "Consultancy",
                  link: "/consultancy",
                  image: "/navInsideIcons/On-Demand Charter.svg",
                  submenu: [
                    "Operations & Maintenance Optimization",
                    "Fleet Planning",
                    "Airworthiness & Compliance",
                    "VTOL Solutions",
                  ],
                },
                {
                  name: "Training",
                  link: "/training",
                  image: "/navInsideIcons/Group Charter.svg",
                  submenu: [
                    "Initial Training (EASA, FAA, GCAA)",
                    "Continued Training",
                    "Human Factors & Safety Management",
                  ],
                },
                {
                  name: "Compliance & Safety",
                  link: "/compliance",
                  image: "/navInsideIcons/industry_specific_charter.svg",
                  submenu: [
                    "Risk Assessment",
                    "Safety Management Systems",
                    "Regulatory Audits",
                  ],
                },
                {
                  name: "Aircraft Solutions",
                  link: "/aircraft-solutions",
                  image: "/navInsideIcons/Helicopter.svg",
                  submenu: [
                    "Leasing & Brokerage",
                    "Maintenance Management",
                    "Prepurchase Inspections",
                  ],
                },
                {
                  name: "Manpower & Support",
                  link: "/manpower",
                  image: "/navInsideIcons/Our Team.svg",
                  submenu: [
                    "Crew Resourcing",
                    "Technical Experts",
                    "Project Management",
                  ],
                },
              ]}
              closeDropdown={closeDropdown}
            />
          </div>
        )}
      </div>

      {/* Industries Dropdown */}
      <div onClick={() => handleClick("industries")}>
        <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100">
          Industries <FaChevronDown />
        </span>
        {activeDropdown === "industries" && (
          <div onClick={(e) => e.stopPropagation()}>
            <NavClickedContent
              subOptions={[
                {
                  name: "Offshore Energy",
                  link: "/offshore",
                  image: "/navInsideIcons/US & CANADA.svg",
                },
                {
                  name: "Government Contracts",
                  link: "/government",
                  image: "/navInsideIcons/International.svg",
                },
                {
                  name: "Emergency Services",
                  link: "/emergency",
                  image: "/navInsideIcons/Air Ambulance.svg",
                },
                {
                  name: "Commercial Aviation",
                  link: "/commercial",
                  image: "/navInsideIcons/Aircraft Types.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          </div>
        )}
      </div>

      {/* Training Link */}
      <Link
        href="/training-programs"
        className="flex items-center text-white text-nowrap hover:text-blue transition-all duration-100 text-[16px]"
      >
        Training
      </Link>

      {/* Resources Dropdown */}
      <div onClick={() => handleClick("resources")}>
        <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100">
          Resources <FaChevronDown />
        </span>
        {activeDropdown === "resources" && (
          <div onClick={(e) => e.stopPropagation()}>
            <NavClickedContent
              subOptions={[
                {
                  name: "News & Insights",
                  link: "/news",
                  image: "/navInsideIcons/Popular Routes.svg",
                },
                {
                  name: "Whitepapers",
                  link: "/whitepapers",
                  image: "/navInsideIcons/Distance Calculator.svg",
                },
                {
                  name: "Media Gallery",
                  link: "/media",
                  image: "/navInsideIcons/Flight Tracker.svg",
                },
                {
                  name: "Careers",
                  link: "/careers",
                  image: "/navInsideIcons/Charter FAQs.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          </div>
        )}
      </div>

      {/* Contact Us */}
      <Link
        href="/contact"
        className="flex items-center text-white text-nowrap hover:text-blue transition-all duration-100 text-[16px]"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default NavOptions;
