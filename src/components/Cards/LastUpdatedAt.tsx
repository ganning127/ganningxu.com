"use client";
import { Link } from "../Typography/Link";

export const LastUpdatedAt = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  return (
    <p className="text-green-500 font-semibold px-2 bg-green-100 inline-block rounded-md">
      <span className="animate-pulse">●</span>
      {"   "}
      Live data from my{" "}
      <Link
        href="https://www.strava.com/athletes/52460422"
        className="underline text-green-500"
      >
        Strava profile
      </Link>{" "}
      (last updated {time})
    </p>
  );
};
