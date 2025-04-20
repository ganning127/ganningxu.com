import Image from "next/image";
import { Link } from "../Typography/Link";
import { cn } from "@/lib/utils"; // assuming you're using a `cn` utility like clsx/twMerge

export const HobbyCard = ({
  title,
  description,
  imgSrc,
  href,
}: {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}) => {
  const imgSize = 50;
  const isClickable = href !== "";

  const content = (
    <div
      className={cn(
        "flex flex-row items-center gap-2 rounded-md p-2 border-1 border-gray-200",
        isClickable && "hover:cursor-pointer hover:bg-sky-200 transition-colors"
      )}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={imgSize}
        height={imgSize}
        className="rounded-sm"
      />
      <div>
        <p className="text-black font-semibold">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return isClickable ? <Link href={href}>{content}</Link> : content;
};
