// import { useState } from "react";
// import Datetime from "react-datetime";

import { DropdownMenu } from "@radix-ui/themes";
import {
  ArrowDown,
  ArrowDown01,
  Calendar,
  ChevronDown,
  DropletIcon,
} from "lucide-react";

// import "react-datepicker/dist/react-datepicker.css";
const Date = () => {
  // const date: Date = new Date();
  // const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className="flex border p-3 rounded-full">
      <Calendar className="text-[]" />
      <p className="ml-4 text-sm"> 10 AUG 2023</p>
      <ChevronDown />
    </div>
  );
};

export default Date;
