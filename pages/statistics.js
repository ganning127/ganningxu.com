import Head from "next/head";
import { NavBar } from "../components/NavBar";
import
{
  Container,
  SimpleGrid,
  useColorMode,
  Link,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { StatsCard } from "../components/Cards/StatsCard";
import useSWR from "swr";
import fetcher from "../scripts/fetcher";
import format from "comma-number";

export default function Statistics()
{
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#15161a",
    dark: "white",
  };

  const { data } = useSWR("/api/strava", fetcher);

  const longestRide = metersToMiles(data?.longestRide); // in meters
  const rideCount = data?.rideCount;
  const rideDistance = metersToMiles(data?.rideDistance); // in meters
  const rideSecs = secsToHours(data?.rideSecs); // in seconds
  const swimCount = data?.swimCount;
  const swimDistance = metersToMiles(data?.swimDistance); // in meters
  const swimSecs = secsToHours(data?.swimSecs); // in seconds

  return (
    <>
      <Head>
        <title>Statistics</title>
        <meta property="og:title" content="Ganning Xu" />
        <meta property="og:site_name" content="ganning.me" />
        <meta property="og:url" content="http://ganning.me/" />
        <meta
          property="og:description"
          content="Welcome to my website, feel free to take a look around!"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="home" />
      <Container maxW="container.xl" px="8">
        <Heading fontSize="4xl" as="h1" color={textColor[colorMode]} mt={16}>
          Here are some of my{" "}
          <Link
            href="https://www.strava.com/athletes/52460422"
            isExternal
            color="blue.light"
            _hover={{ color: "blue.dark" }}
          >
            Strava
          </Link>{" "}
          statistics, updated in real-time.
        </Heading>

        {data ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={8}
            mt={8}
          >
            <StatsCard
              title="Total Distance Biked"
              value={format(rideDistance.toFixed(2)) + " miles"}
              url="https://www.strava.com/athletes/52460422"
              type="ride"
            />

            <StatsCard
              title="Number of Bike Rides"
              value={format(rideCount) + " rides"}
              url="https://www.strava.com/athletes/52460422"
              type="ride"
            />

            <StatsCard
              title="Total Time Biked"
              value={format(rideSecs.toFixed(2)) + " hours"}
              url="https://www.strava.com/athletes/52460422"
              type="ride"
            />

            <StatsCard
              title="Longest Single Bike Ride"
              value={format(longestRide.toFixed(2)) + " miles"}
              url="https://www.strava.com/athletes/52460422"
              type="ride"
            />


            <StatsCard
              title="Tracked Swim Distance"
              value={format(swimDistance.toFixed(2)) + " miles"}
              url="https://www.strava.com/athletes/52460422"
              type="swim"
            />
            <StatsCard
              title="Tracked Swims"
              value={format(swimCount) + " swims"}
              url="https://www.strava.com/athletes/52460422"
              type="swim"
            />
            <StatsCard
              title="Tracked Swim Time"
              value={format(swimSecs.toFixed(2)) + " hours"}
              url="https://www.strava.com/athletes/52460422"
              type="swim"
            />
          </SimpleGrid>
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
}

const metersToMiles = (meters) =>
{
  if (meters)
  {
    return meters / 1609.344;
  }
  return 0;
};

const secsToHours = (secs) =>
{
  if (secs)
  {
    return secs / 3600;
  }
  return 0;
};
