import { Place } from "@/interfaces/Place";
import { IoIosClose } from "react-icons/io";
import { UnorderedList } from "../Typography/UnorderedList";

export const TravelLocationModal = ({
  place,
  onClose,
}: {
  place: Place;
  onClose: () => void;
}) => {
  return (
    <div className="mt-2 p-4 border rounded-md max-w-xs">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-bold">{place.name}</h2>
        <IoIosClose
          className="h-8 w-8 cursor-pointer hover:text-red-500 transition-colors"
          onClick={onClose}
        />
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
