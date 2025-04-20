"use client";

import { usePathname } from "next/navigation";
import { Link } from "./Typography/Link";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="flex flex-row items-center justify-end mb-8">
      <div className="flex flex-row gap-2">
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
    </nav>
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
];
