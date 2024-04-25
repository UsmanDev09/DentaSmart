import { cookies } from "next/headers";
import { ImageEditor } from "@/components/ImageEditor";

export default async function ImgTool({searchParams} : {searchParams: any}) {
  const { image, checkupId } = searchParams;
  let patientAnalysis;
  const token = cookies().get('token');
  
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

    

  return (
    <div >
      <div className="border p-5 ml-5">
          <ImageEditor patientAnalysis={patientAnalysis} searchParams={searchParams} />
      </div>
    </div>
  

  )
}

