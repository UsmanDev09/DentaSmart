import PatientProblemsEditable from "@/components/patient-problem-editable";
import Riskcheckups from "@/components/risks-reports";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";

async function Patientcheckup() {
  const token = cookies().get("token");

  const response = await fetch(
    "http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=8",
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

  const health_concerns = report.data.medical_history[0].health_concerns;

  const health_question_1 = report.data.medical_history[0].answers[1].question;
  const health_answers_1 = report.data.medical_history[0].answers[0].answer;

  const health_question_2 = report.data.medical_history[0].answers[1].question;
  const health_answers_2 = report.data.medical_history[0].answers[1].answer;
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <Link
          className="hover:underline flex text-xl  items-center"
          href="/patient-analysis"
        >
          <ChevronLeft className="font-bold w-8 h-8 mr-1" />
          Back
        </Link>
        <Link
          className="hover:underline px-6 py-2 rounded-full text-xl bg-[#21B9C6] text-white flex items-center"
          href="/patient"
        >
          Submit
        </Link>
      </div>
      <div className="flex flex-col px-6 py-8 flex-wrap">
        <div className="flex border-b-2 mb-4">
          <h1 className=" flex text-3xl font-bold text-[#21B9C6]">
            {patient.full_name}
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
                {health_concerns.map(
                  (issues: string, index: number | null | undefined) => {
                    return (
                      <li key={index} className="flex">
                        <Check className="mr-2" />
                        {issues}
                      </li>
                    );
                  }
                )}
                {/* <li className="flex">
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
                </li> */}
              </ul>
            </div>
            <div className="p-4">
              <ul className="text-lg list-disc">
                <li className="font-bold ">{health_question_1}</li>
              </ul>
              {health_answers_1.map((answer1: string, index: number) => {
                return (
                  <ul key={index} className="text-lg list-disc">
                    <li className="flex">
                      <Check className="mr-2 w-6 h-6" />
                      {answer1}
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="px-4">
              <ul className=" list-disc">
                <li className="text-lg font-bold">{health_question_2}</li>
              </ul>
              {health_answers_2.map((answer2: string, index: number) => {
                return (
                  <ul key={index} className="text-lg list-disc">
                    <li className="flex">
                      <Check className="mr-2 w-6 h-6" />
                      {answer2}
                    </li>
                  </ul>
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
