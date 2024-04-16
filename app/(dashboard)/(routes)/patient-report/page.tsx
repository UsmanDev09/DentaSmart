import PatientProblemsEditable from "@/components/patientProblemEditable";
import Riskcheckups from "@/components/risks-reports";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";

import { Key } from "react";

async function Patientcheckup({ searchParams }: { searchParams: any }) {
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

  const patient = report.data.member;

  const medicalHistory = report.data.medical_history;

  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <Link
          className="hover:underline flex text-xl  items-center"
          href={`/patient-analysis?checkupId=${searchParams.checkupId}`}
        >
          <ChevronLeft className="font-bold w-8 h-8 mr-1" />
          Back
        </Link>
        <Link
          className="hover:underline px-6 py-2 rounded-full text-xl bg-[#21B9C6] text-white flex items-center"
          href={`/patient?checkupId=${searchParams.checkupId}`}
        >
          Submit
        </Link>
      </div>
      <div className="flex flex-col px-6 py-8 flex-wrap">
        <div className="flex border-b-2 mb-4">
          <h1 className=" flex text-3xl font-bold text-[#21B9C6]">
            {patient.full_name}
            <span className=" text-slate-500 text-sm flex items-end  ml-6">
              DOB:<p className="ml-2 text-black"> {patient.dob}</p>
            </span>
          </h1>
          <h1 className="text-2xl font-bold ml-[4rem]">Diagnosis</h1>
          <h1 className="text-2xl font-bold ml-[22rem]">Risks</h1>
        </div>
        <div className="flex mt-5 gap-x-4">
          <div className="flex flex-col gap-y-5 justify-between max-w-[22%]">
            <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
              {medicalHistory.map((history: any, index: number) => {
                return (
                  <div key={index}>
                    <h3 className="text-2xl text-[#21B9C6] font-bold">
                      Medical history
                    </h3>
                    <Separator className="my-2" />
                    {history.answers.map((q: any, index: Key) => {
                      return (
                        <div className="p-4" key={index}>
                          <ul className="text-lg list-disc">
                            <li className="font-bold ">{q.question} </li>
                          </ul>
                          <ul className="text-lg list-disc">
                            {q.answer.map((answers: any, index: Key) => {
                              return (
                                <li key={index} className="flex">
                                  <Check className="mr-2 w-6 h-6" />
                                  {answers}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-5">
            <PatientProblemsEditable />
            <PatientProblemsEditable />
          </div>
          <div>
            <Riskcheckups />
            <Riskcheckups />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patientcheckup;
