import { useSelector } from "react-redux"

export const PatientProfile = () => {
    const patientAnalysis = useSelector((state: any) => state.PatientAnalysis);

    return ( 
        <div className="flex flex-row gap-x-7 justify-center items-center ">
            <h1 className="text-3xl font-bold text-[#21B9C6]">
              {patientAnalysis.data.member.full_name}
            </h1>
            <span className="text-slate-500  flex flex-row">
              DOB:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.dob}
              </p>
            </span>
            <span className="text-slate-500 flex flex-row">
              Age:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.age}
              </p>
            </span>
            <span className="text-slate-500 mr-2 flex flex-row">
              Tel:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.phone_number}
              </p>
            </span>

            <span className="text-slate-500 mr-2 flex flex-row">
              Sex:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.gender}
              </p>
            </span>

            {/* <span className="text-slate-500 mr-2 flex flex-row">
              Date: <p className="ml-2 text-black">04/05/2023</p>
            </span> */}
          </div>
    )
}