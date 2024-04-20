import Link from "next/link";
import PatientBio from "@/components/patientBio";
import PatientProblems from "@/components/patientProblem";
import PatientXray from "@/components/patientXray";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { cookies } from "next/headers";

const Patient = async ({ searchParams }: { searchParams: any }) => {

  const token = cookies().get("token");

  const response = await fetch(
    `http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=${searchParams.checkupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );

  const report = await response.json();
  // console.log(report.data.diagonsis.predictions[0].metadata.modelClasses.diagnostic);

  return (
    <div className="sm:py-6 sm:px-8 px-1 py-4">
      <Link
        className="hover:underline text-xl flex items-center"
        href={`/patient-report?checkupId=${searchParams.checkupId}`}
      >
        <ChevronLeft className="mr-1 font-bold h-8 w-8" />
        Back
      </Link>
      <div className="md:p-10 px-2 py-4 flex gap-6 flex-wrap md:justify-around sm:justify-center">
        <div className="sm:w-[450px] w-[370px] flex-wrap">
          <PatientBio />
          <Button
            variant="outline"
            className="w-full my-4 flex justify-between text-lg items-center border-none p-7 rounded-xl"
          >
            Video Call <ArrowRight size={32} className="text-[#21B9C6]" />
          </Button>
          <Button
            variant="outline"
            className="w-full my-4 flex justify-between text-lg items-center border-none p-7 rounded-xl"
          >
            Chat <ArrowRight className="text-[#21B9C6]" size={32} />
          </Button>
        </div>

        <div className="flex flex-col gap-y-4 w-[450px]">
          {report.data.diagonsis.predictions.map((predictions:any,index:any)=>{
            return <PatientXray key={index} imageUrl="/xray3.png" predictions={predictions}/>
          })}

        </div>
        <div className="flex flex-col gap-y-3 w-[450px]">
          {report.data.diagonsis.diagnosisTreatment.map((treatments:any, index:number)=>{
            return <PatientProblems treatments = {treatments} key={index}/>
          })}

        </div>
      </div>
    </div>
  );
};

export default Patient;
