import Image from "next/image";
import { Button } from "./ui/button";

const PatientComplaints = ({report}:{report:any}) => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="mr-6">
        <div className="flex felx-row items-center justify-between mb-3">
          <h1 className="text-xl font-semibold">Complaints</h1>
          <Button
            className="text-[#21B9C6] underline hover:text-[#21B9C6]  hover:bg-white"
            variant="ghost"
            size="sm"
          >
            View All
          </Button>
        </div>
        <div className="grid md:grid-cols-2  gap-4">
          {report.data.complaints.map((complaint:any, index:number)=>{
            return (
              <button key={index} className="bg-[#F0F4FC] py-2 px-4 rounded-full">
                {complaint}
              </button>
              )})
          }
        </div>
      </div>
      <Image
        className="flex justify-center items-center mx-3 my-5 w-[210px] h-[210px]"
        src="tooths.svg"
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};

export default PatientComplaints;
