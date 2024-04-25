import { Stethoscope } from "lucide-react";
import { useSelector } from "react-redux"


const ChatCard = ({history}:{history:any}) => {

  const patientAnalysis = useSelector((state: any) => state.PatientAnalysis);

  return (
    <div className="flex justify-between gap-x-10 my-4">
      <p className="text-sm text-slate-500">09:00</p>
      <div className="flex border-l-[6px] border-[#21B9C6] bg-[#F5F5F5] justify-between p-2 rounded-lg gap-x-10 pr-1">
        <div className="gap-y-6 flex flex-col justify-between">
          <h4 className="flex">
            <Stethoscope
              size={35}
              className="text-[#21B9C6] mr-2 bg-[#b6dedc] border rounded-full p-1"
            />
            Hello, {patientAnalysis.data.member.full_name}!
          </h4>
          <div className="flex justify-start">
            {history.images.map((img:number, index:number) =>{
              return (
                <img src={`http://103.217.176.51:8000${img}`} key={index} className="w-10 h-10 mx-1 rounded-sm" />
              )
            })}
            {/* <img src="/teeth2.png" alt="" />
            <img src="/teeth.png" alt="" />
            <img src="/xray2.png" alt="" /> */}
          </div>
          <div className="flex justify-start">
            <img src="/avatar.png" alt="" width={20}/>
            <p className="ml-2">{patientAnalysis.data.member.full_name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h5>{history.date.slice(0,10)}</h5>
          <h6 className="text-xs text-[#21B9C6] cursor-pointer hover:underline">
            Denta Smart visit
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
