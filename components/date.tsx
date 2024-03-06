import {
  ArrowDown,
  ArrowDown01,
  Calendar,
  CalendarCheckIcon,
  CalendarX2,
  ChevronDown,
  DropletIcon,
} from "lucide-react";

const Date = () => {
  return (
    <div className="flex border p-3 rounded-full w-full">
      <Calendar className="text-[#21B9C6]" />
      <p className="ml-4 text-sm"> 10-AUG-2023</p>
      <ChevronDown className="text-[#21B9C6]" />
    </div>
  );
};

export default Date;
