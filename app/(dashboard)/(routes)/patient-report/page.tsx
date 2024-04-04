import PatientProblemsEditable from "@/components/patient-problem-editable";
import RiskReports from "@/components/risks-reports";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const PatientReport = () => {

  
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <Link
          className="hover:underline flex text-xl items-center"
          href="/patient-analysis"
        >
          <ChevronLeft className="font-bold w-8 h-8 mr-1" />
          Back
        </Link>
        <Link
          className="hover:underline px-6 rounded-full text-xl flex items-center"
          href="/patient"
        >
          Submit
        </Link>
      </div>
      <div className="flex flex-col px-6 py-8 flex-wrap">
        <div className="flex border-b-2 mb-4">
          <h1 className=" flex text-3xl font-bold text-[#21B9C6]">
            Alfred Rodgriguez
            <span className=" text-slate-500 text-sm flex items-end  ml-4">
              DOB:<p className="ml-2 text-black"> 9/2/1975</p>
            </span>
          </h1>
          <h1 className="text-2xl font-bold ml-[4rem]">Diagnosis</h1>
          <h1 className="text-2xl font-bold ml-[22rem]">Risks</h1>
        </div>
        <div className="flex gap-x-5">
          <div className="bg-white p-5 rounded-sm border shadow-xs h-[750px] max-w-[24%]">
            <h3 className="text-2xl text-[#21B9C6] font-bold border-b-2">
              Medical history
            </h3>
            <div className="px-4 py-2">
              <ul className="text-lg font-bold list-disc">
                <li>
                  Do you have any long term health condition or any disability
                  that you would like to make us aware of?
                </li>
              </ul>
              <ul className="text-lg list-disc">
                <li className="flex">
                  <Check className="mr-2" /> MI/Angina
                </li>
                <li className="flex">
                  <Check className="mr-2" />
                  Artificial heart Valves
                </li>
                <li className="flex">
                  <Check className="mr-2" />
                  Respiratory Disorder
                </li>
                <li className="flex">
                  <Check className="mr-2" />
                  Epilepsy
                </li>
                <li className="flex">
                  <Check className="mr-2" />
                  Fainting Disorders
                </li>
              </ul>
            </div>
            <div className="p-4">
              <ul className="text-lg list-disc">
                <li className="font-bold ">
                  Are you taking any of the following?
                </li>
              </ul>
              <ul className="text-lg list-disc">
                <li className="flex">
                  <Check className="mr-2" />
                  Aspirin
                </li>
                <li className="flex">
                  <Check className="mr-2" size={42} />
                  Oral birth control drugs or other hormonal therapy
                </li>
              </ul>
            </div>
            <div className="px-4">
              <ul className=" list-disc">
                <li className="text-lg font-bold">
                  Are you allergic or have any adverse reaction to
                </li>
              </ul>
              <ul className="text-lg list-disc">
                <li className="flex">
                  <Check className="" />
                  Codeine or other narcotics
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
            <PatientProblemsEditable />
            <PatientProblemsEditable />
          </div>
          <div>
            <RiskReports />
            <RiskReports />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReport;
