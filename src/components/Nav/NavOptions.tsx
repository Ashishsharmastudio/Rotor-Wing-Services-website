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
      <Link
        href="/about-us"
        className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100"
      >
        About Us
      </Link>

      {/* Services Dropdown */}
      <Link
        href="/services"
        className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100"
      >
        Services
      </Link>

      {/* Industries Dropdown */}
      <Link
        href="/Our-Team"
        className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100"
      >
        Our Team
      </Link>

      

      {/* Resources Dropdown */}
      <Link
        href="/Latest-News"
        className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap hover:text-blue transition-all duration-100"
      >
        Latest News & Updates
      </Link>

      {/* Contact Us */}
      <Link
        href="/contact-us"
        className="flex items-center text-white text-nowrap hover:text-blue transition-all duration-100 text-[16px]"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default NavOptions;
