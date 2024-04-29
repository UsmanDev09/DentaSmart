import { cookies } from "next/headers";
import { PatientAnalysis } from "@/components/PatientAnalysis";


async function PatientAnalysisPage({ searchParams }: { searchParams: any }) {
  
  let token = cookies().get("token");
  let patientAnalysis, chat, history, startDate = searchParams.startDate ? searchParams.startDate : "2024-01-01", 
  endDate = searchParams.endDate ? searchParams.endDate : `2024-04-25`;
  
  let dateStart = new Date(startDate);

  let startDay = dateStart.getDate().toString().padStart(2, '0');
  let startMonth = (dateStart.getMonth() + 1).toString().padStart(2, '0');
  let startYear = dateStart.getFullYear();

  let dateEnd = new Date(endDate);

  let endDay = dateEnd.getDate().toString().padStart(2, '0'); 
  let endMonth = (dateEnd.getMonth() + 1).toString().padStart(2, '0');
  let endYear = dateEnd.getFullYear();

  let formattedStartDate = `${startDay}-${startMonth}-${startYear}`;
  let formattedEndDate = `${endDay}-${endMonth}-${endYear}`;

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
  
  // try {
  //   const historyResponse = await fetch(
  //     `http://103.217.176.51:8000/v1/history`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token?.value}`,
  //       },
  //       body:JSON.stringify(
  //         {
  //         args: {
  //             start_date: `${formattedStartDate}`,
  //             end_date: `${formattedEndDate}`,
  //             dentasmart_visit: true,
  //             dentist_visit: true,
  //             checkup_id: searchParams.checkupId
  //           }
  //         })
  //     });
  //     history = await historyResponse.json();
  //     } catch (err: unknown) {
  //       throw new Error('Failed to fetch history data')
  //     }
      

  return (
    <PatientAnalysis  
      history={[]} 
      chat={chat} 
      patientAnalysis={patientAnalysis} 
      searchParams={searchParams} 
      startDate={startDate}
      endDate = {endDate}
      />
  );
}

export default PatientAnalysisPage;
