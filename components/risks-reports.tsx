import { Check, Edit, Trash2 } from "lucide-react";

const RiskReports = () => {
  return (
    <div className="p-4 bg-white rounded-xl mb-4 w-[450px]">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-xl font-bold">Toothache</h3>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="text-right flex gap-x-2">
            <Trash2 className="text-red-600" />
            <Edit className="text-[#21B9C6]" />
          </div>
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

export default RiskReports;
