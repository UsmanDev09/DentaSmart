import { Check, Edit, Edit2, Trash, Trash2 } from "lucide-react";

const PatientProblemsEditable = () => {
  return (
    <div className="p-4 bg-white rounded-xl mb-4 w-[450px]">
      <div className="flex justify-between">
        <div className="">
          <h5 className="text-sm font-semibold">Problem</h5>
          <h3 className="text-xl font-bold my-2">Toothache</h3>
          <h4 className="text-[#21B9C6] text-lg font-semibold">
            Treatment Options
          </h4>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="text-right flex gap-x-2">
            <Trash2 className="text-red-600" />
            <Edit className="text-[#21B9C6]" />
          </div>

          <h4 className="text-lg font-semibold">Reversible pulpitis</h4>
          <button className=" text-sm text-red-600 bg-[#EC07071A] bg-opacity-10 rounded-full p-2">
            2 days Left
          </button>
        </div>
      </div>
      <div>
        <p className="flex text-sm my-2">
          <Check className="mr-2 text-[#21B9C6]" />
          Removal of causative agent
        </p>

        <p className="flex text-sm my-2">
          <Check className="mr-2 text-[#21B9C6]" />
          Filling
        </p>

        <p className="flex text-sm my-2">
          <Check className="mr-2 text-[#21B9C6]" />
          Repair of existing restoration
        </p>

        <p className="flex text-sm my-2">
          <Check className="mr-2 text-[#21B9C6]" />
          Continue to monitor symptoms
        </p>

        <p className="flex text-sm my-2">
          <Check className="mr-2 text-[#21B9C6]" />
          Visit dentist if symptoms persist or worsen
        </p>
      </div>
    </div>
  );
};

export default PatientProblemsEditable;
