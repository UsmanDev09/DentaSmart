"use client"
import { Separator } from "@radix-ui/react-separator";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import PatientProblemsEditable from "./patientProblemEditable";
import RiskReports from "./risks-reports";
import { Key } from "react";
import { useState } from "react";

const PatientCheckup = ({ report, searchParams, medicalHistory, patient, } : { searchParams : any; report:any; medicalHistory:any; patient:any; }) => {
  const { opg, general } = report.data.diagonsis.diagnosisTreatment;
  const [diagnosisTreatment, setDiagnosisTraeatment] = useState({ opg, general })
  const [problem, setProblem] = useState();


  const handleDeleteProblem = (opgIndex: number, diagnosisIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, index: number) => {
        if (index === opgIndex) {
            return {
                ...opgObj,
                differential_diagnosis: []
            };
        }
        return opgObj;
    });

    setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const handleDeleteRisks = (opgIndex: number, diagnosisIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, index: number) => {
      if (index === opgIndex) {
          return {
              ...opgObj,
              consequences: []
          };
      }
      return opgObj;
  });

  setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const handleSubmit = async () => {
    const response  = await fetch(`http://localhost:3000/api/diagnosisTreatment`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ diagnosis_treament: diagnosisTreatment, checkup_id: searchParams.checkupId  })
    })
    
  }

  const handleDeleteSpecificRisk = (index: number, consequenceIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, opgIndex: number) => {
      if (index === opgIndex) {
          return {
              ...opgObj,
              consequences: opgObj.consequences.filter((c: any, i: number) => i !== consequenceIndex)
          };
      }
      return opgObj;
    });

    setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const onAddProblem = (opgIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, index: number) => {
      if (index === opgIndex) {
          return {
              ...opgObj,
              differential_diagnosis: [...opgObj.differential_diagnosis, problem] 
          };
      }
      return opgObj;
    });

    setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const onAddRisk = (opgIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, index: number) => {
      if (index === opgIndex) {
          return {
              ...opgObj,
              consequences: [...opgObj.consequences, problem] 
          };
      }
      return opgObj;
    });

    setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const onDeleteSpecificProblem = (opgIndex: number, riskIndex: number) => {
    const updatedOpg = diagnosisTreatment.opg.map((opgObj: any, index: number) => {
      if (index === opgIndex) {
          return {
              ...opgObj,
              differential_diagnosis: opgObj.differential_diagnosis.filter((c: any, i: number) => i !== riskIndex)
          };
      }
      return opgObj;
    });

    setDiagnosisTraeatment({ opg: updatedOpg, general: diagnosisTreatment.general });
  }

  const onChangeAddProblem = (e: any) => {
    setProblem(e.target.value);
  }

  const onChangeAddRisk = (e: any) => {
    setProblem(e.target.value);
  }



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
      <button
        onClick={handleSubmit}
        className="hover:underline px-6 py-2 rounded-full text-xl bg-[#21B9C6] text-white flex items-center"
      >
        Submit
      </button>
    </div>
    <div className="flex flex-col px-6 py-8 flex-wrap">
      <div className="flex border-b-2 mb-4">
        <h1 className=" flex text-3xl font-bold text-[#21B9C6]">
          {patient.full_name}
          <span className=" text-slate-500 text-sm flex items-end  ml-6">
            DOB:<p className="ml-2 text-black"> {patient.dob}</p>
          </span>
        </h1>
        <h1 className="text-2xl font-bold ml-[6rem]">Diagnosis</h1>
        <h1 className="text-2xl font-bold ml-[22rem]">Risks</h1>
      </div>
      <div className="flex mt-5 gap-x-4">
        <div className="flex flex-col gap-y-5 justify-between max-w-[22%]">
          <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
            {medicalHistory.length > 0 ? medicalHistory.map((history: any, index: number) => {
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
            }) : (
              <p>No medical history found</p>
            )}
          </div>
        </div>
        <div className="mb-5 ">
          {diagnosisTreatment ? 
            diagnosisTreatment.opg && diagnosisTreatment.opg.map((o:any, index:number)=>{
            return(
              <div key={index} className="flex gap-x-5">
                <PatientProblemsEditable 
                  onDeleteSpecificProblem={onDeleteSpecificProblem}
                  onDelete={handleDeleteProblem}
                  onAddProblem={onAddProblem}
                  onChangeAddProblem={onChangeAddProblem}
                  treatments = {o.differential_diagnosis}       
                  index={index}
                  id='opg' 
                />
                <RiskReports 
                  onDelete={handleDeleteRisks} 
                  onDeleteSpecificRisk={handleDeleteSpecificRisk}
                  onAddRisk={onAddRisk}
                  onChangeAddRisk={onChangeAddRisk}
                  treatments = {o.consequences}
                  index={index} 
                  id='opg'
                />
              </div>
              )}) : (
                <p> No Diagnosis Treatment </p>
            )}
           {diagnosisTreatment ? 
            diagnosisTreatment.general.length > 0 && diagnosisTreatment.general.map((o:any, index:number)=>{
            return(
              <div key={index} className="flex gap-x-5">
                <PatientProblemsEditable 
                  onDeleteSpecificProblem={onDeleteSpecificProblem}
                  onAddProblem={onAddProblem}
                  onChangeAddProblem={onChangeAddProblem}
                  onDelete={handleDeleteProblem}
                  treatments = {o.differential_diagnosis}       
                  index={index} 
                  id='general'
                />
                <RiskReports
                  onDeleteSpecificRisk={handleDeleteSpecificRisk}
                  onDelete={handleDeleteRisks} 
                  onAddRisk={onAddRisk}
                  onChangeAddRisk={onChangeAddRisk}
                  treatments = {o.consequences}
                  index={index} 
                  id='general'
                />
              </div>
              )}) : (
                <p> No Diagnosis Treatment </p>
              )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default PatientCheckup