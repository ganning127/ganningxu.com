"use client";

import NextLink from "next/link";
import { cn } from "@/lib/utils"; // or use clsx
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink> & {
  className?: string;
};

export function Link({ className, ...props }: LinkProps) {
  const { href, children, ...rest } = props;
  const hrefString = href.toString();
  const isExternalLink =
    hrefString.startsWith("http") || hrefString.startsWith("www");

  if (!href) {
    return children;
  }

  if (isExternalLink) {
    return (
      <a
        className={cn(
          "text-sky-600 hover:text-sky-800 transition-colors ",
          className
        )}
        href={hrefString}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      className={cn(
        "text-sky-600  hover:sky-800 transition-colors ",
        className
      )}
      {...props}
    />
  );
}
