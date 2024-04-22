import { Check, ChevronDown } from "lucide-react";

const PatientProblems = ({treatments}:{treatments:any}) => {
  return (
    <div className="p-4 bg-white rounded-xl mb-4">
      <div className="flex justify-between">
        <div className="">
          <h5 className="text-sm font-semibold">Problem</h5>
          <h3 className="text-xl font-bold my-2">{treatments.Problems}</h3>
          <h4 className="text-[#21B9C6] text-lg font-semibold">
            Treatment Options
          </h4>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <ChevronDown className="text-right" />
          <h4 className="text-lg font-semibold">{treatments.Diagnosis}</h4>
          <button className=" text-sm text-red-600 bg-[#EC07071A] bg-opacity-10 rounded-full p-2">
            2 days Left
          </button>
        </div>
      </div>
      <div>
        {treatments.TreatmentOptions.map((options:any, index:number) =>{
          return(
            <p className="flex text-sm my-2" key={index}>
              <Check className="mr-2 text-[#21B9C6]" />
              {options}
            </p>
            )})}
      </div>
    </div>
  );
};

export default PatientProblems;
