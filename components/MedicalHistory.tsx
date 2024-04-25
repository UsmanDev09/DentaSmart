import { Separator } from "@radix-ui/react-separator";
import { Check } from "lucide-react";
import { useSelector } from "react-redux";

export const MedicalHistory = () => {

    const patientAnalysis = useSelector((state: any) => state.PatientAnalysis)
    const medicalHistory = patientAnalysis.data.medical_history;

    return (
        <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
        {medicalHistory.length > 0 ? medicalHistory.map((history: any, index: number) => {
          return (
            <div key={index}>
              <h3 className="text-2xl text-[#21B9C6] font-bold">
                Medical history
              </h3>
              <Separator className="my-2" />
              {history.answers.map((q: any, index: number) => {
                return (
                  <div className="p-4" key={index}>
                    <ul className="text-lg list-disc">
                      <li className="font-bold ">{q.question} </li>
                    </ul>
                    <ul className="text-lg list-disc">
                      {q.answer.map((answers: any, index: number) => {
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
          <p> No medical history found </p>
        )}
      </div>
    )
}