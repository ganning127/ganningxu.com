import { PageHeader } from "@/components/Sections/PageHeader";
import { PlaneImagesSection } from "@/components/Sections/PlaneImagesSection";
import { Metadata } from "next";

const siteDesc =
  "I've loved planes since I was little. I've spent many childhood hours at my home airport's observation deck. I love taking photos of planes. I also love flying with Georgia Tech's Yellow Jacket Flying Club!";

export const metadata: Metadata = {
  title: "Aviation",
  description: siteDesc,
};

export default function Aviation() {
  return (
    <>
      <PageHeader title="Aviation" desc={siteDesc} />
      <PlaneImagesSection />
    </>
  );
}
