import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "@/components/Typography/Heading";
import Image from "next/image";
import { LastUpdatedAt } from "@/components/Cards/LastUpdatedAt";
import { Metadata } from "next";
import { StravaDataSection } from "@/components/Sections/StravaDataSection";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/Sections/PageHeader";

const images = [
  "/images/bike-bridge.jpg",
  "/images/bike-city.jpg",
  "/images/bike-tilted.jpg",
  "/images/bike-train.jpg",
];

export const dynamic = "force-dynamic"; // needs to be dynamic to get latest activities

const siteDesc =
  "Since I got my Trek Émonda road bike in 2019, it has become my main form of transportation. I bike around campus to classes, to Publix to get groceries, to Chipotle for my favorite burrito, and pretty much everywhere else I go!";

export const metadata: Metadata = {
  title: "Cycling",
  description: siteDesc,
};

export default async function Cycling() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <LastUpdatedAt />
        <PageHeader title="Cycling" desc={siteDesc} className="mt-2" />
      </div>

      <section className="hidden md:block">
        <Carousel>
          <CarouselContent className="px-12">
            <CarouselItem className="basis-1/3">
              <video
                className="rounded-md h-72 mx-auto"
                poster="/images/bike-thumbnail.jpeg"
                controls
              >
                <source src="/images/bike-clip.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CarouselItem>

            {images.map((image, index) => (
              <CarouselItem className="basis-1/3" key={index}>
                <div className="relative w-full h-72 rounded-md overflow-hidden">
                  <Image
                    src={image}
                    alt="Trek Émonda"
                    fill
                    className="rounded-md object-cover object-bottom"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 cursor-pointer" />
          <CarouselNext className="mr-12 cursor-pointer" />
        </Carousel>
      </section>

      <Suspense fallback={<StravaDataSkeleton />}>
        <StravaDataSection />
      </Suspense>
    </div>
  );
}

const StravaDataSkeleton = () => {
  const numCards = 4;
  const numRides = 10;

  return (
    <>
      <section className="grid grid-row grid-cols-2 md:grid-cols-4 gap-2">
        {Array.from({ length: numCards }).map((_, index) => (
          <div
            className="flex flex-col text-center justify-center border-2 border-gray-100 p-2 rounded-md hover:shadow-md transition-shadow"
            key={index}
          >
            <Skeleton className="h-6 w-24 mx-auto" />
            <Skeleton className="h-10 w-32 mx-auto mt-2" />
          </div>
        ))}
      </section>

      <section>
        <Heading.H2>Latest Activities</Heading.H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {Array.from({ length: numRides }).map((_, index) => (
            <div
              className="flex flex-col border-2 border-gray-100 p-4 rounded-md hover:shadow-md transition-shadow"
              key={index}
            >
              <Skeleton className="h-6 w-24 mx-auto" />
              <Skeleton className="h-10 w-full mt-2" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
