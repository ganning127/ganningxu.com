import { PageHeader } from "@/components/Sections/PageHeader";
import { Metadata } from "next";

const siteDesc =
  "I've loved planes since I was little. I've spent many childhood hours at my home airport's observation deck. I love taking photos of planes. I also love flying with Georgia Tech's Yellow Jacket Flying Club!";

export const metadata: Metadata = {
  title: "Aviation",
  description: siteDesc,
};

const images = [
  {
    src: "/images/aviation/sea-pvg-339.jpg",
    alt: "Delta A330-900 flying over the mountains after taking off from Seattle-Tacoma International Airport",
  },
  {
    src: "/images/aviation/dl-350.jpg",
    alt: "Delta A350 at Seattle-Tacoma International Airport's gate",
  },
  {
    src: "/images/aviation/airfrance-777-atl.jpg",
    alt: "Air France 777 at Atlanta Hartsfield-Jackson International Airport",
  },
  {
    src: "/images/aviation/alaska-sseaplane.jpeg",
    alt: "Seaplane cockpit in Anchorage, AK",
  },
  {
    src: "/images/aviation/american-a320-rdu.jpg",
    alt: "American Airlines A320 at Raleigh-Durham International Airport",
  },
  {
    src: "/images/aviation/atlas-747.jpg",
    alt: "Atlas Air 747 at ATL International Airport",
  },

  {
    src: "/images/aviation/dl-757-atl.jpg",
    alt: "Delta 757 at Atlanta Hartsfield-Jackson International Airport",
  },
  {
    src: "/images/aviation/jetblue-a220.jpeg",
    alt: "JetBlue A220 at Climbing out of Boston Logan International Airport",
  },
  {
    src: "/images/aviation/frontier-a320.jpg",
    alt: "Frontier A320 at RDU Airport",
  },

  {
    src: "/images/aviation/korean-747-atl.jpg",
    alt: "Korean Air 747 at Atlanta Hartsfield-Jackson International Airport",
  },
  {
    src: "/images/aviation/ua-320-rdu.jpg",
    alt: "United Airlines A320 at Raleigh-Durham International Airport",
  },
];

export default function Aviation() {
  const numCols = 3;
  const imagesPerColumn: { src: string; alt: string }[][] = [];
  for (let i = 0; i < numCols; i++) {
    imagesPerColumn.push([]);
  }

  for (let i = 0; i < images.length; i++) {
    imagesPerColumn[i % numCols].push(images[i]);
  }

  return (
    <>
      <PageHeader title="Aviation" desc={siteDesc} />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {imagesPerColumn.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((image, index) => (
              <img
                key={index}
                className="h-auto max-w-full rounded-md"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
