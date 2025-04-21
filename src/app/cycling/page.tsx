import { RideCard } from "@/components/Cards/RideCard";
import { Ride } from "@/interfaces/Ride";
import { formatDistanceToNowStrict } from "date-fns";
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
import { formatStravaLocalDate } from "@/lib/utils";

const images = [
  "/images/bike-bridge.jpg",
  "/images/bike-city.jpg",
  "/images/bike-tilted.jpg",
  "/images/bike-train.jpg",
];

export const metadata: Metadata = {
  title: "Cycling",
};

export default async function Cycling() {
  const access_token = await getBearerToken();
  if (!access_token) {
    throw new Error("Failed to get access token");
  }

  const stats = await getStats(access_token);
  const latestActivities = await getLatestActivities(access_token);

  const lastBikeRideAgoFormatted = formatDistanceToNowStrict(
    new Date(latestActivities[0].start_date),
    {
      addSuffix: true,
    }
  );

  const totalDistanceBiked = metersToMiles(stats.all_ride_totals.distance);
  const totalTimeBiked = secondsToHours(stats.all_ride_totals.elapsed_time);
  const longestRideDistance = metersToMiles(stats.biggest_ride_distance);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <LastUpdatedAt />
        <h1 className="text-3xl md:text-5xl mt-4">Cycling</h1>
        <p className="text-gray-500 mt-4">
          Since I got my Trek Émonda road bike in 2019, it has become my main
          form of transportation. I bike around campus to classes, to Publix to
          get groceries, to Chipotle for my favorite burrito, and pretty much
          everywhere else I go!
        </p>
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

      <section className="grid grid-row grid-cols-2 md:grid-cols-4 gap-2">
        <StatsBox
          title="Last Bike Ride"
          value={lastBikeRideAgoFormatted}
          subtext={
            <>
              at {formatStravaLocalDate(latestActivities[0].start_date_local)}
              <br />
              (my local time)
            </>
          }
        />
        <StatsBox title="Total Time Biked" value={totalTimeBiked} />

        <StatsBox
          title="Total Distance Biked"
          value={`${totalDistanceBiked.toFixed(0)} miles`}
          subtext={`or ${milesToTimesAcrossUSA(totalDistanceBiked).toFixed(
            1
          )} times across the USA`}
        />

        <StatsBox
          title="Longest Single Ride"
          value={`${longestRideDistance.toFixed(0)} miles`}
        />
      </section>

      <section>
        <Heading.H2>Latest Rides</Heading.H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {latestActivities.map((ride: Ride) => {
            return <RideCard ride={ride} key={ride.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

const StatsBox = ({
  title,
  value,
  subtext,
}: {
  title: string;
  value: string;
  subtext?: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col text-center justify-center border-2 border-gray-100 p-2 rounded-md hover:shadow-md transition-shadow">
      <h2 className="text-md text-gray-500">{title}</h2>
      <p className="text-xl md:text-3xl font-bold">{value}</p>
      {subtext && <p className="text-sm text-gray-500 mt-1">{subtext}</p>}
    </div>
  );
};

async function getBearerToken() {
  // returns string (bearer token)
  const tokenRes = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  if (!tokenRes.ok) {
    throw new Error("Failed to refresh token");
  }

  const { access_token } = await tokenRes.json();

  return access_token;
}

async function getStats(access_token: string) {
  const statsRes = await fetch(
    `https://www.strava.com/api/v3/athletes/52460422/stats`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (!statsRes.ok) {
    throw new Error("Failed to fetch stats");
  }

  const stats = await statsRes.json();
  return stats;
}

async function getLatestActivities(access_token: string) {
  const date = new Date();
  const timestampMilliseconds = date.getTime();
  const timestampSeconds = Math.floor(timestampMilliseconds / 1000);

  const latestActivitiesResp = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?before=${timestampSeconds}&per_page=10`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  if (!latestActivitiesResp.ok) {
    console.log(latestActivitiesResp);
    throw new Error("Failed to fetch latest activities");
  }
  const latestActivities = await latestActivitiesResp.json();
  return latestActivities;
}

function metersToMiles(meters: number) {
  const miles = meters / 1609.344;
  return miles;
}

function secondsToHours(seconds: number): string {
  return (seconds / 3600).toFixed(1) + " hours"; // 3600 seconds in an hour
}

function milesToTimesAcrossUSA(miles: number): number {
  const timesAcrossUSA = miles / 2800; // 3000 miles across the USA
  return timesAcrossUSA;
}
