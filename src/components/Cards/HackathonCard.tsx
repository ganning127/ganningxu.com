import { Hackathon } from "@/interfaces/Hackathon";
import Image from "next/image";
import { Link } from "../Typography/Link";

export const Hackathoncard = ({ hackathon }: { hackathon: Hackathon }) => {
  const imgSize = 50;

  return (
    <Link href={hackathon.project}>
      <div className="flex flex-row gap-4 items-center border-2 border-gray-100 p-1 rounded-md hover:bg-sky-200  transition-colors">
        <div className="flex-shrink-0">
          <Image
            src={hackathon.logo}
            alt={hackathon.hackathon}
            width={imgSize}
            height={imgSize}
            className="rounded-md"
          />
        </div>
        <div className=" w-full">
          <p className="text-black font-semibold">{hackathon.hackathon}</p>
          <p className="text-gray-600">{hackathon.place}</p>
          <p className="text-gray-400 text-sm">{hackathon.timeframe}</p>
        </div>
      </div>
    </Link>
  );
};
