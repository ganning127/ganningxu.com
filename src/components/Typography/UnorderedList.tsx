import { cn } from "@/lib/utils";

export const UnorderedList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ul className={cn("list-disc pl-5", className)}>{children}</ul>;
};
