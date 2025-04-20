import { cn } from "@/lib/utils"; // Optional: for combining classNames

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full md: max-w-5xl p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
