import { Check } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

interface PatientXrayProps {
  imageUrl: string;
}

const PatientXray = ({ imageUrl }: PatientXrayProps) => {
  return (
    <div className="bg-white p-4 rounded-xl ">
      <div className="flex justify-between ">
        <h3 className="text-lg font-bold">Analysis: X-Rays</h3>
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div className="flex justify-between my-4 items-center font-semibold text-lg">
        <h4>Findings</h4>
        <h4>Tooth Health</h4>
      </div>
      <div>
        <div className="flex justify-between items-center border-b py-3">
          <h5 className="flex">
            <Check className="mr-2 text-[#21B9C6]" />
            Implant
          </h5>
          <h5 className="">89%</h5>
        </div>
        <div className="flex justify-between items-center border-b py-3">
          <h5 className="flex">
            <Check className="mr-2 text-[#21B9C6] " />
            Restoration
          </h5>
          <h5>76%</h5>
        </div>

        <div className="flex justify-between items-center border-b py-3">
          <h5 className="flex">
            <Check className="mr-2 text-[#21B9C6]" />
            Filling
          </h5>
          <h5>68%</h5>
        </div>

        <div className="flex justify-between items-center py-2">
          <h5 className="flex">
            <Check className="mr-2 text-[#21B9C6]" />
            Implant
          </h5>
          <h5>65.8%</h5>
        </div>
      </div>
    </div>
  );
};

export default PatientXray;
