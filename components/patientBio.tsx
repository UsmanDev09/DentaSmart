"use client";
// import { Separator } from "./ui/separator";
import Image from "next/image";
import PatientComplaints from "./patientComplaints";

const PatientBio = ({report}:{report:any}) => {


  return (
    <div className="flex flex-col flex-wrap justify-center items-center bg-white rounded-2xl p-4">
      <Image src="/profile.jpg" alt="" width={100} height={100} />
      <h2 className="text-xl font-bold my-2">{report.data.member.full_name}</h2>
      <div className="grid grid-cols-1 gap-y-3 p-4 md:grid-cols-2">
        <span className="flex">
          Age:<h3 className="ml-1 font-bold">{report.data.member.age}</h3>
        </span>
        <span className="flex">
          Tel:<h3 className="ml-1 font-bold">{report.data.member.phone_number}</h3>
        </span>
        <span className="flex">
          Sex:<h3 className="ml-1 font-bold">{report.data.member.gender}</h3>
        </span>
        <span className="flex">
          Date:<h3 className="ml-1 font-bold">{report.data.member.dob}</h3>
        </span>
      </div>
      <span className=" opacity-10 font-thin">
        _______________________________________________________
      </span>
      <PatientComplaints report = {report}/>
    </div>
  );
};

export default PatientBio;
