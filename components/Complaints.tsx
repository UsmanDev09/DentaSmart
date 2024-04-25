import { useSelector } from "react-redux"

export const Complaints = () => {
    const patientAnalysis = useSelector((state: any) => state.PatientAnalysis)
    const complaints = patientAnalysis.data.complaints;
    
    return (
        <div>
            <h5 className="text-xl text-[#21B9C6] font-bold ">
                Presenting Complaints
            </h5>
            <div className="flex flex-col p-1">
                <ul className="grid grid-cols-2 list-disc px-5 py-1 gap-x-8">
                    {complaints.length > 0 ? complaints.map((complaints:any, index:number)=>{
                    return (
                        <li key={index}>{complaints}</li>
                    ) 
                    }) : (
                    <p> No complaints were found </p>
                    )}
                </ul>
            </div>
        </div>
    )
}