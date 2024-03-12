"use client";
// import { Separator } from "./ui/separator";
import Image from "next/image";
import PatientComplaints from "./patient-complaints";

const PatientBio = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center bg-white rounded-2xl p-4">
      <Image src="/profile.jpg" alt="" width={100} height={100} />
      <h2 className="text-xl font-bold my-2">Albert Joe</h2>
      <div className="grid grid-cols-1 gap-y-3 p-4 md:grid-cols-2">
        <span className="flex">
          Age:<h3 className="ml-1 font-bold">9</h3>
        </span>
        <span className="flex">
          Tel:<h3 className="ml-1 font-bold">949 000 0000</h3>
        </span>
        <span className="flex">
          Sex:<h3 className="ml-1 font-bold">Male</h3>
        </span>
        <span className="flex">
          Date:<h3 className="ml-1 font-bold">01/01/2023</h3>
        </span>
      </div>
      <span className=" opacity-10 font-thin">
        _______________________________________________________
      </span>
      <PatientComplaints />
    </div>
  );
};

export default PatientBio;
