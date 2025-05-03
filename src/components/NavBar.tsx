"use client";

import { usePathname } from "next/navigation";
import { Link } from "./Typography/Link";
import { cn } from "@/lib/utils";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between">
        <p className="text-sky-500 font-bold text-lg">
          <Link href="/">Ganning Xu</Link>
        </p>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row gap-2">
          {NAV_CONTENTS.map((navContent) => (
            <Link
              key={navContent.title}
              href={navContent.href}
              className={cn(
                "text-black text-md bg-white hover:bg-gray-200 px-2 py-1 rounded-md",
                isActive(navContent.href) && "bg-sky-100"
              )}
            >
              {navContent.title}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl hover:cursor-pointer hover:bg-sky-200 p-2 rounded-md transition-colors focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 max-h-96 mt-4"
            : "opacity-0 max-h-0 mt-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2">
          {NAV_CONTENTS.map((navContent) => (
            <Link
              key={navContent.title}
              href={navContent.href}
              className={cn(
                "text-black text-md bg-white hover:bg-gray-200 px-2 py-1 rounded-md transition-colors",
                isActive(navContent.href) && "bg-sky-100"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {navContent.title}
            </Link>
          ))}
        </div>
      </div>

      <hr className="mb-8 mt-4" />
    </>
  );
};

const NAV_CONTENTS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Cycling",
    href: "/cycling",
  },
  {
    title: "Traveling",
    href: "/traveling",
  },
];
