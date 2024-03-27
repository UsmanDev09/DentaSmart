"use client";
import PatientBio from "@/components/patient-bio";
import PatientProblems from "@/components/patient-problem";
import PatientXray from "@/components/patient-xray";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Patient = () => {
  // const { id } = query;

  // const onBack = () => {
  //   router.push("/patient-analysis");
  // };
  // const handleNavigation = () => {
  //   if (typeof window !== "undefined")
  //     window.location.replace("/patient-analysis");
  // };
  const router = useRouter();

  const onBack = () => {
    router.push("/patient-analysis");
  };
  const onSubmit = () => {
    router.push("/patient-report");
  };

  return (
    <div className="sm:p-6 px-1 py-4">
      <Button
        // onClick={() => handleNavigation()}
        variant="ghost"
        className="hover:underline text-xl flex items-center"
        onClick={onBack}
      >
        <ChevronLeft className="mr-1 font-bold h-8 w-8" />
        Back
      </Button>
      <div className="md:p-12 px-2 py-4 flex gap-6 flex-wrap md:justify-around sm:justify-center">
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
          <PatientXray imageUrl="/xray3.png" />
          <PatientXray imageUrl="/xray4.jpg" />
        </div>
        <div className="flex flex-col gap-y-4 w-[450px]">
          <PatientProblems />
          <PatientProblems />
          <div className="flex justify-end my-5">
            <Button
              variant="login"
              className="rounded-full px-9 py-4 text-base transition hover:opacity-80 font-semibold"
              onClick={onSubmit}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
