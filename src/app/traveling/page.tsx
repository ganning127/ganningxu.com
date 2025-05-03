import { Heading } from "@/components/Typography/Heading";
import { GlobeSection } from "@/components/Sections/GlobeSection";
import { Metadata } from "next";

const siteDesc =
  "Places I've been over the years. Click on a location to see when I went there!!";

export const metadata: Metadata = {
  title: "Traveling",
  description: siteDesc,
};

export default function GlobeView() {
  return (
    <div>
      <Heading.H1>Traveling</Heading.H1>
      <p className="text-gray-500 mt-4">{siteDesc}</p>

      <GlobeSection />
    </div>
  );
}
