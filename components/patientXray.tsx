import { Check } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

interface PatientXrayProps {
  imageUrl: string;
  predictions:any
}

const PatientXray = ({ imageUrl, predictions }: PatientXrayProps) => {

  return (
    <div className="bg-white p-4 rounded-xl ">
      <div className="flex justify-between ">
        <h3 className="text-lg font-bold">Analysis: X-Rays</h3>
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div className="flex justify-between my-4 items-center font-semibold text-lg">
        <h4>Findings</h4>
        <h4>Tooth Health</h4>
      </div>
      <div>
            {predictions.metadata.modelClasses.diagnostic.map((diagnostic:any, index:number)=>{
              return( 
                <div key={index} className="flex justify-between items-center border-b py-3">
                  <h5 className="flex">        
                    <Check className="mr-2 text-[#21B9C6]" />
                    {diagnostic}
                  </h5>
                </div>
              )})}
      </div>
    </div>
  );
};

export default PatientXray;
