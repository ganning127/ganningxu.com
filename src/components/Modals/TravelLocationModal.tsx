import { Place } from "@/interfaces/Place";
import { IoIosClose } from "react-icons/io";
import { UnorderedList } from "../Typography/UnorderedList";

export const TravelLocationModal = ({ place }: { place: Place | null }) => {
  if (!place) return null;

  return (
    <div className="mt-2 p-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-bold">{place.name}</h2>
      </div>
      <p>Times I&apos;ve been here:</p>
      <UnorderedList>
        {place.dates.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </UnorderedList>
    </div>
  );
};
