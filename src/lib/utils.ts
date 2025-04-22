import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatStravaLocalDate(date: string) {
  // Split date and time
  const [fullDate, timeWithZone] = date.split("T");
  const [hourStr, minuteStr] = timeWithZone.split(":");
  const [year, month, day] = fullDate.split("-");

  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  const monthName = monthToString(parseInt(month) - 1); // Month is 0-indexed in JavaScript

  // Convert to 12-hour format
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) hour = 12;

  return `${monthName.slice(0, 3)} ${day}, ${year}, ${hour}:${minute.toString().padStart(2, "0")} ${period}`;
}

function monthToString(month: number): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
}