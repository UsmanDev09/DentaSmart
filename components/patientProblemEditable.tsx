import { Check, Edit, Edit2, Trash, Trash2 } from "lucide-react";
import {
  DiagnosisDialog,
  DiagnosisDialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/diagnosis-dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const PatientProblemsEditable = ({treatments}:{treatments:any}) => {
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
            <Trash2 className="text-red-600" />
            <DiagnosisDialog>
              <DiagnosisDialogTrigger asChild>
                <Edit className="text-[#21B9C6]" />
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
                        <input
                          placeholder="Enter diagnosis"
                          className="border-2 rounded-3xl w-full px-3 py-2 text-medium my-2"
                        />
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Removal of causative agent
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Filling
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Repair of existing restoration
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Continue to monitor symptoms
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Visit dentist if symptoms persist or worsen
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Removal of causative agent
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Filling
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Repair of existing restoration
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Continue to monitor symptoms
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 border-b-2 border-b-opacity-5 py-2">
                            <Checkbox id="treatment" />
                            <label
                              htmlFor="treatment"
                              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Visit dentist if symptoms persist or worsen
                            </label>
                          </div>
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

export default PatientProblemsEditable;
