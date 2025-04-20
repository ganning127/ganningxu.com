import { cn } from "@/lib/utils"; // or use clsx if you prefer

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading = {
  H1: ({ children, className }: HeadingProps) => (
    <h1 className={cn("text-3xl md:text-5xl", className)}>{children}</h1>
  ),
  H2: ({ children, className }: HeadingProps) => (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
  ),
  H3: ({ children, className }: HeadingProps) => (
    <h3 className={cn("text-xl font-bold", className)}>{children}</h3>
  ),
  H4: ({ children, className }: HeadingProps) => (
    <h4 className={cn("text-lg font-bold", className)}>{children}</h4>
  ),
};
