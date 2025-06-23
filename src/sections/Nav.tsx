"use client";

import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import Image from "next/image";

const Nav = () => {
  const [search, setSearch] = useState("");
  const [searchBar, setSearchBar] = useState(false);

  const highlightText = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    const contentElements = bodyElement.getElementsByTagName("*");

    let firstMatchFound = false;

    Array.from(contentElements).forEach((element) => {
      const textContent = element.textContent;

      if (textContent) {
        const index = textContent.toLowerCase().indexOf(search.toLowerCase());

        if (index !== -1 && !firstMatchFound) {
          const regex = new RegExp(`(${search})`, "gi");

          element.innerHTML = element.innerHTML.replace(
            regex,
            "<mark>$1</mark>"
          );

          element.scrollIntoView({ behavior: "smooth", block: "center" });

          firstMatchFound = true;
        }
      }
    });
  };

  return (
    <header className="bg-black sticky top-0 z-50 px-5 md:px-10 lg:px-20">
      <nav className="text-white flex items-center justify-between py-4 sm:py-3 lg:pt-2 max-w-[1800px] mx-auto">
        <Link id="logo" className="flex-1 min-w-32 max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72 mr-4 flex items-center" href={"/"}>
          <Image
            src="/Logo 2.PNG"
            alt="Rotor Wing Services Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "65%", height: "auto", maxWidth: "280px" }} // adjust maxWidth as needed
            priority
          />
        </Link>

        {/* Centered Navigation Options with Increased Font Size */}
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:block text-lg lg:text-xl">
            <NavOptions />
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className="lg:hidden">
          <NavbarDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
