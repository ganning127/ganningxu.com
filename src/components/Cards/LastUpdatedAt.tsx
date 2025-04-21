"use client";
import { useEffect, useState } from "react";
import { Link } from "../Typography/Link";

export const LastUpdatedAt = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const localTime = new Date().toLocaleTimeString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    setTime(localTime);
  }, []);

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
      {time && `(last updated ${time})`}
    </p>
  );
};
