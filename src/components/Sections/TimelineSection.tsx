import Image from "next/image";
import { UnorderedList } from "../Typography/UnorderedList";

export const TimelineSection = () => {
  return (
    <ol className="relative border-s border-gray-200 ml-4 mt-2">
      {timelineItems.map((item, index) => (
        <li key={index} className="mb-8 ms-12">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6">
            <Image
              src={item.logo}
              alt={`${item.title} Logo`}
              width={36}
              height={36}
              className="rounded-full"
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
            {item.timeframe}
          </time>
          {item.content}
        </li>
      ))}
    </ol>
  );
};

const timelineItems = [
  {
    title: "Wealthfront",
    logo: "/images/wf-logo.png",
    timeframe: "Summer 2025, SWE Internship",
    content: null,
  },
  {
    title: "Fidelity Investments",
    logo: "/images/fidelity-logo.png",
    timeframe: "Summer 2024, SWE Internship",
    content: null,
  },
  {
    title: "CS Student @ Georgia Tech",
    logo: "/images/gt-logo.png",
    timeframe: "",
    content: (
      <UnorderedList className="text-gray-500">
        <li>
          <b>CS 2110 Computer Architecture</b> Teaching Assistant (Aug 2024 -
          May 2025)
        </li>
        <li>
          <b>Technology Co-Director of HexLabs</b> (we host HackGT for 1000+
          students yearly)
        </li>
        <li>
          <b>Apache Software Foundation</b> Committer for Apache Airavata
        </li>
      </UnorderedList>
    ),
  },
  {
    title: "iRODS",
    logo: "/images/irods-logo.png",
    timeframe: "Summer 2023, SWE Internship",
    content: null,
  },
];
