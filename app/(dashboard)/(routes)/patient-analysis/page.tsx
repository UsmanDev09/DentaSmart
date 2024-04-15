import { cookies } from "next/headers";
import { Key, useEffect, useState } from "react";
import Image from "next/image";
import Canvas from "@/components/Canvas";
import { PatientAnalysis } from "@/components/PatientAnalysis";

async function PatientAnalysisPage({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {


    const token = cookies().get("token");
  
    const response = await fetch(
      `http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=8`,
      // `http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=${params.checkup_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    const patientAnalysis = await response.json();
  


  return (
    <PatientAnalysis patientAnalysis={patientAnalysis}/>
  );
}

export default PatientAnalysisPage;
