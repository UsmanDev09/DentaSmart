import { cookies } from "next/headers";
import { PatientAnalysis } from "@/components/PatientAnalysis";


async function PatientAnalysisPage({ searchParams }: { searchParams: any }) {
  const token = cookies().get("token");
  let patientAnalysis, chat;

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
    patientAnalysis = await response.json();
  } catch (err: unknown) {
      throw new Error('Failed to fetch dentist checkup')
  }
    

  try {
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
    chat = await chatResponse.json();
  } catch (err: unknown) {
      throw new Error('Failed to fetch dentist chat')
  }
  

  return (
    <PatientAnalysis chat={chat} patientAnalysis={patientAnalysis} searchParams={searchParams} />
  );
}

export default PatientAnalysisPage;
