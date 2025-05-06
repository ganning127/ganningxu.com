"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

interface ImageType {
  src: string;
  alt: string;
}

export const PlaneImagesSection = () => {
  const [numCols, setNumCols] = useState(3);
  const [imagesPerColumn, setImagesPerColumn] = useState<ImageType[][]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumCols(2);
      } else {
        setNumCols(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const tempColImages = [];
    for (let i = 0; i < numCols; i++) {
      tempColImages.push([]);
    }

    for (let i = 0; i < images.length; i++) {
      // @ts-expect-error This is fine
      tempColImages[i % numCols].push(images[i]);
    }

    setImagesPerColumn(tempColImages);
  }, [numCols]);

  return (
    <>
      <div className={`grid grid-cols-${numCols} gap-4 mt-4`}>
        {imagesPerColumn.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  className="rounded-md"
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 clicked:opacity-100 transition-opacity rounded-b-md">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
