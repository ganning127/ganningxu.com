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
            <NavLink
              key={navContent.title}
              title={navContent.title}
              href={navContent.href}
              external={navContent.external}
              isActive={isActive(navContent.href)}
            />
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
            <NavLink
              key={navContent.title}
              title={navContent.title}
              href={navContent.href}
              external={navContent.external}
              isActive={isActive(navContent.href)}
            />
          ))}
        </div>
      </div>

      <hr className="mb-8 mt-4" />
    </>
  );
};

const NavLink = ({
  title,
  href,
  external,
  isActive,
}: {
  title: string;
  href: string;
  external: boolean;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-black text-md bg-white hover:bg-gray-200 px-2 py-1 rounded-md",
        isActive && "bg-sky-100"
      )}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      aria-current={isActive ? "page" : undefined}
    >
      {title}
    </Link>
  );
};

const NAV_CONTENTS = [
  {
    title: "Home",
    href: "/",
    external: false,
  },
  {
    title: "Projects",
    href: "/projects",
    external: false,
  },
  {
    title: "Resume",
    href: "/GanningXuNewGradResume.pdf",
    external: true,
  },
  {
    title: "Cycling",
    href: "/cycling",
    external: false,
  },
  {
    title: "Traveling",
    href: "/traveling",
    external: false,
  },
  {
    title: "Aviation",
    href: "/aviation",
    external: false,
  },
];
