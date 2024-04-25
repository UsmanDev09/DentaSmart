import { Check, Edit, Trash2 } from "lucide-react";
import { DiagnosisDialog, DiagnosisDialogTrigger } from "./ui/diagnosis-dialog";

interface RiskReportsProps {
  treatments: any;
  onDelete: (index:number) => void;
  index: number;
}

const RiskReports = ({treatments, onDelete, index}:RiskReportsProps) => {
  
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="p-4 bg-white rounded-xl mb-4 w-[450px]">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-xl font-bold">{treatments.Problems}</h3>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="text-right flex gap-x-2">
            <button onClick={handleDelete}>
              <Trash2 className="text-red-600 cursor-pointer" />
            </button>
            <DiagnosisDialog>
              <DiagnosisDialogTrigger asChild>
                <Edit className="text-[#21B9C6] cursor-pointer" />
              </DiagnosisDialogTrigger>  
            </DiagnosisDialog>        
          </div>
        </div>
      </div>
      <div>
        {treatments.Risks.map((risks:any, index:number) =>{
          return(
          <p className="flex text-sm my-2" key={index}>
            <Check className="mr-2 text-[#21B9C6]" />
            {risks}
          </p>
          )})}
      </div>
    </div>
  );
};

export default RiskReports;
