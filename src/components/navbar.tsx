"use client";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Navbar = () => {
  // create a responsive navbar including the following links: Popular, Now Playing, Top Rated, Upcoming
  const links = [
    { name: "Popular", href: "/#popular" },
    { name: "Now Playing", href: "/#now-playing" },
    { name: "Top Rated", href: "/#top-rated" },
    { name: "Upcoming", href: "/#upcoming" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between w-full p-6 bg-gray-900/75 backdrop-blur-sm md:px-24">
      <div className="flex flex-row flex-wrap justify-start w-full gap-4 md:flex-row">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <span className="text-2xl font-bold text-red-500 cursor-pointer">
              M
            </span>
          </Link>
        </div>
        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="md:hidden" onClick={toggle}>
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
          <div className="flex-row items-center justify-center hidden gap-4 md:flex md:flex-row">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Menu Mobile */}
        <div className={`${isOpen ? "flex" : "hidden"} md:hidden w-full`}>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
