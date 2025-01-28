"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaChevronDown, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import NavClickedContent from "./NavClickedContent";

function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const showNavOptions = () => setIsOpen(!isOpen);
  const handleClick = (menu: string) =>
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  const closeDropdown = () => setIsOpen(false);

  return (
    <>
      <div
        id="hamburgerIcon"
        onClick={showNavOptions}
        className="z-50 relative cursor-pointer"
      >
        {isOpen ? (
          <RxCross1 className="h-8 w-7 text-white" />
        ) : (
          <RxHamburgerMenu className="h-8 w-7 text-white" />
        )}
      </div>
      <div
        id="nav-dropdown"
        className={`fixed top-[4rem] left-0 w-screen h-full box-border wsce bg-black flex flex-col pt-5 px-7 md:px-12 space-y-4 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="tel:+91 9140585097"
          className="flex items-center gap-3 text-white text-base font-bold"
        >
          <FaPhone className="animate-ringing" />
          1-855-RWS
        </Link>

        {/* Updated "OUR SERVICES" dropdown */}
        <div onClick={() => handleClick("services")}>
          <span className="flex items-center gap-4 text-white text-sm font-bold">
            OUR SERVICES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === "services" && (
            <NavClickedContent
              subOptions={[
                {
                  name: "Crew Resourcing", // Updated
                  link: "/private-jet-charter", // Link retained
                  image: "/navInsideIcons/On-Demand Charter.svg",
                },
                {
                  name: "Compliance & Safety", // Updated
                  link: "/group-charter-flight",
                  image: "/navInsideIcons/Group Charter.svg",
                },
                {
                  name: "Training Programs", // Updated
                  link: "/industry-specific-charter",
                  image: "/navInsideIcons/industry_specific_charter.svg",
                },
                {
                  name: "Aircraft Management", // Updated
                  link: "/medical-flight-transport",
                  image: "/navInsideIcons/Air Ambulance.svg",
                },
                {
                  name: "Consultancy", // Updated
                  link: "/Helicopter-Charter-Flight",
                  image: "/navInsideIcons/Helicopter.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          )}
        </div>

        {/* Updated "OPERATIONS" dropdown (formerly "JET CHARTER") */}
        <div onClick={() => handleClick("operations")}>
          <span className="flex items-center gap-4 text-white text-sm font-bold">
            OPERATIONS
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === "operations" && (
            <NavClickedContent
              subOptions={[
                {
                  name: "Fleet Planning", // Updated
                  link: "/us-canada-chartered-cities",
                  image: "/navInsideIcons/US & CANADA.svg",
                },
                {
                  name: "Maintenance Support", // Updated
                  link: "/international-chartered-cities",
                  image: "/navInsideIcons/International.svg",
                },
                {
                  name: "VTOL Solutions", // Updated
                  link: "/popular-routes",
                  image: "/navInsideIcons/Popular Routes.svg",
                },
                {
                  name: "Auditing", // Updated
                  link: "/empty-leg-flights",
                  image: "/navInsideIcons/Empty Legs.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          )}
        </div>

        {/* Updated "TRAINING & RESOURCES" dropdown (formerly "CHARTER RESOURCES") */}
        <div onClick={() => handleClick("training-resources")}>
          <span className="flex items-center gap-4 text-white text-sm font-bold">
            TRAINING & RESOURCES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === "training-resources" && (
            <NavClickedContent
              subOptions={[
                {
                  name: "EASA/FAA Courses", // Updated
                  link: "/usa-airport-directory",
                  image: "/navInsideIcons/Private Jet Airports.svg",
                },
                {
                  name: "Type Ratings", // Updated (H225, Bell 412, etc.)
                  link: "/aircraft-charters/",
                  image: "/navInsideIcons/Aircraft Types.svg",
                },
                {
                  name: "Safety Management", // Updated
                  link: "/charter-flights-cost-calculator",
                  image: "/navInsideIcons/Cost Estimator.svg",
                },
                {
                  name: "Regulatory Updates", // Updated
                  link: "/flight-tracker",
                  image: "/navInsideIcons/Flight Tracker.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          )}
        </div>

        {/* Updated "CAREERS" link (formerly "PRICING") */}
        <Link href="/careers" className="text-white text-sm font-bold">
          CAREERS
        </Link>

        {/* Updated "COMPANY" dropdown */}
        <div onClick={() => handleClick("company")}>
          <span className="flex items-center gap-4 text-white text-sm font-bold">
            COMPANY
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === "company" && (
            <NavClickedContent
              subOptions={[
                {
                  name: "About Us",
                  link: "/about-jet-level",
                  image: "/navInsideIcons/About Us.svg",
                },
                {
                  name: "Global Offices", // Updated
                  link: "/contact-us",
                  image: "/navInsideIcons/Contact Us.svg",
                },
                {
                  name: "News & Media", // Updated
                  link: "/blog",
                  image: "/navInsideIcons/On-Demand Charter.svg",
                },
                {
                  name: "Client Testimonials", // Updated
                  link: "/private-jet-frequently-asked-questions/",
                  image: "/navInsideIcons/Charter FAQs.svg",
                },
              ]}
              closeDropdown={closeDropdown}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarDropdown;
