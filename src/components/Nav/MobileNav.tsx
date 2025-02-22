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
          href="tel:+971 50 123 4760"
          onClick={closeDropdown}
          className="flex items-center gap-3 text-white text-base font-bold"
        >
          <FaPhone className="animate-ringing" />
          +971 50 123 4760
        </Link>

        <Link
          href="/"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          HOME
        </Link>

        <Link
          href="/about-us"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          ABOUT US
        </Link>

        <Link
          href="/services"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          SERVICES
        </Link>

        <Link
          href="/Our-Team"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          OUR TEAM
        </Link>

     

        <Link
          href="/Latest-News"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          LATEST NEWS & UPDATES
        </Link>

        <Link
          href="/contact-us"
          onClick={closeDropdown}
          className="text-white text-sm font-bold"
        >
          CONTACT US
        </Link>
      </div>
    </>
  );
}

export default NavbarDropdown;
