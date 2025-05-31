"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
const RideMap = dynamic(() => import("./RideMap"), { ssr: false });
import polyline from "@mapbox/polyline";

import { Ride } from "@/interfaces/Ride";
import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

export const RideCard = ({ ride }: { ride: Ride }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures this runs only after mounting
  }, []);

  if (!isClient) return null; // prevents early SSR/render crash

  const decoded = polyline.decode(ride.map.summary_polyline);

  return (
    <div>
      <div className="border-2 border-gray-100 p-3 rounded-md">
        <div className="flex flex-row justify-between mb-4">
          <h2 className="text-xl font-bold">{ride.name}</h2>
          <p className="text-gray-500 text-sm">
            {formatDistanceToNowStrict(new Date(ride.start_date), {
              addSuffix: true,
            })}
          </p>
        </div>

        <div className="grid grid-cols-3 mb-4">
          <KeyValuePair
            title="Distance"
            value={`${(ride.distance / 1609.34).toFixed(1)} miles`}
          />
          <KeyValuePair
            title="Time"
            value={`${Math.floor(ride.moving_time / 60)} minutes`}
          />
          <KeyValuePair
            title="Average Speed"
            value={`${(ride.average_speed * 2.23694).toFixed(1)} mph`}
          />
        </div>

        {decoded.length > 0 && <RideMap polyline={decoded} />}
      </div>
    </div>
  );
};

const KeyValuePair = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
};
