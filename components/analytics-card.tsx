import { UserRound } from "lucide-react";
import Image from "next/image";

interface AnalyticalCardProps {
  totalNumber: number;
  description: string;
}

const AnalyticalCard = () => {
  return (
    <div className=" bg-white flex justify-around items-center p-5 border rounded-sm shadow-sm w-[317px]">
      <div className="relative">
        <UserRound className=" text-white absolute top-3 left-3 font-extrabold" />
        <Image src="polygon.svg" alt="" width={49} height={52} />
      </div>
      <div className="">
        <h2 className="text-lg font-bold text-[#21B9C6] ">682,4610</h2>
        <p className=" disabled:text-foreground text-xs text-slate-400">
          Total Number of Patients
        </p>
      </div>
    </div>
  );
};

export default AnalyticalCard;
