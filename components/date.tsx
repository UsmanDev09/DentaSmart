import { CalendarDays, ChevronDown } from "lucide-react";

const Date = () => {
  return (
    <div className="flex border p-3 rounded-full w-full">
      <CalendarDays className="text-[#21B9C6]" size={30} />
      <p className="ml-4 text-sm"> 10-AUG-2023</p>
      <ChevronDown className="text-[#21B9C6]" />
    </div>
  );
};

export default Date;
