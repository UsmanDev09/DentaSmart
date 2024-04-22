import { cookies } from "next/headers";
import { Key, useEffect, useState } from "react";
import Image from "next/image";
import Canvas from "@/components/Canvas";
import { PatientAnalysis } from "@/components/PatientAnalysis";

async function PatientAnalysisPage({ searchParams }: { searchParams: any }) {
  const token = cookies().get("token");

  const response = await fetch(
    `http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=${searchParams.checkupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  const patientAnalysis = await response.json();

  // console.log(patientAnalysis.data.diagonsis.predictions[0].metadata.modelClasses);
  
  

  const chatResponse = await fetch(
    `http://103.217.176.51:8000/v1/dentist_chat?checkup_id=${searchParams.checkupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  const chat = await chatResponse.json();
  

  return (
    <PatientAnalysis chat ={chat} patientAnalysis={patientAnalysis} searchParams={searchParams} />
  );
}

export default PatientAnalysisPage;
