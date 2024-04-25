
import PatientProblemsEditable from "@/components/patientProblemEditable";
import Riskcheckups from "@/components/risks-reports";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";

import { Key } from "react";
import PatientCheckup from "@/components/PatientCheckup";

async function PatientCheckupPage({ searchParams }: { searchParams: any }) {
  const token = cookies().get("token");
  let report;

  try {
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

    report = await response.json();
  } catch(err: unknown) {
    throw new Error('Failed to fetch dentist checkup')
  }

  const patient = report.data.member;
  const medicalHistory = report.data.medical_history;
  
  return (
    <PatientCheckup 
      patient={patient} 
      medicalHistory={medicalHistory}
      report={report} 
      searchParams={searchParams} 
    />
  );
}

export default PatientCheckupPage;
