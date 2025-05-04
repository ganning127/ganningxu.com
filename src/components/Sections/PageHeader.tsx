import { Heading } from "../Typography/Heading";

export const PageHeader = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Heading.H1>{title}</Heading.H1>
      <p className="text-gray-600 mt-4">{desc}</p>
    </div>
  );
};
