import Image from "next/image";
import { Button } from "./ui/button";

const PatientComplaints = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="mr-6">
        <div className="flex felx-row items-center justify-between">
          <h1 className="text-xl font-semibold">Complaints</h1>
          <Button
            className="text-[#21B9C6] underline hover:text-[#21B9C6]  hover:bg-white"
            variant="ghost"
            size="sm"
          >
            View All
          </Button>
        </div>
        <h5 className="my-3 font-medium ">Tooth 15</h5>
        <div className="grid md:grid-cols-2  gap-4">
          <button className="bg-[#F0F4FC] py-2 px-4 rounded-full">Pain</button>
          <button className="bg-[#F0F4FC] py-2 px-4 rounded-full">
            Cavity
          </button>
          <button className="bg-[#F0F4FC] py-2 px-4 rounded-full">
            Bleeding
          </button>
          <button className="bg-[#F0F4FC] py-2 px-4 rounded-full">
            Sensitivity
          </button>
          <button className="bg-[#F0F4FC] py-2 px-4 rounded-full">
            Broken
          </button>
        </div>
      </div>
      <Image
        className="flex justify-center items-center mx-3 my-5"
        src="tooths.svg"
        alt=""
        width={170}
        height={100}
      />
    </div>
  );
};

export default PatientComplaints;
