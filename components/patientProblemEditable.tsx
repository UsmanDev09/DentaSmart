import { Check, Edit, Trash2, X } from "lucide-react";
import {
  DiagnosisDialog,
  DiagnosisDialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/diagnosis-dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface PatientProblemsEditableProps {
  treatments: any;
  index: number;
  onDelete: any;
  id: string;
  onChangeAddProblem: any;
  onAddProblem: any;
  onDeleteSpecificProblem: any;
}

const PatientProblemsEditable = (
  {
    treatments,
    index,
    onDelete,
    id,
    onChangeAddProblem,
    onAddProblem,
    onDeleteSpecificProblem
  } : PatientProblemsEditableProps
) => {

  const handleDelete = () => {
    onDelete(index, id);
  };
  console.log(treatments)
  if(treatments.length > 0) 
  return (
    <div className="p-4 bg-white rounded-xl mb-4 w-[450px]">
      <div className="flex justify-between">
        <div className="">
          <h5 className="text-lg font-semibold">Problem</h5>
          <h3 className="text-xl font-bold my-2">{treatments.Problems}</h3>
          <h4 className="text-[#21B9C6] text-lg font-semibold">
            Treatment Options
          </h4>
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
              <DialogContent className="bg-white text-black">
                <DialogHeader>
                  <DialogDescription className="flex flex-col  gap-1 overflow-y-auto">
                    <div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-lg font-semibold">Problem</h5>
                          <h3 className="text-xl font-bold my-2">{treatments.Problems}</h3>
                          <h4 className="text-[#21B9C6] text-lg font-semibold">
                            Treatment Options
                          </h4>
                        </div>
                        <Button
                          variant="outline"
                          className="text-lg py-5 px-8 rounded-2xl border-2 font-semibold"
                        >
                          {treatments.Diagnosis}
                        </Button>
                      </div>
                      <div>
                        <div className="flex gap-4 items-center">
                          <input
                            placeholder="Enter diagnosis"
                            className="border-2 rounded-3xl w-full px-3 py-2 text-medium my-2"
                            onChange={onChangeAddProblem}
                          />
                          <Button
                            onClick={() => onAddProblem(index)}
                            variant="login"
                            className="px-4 py-2 text-lg rounded-1/2"
                          >
                            Add
                          </Button>
                        </div>
                        <div className="space-y-3">
                          {treatments && treatments.map((t: any, index: number) => {
                            return (
                              <div key={index} className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                                {/* <Checkbox id="treatment" /> */}
                                <label
                                  htmlFor="treatment"
                                  className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {t.split(':')[0]}
                                </label>
                              </div>
                            )
                          })}
                          
                        </div>
                        <div className="flex justify-center my-5">
                          <Button
                            variant="login"
                            className="px-16 py-7 text-lg rounded-full"
                          >
                            Done
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </DiagnosisDialog>
          </div>

          <h4 className="text-lg font-semibold">{treatments.Diagnosis}</h4>
          <button className=" text-sm text-red-600 bg-[#EC07071A] bg-opacity-10 rounded-full p-2">
            2 days Left
          </button>
        </div>
      </div>
      <div>
        {treatments.map((option:any, problemIndex:number) =>{
          return(
            <div key={problemIndex} className="flex justify-between items-center">
                <div className="flex items-center">
                  <Check className="mr-2 text-[#21B9C6]" />
                    <p className="flex text-sm my-2">
                      {option.split(':')[0]}
                    </p>
                </div>
                <X onClick={() => onDeleteSpecificProblem(index, problemIndex)} className="text-[red] ml-6" />
                
            </div>
        )})}
      </div>
    </div>
  ); else {
    return (<div className="ml-20 w-[400px]"><p>No Problems</p></div>)
  }
};

export default PatientProblemsEditable;
