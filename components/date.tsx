import { useState } from "react";
import { useRouter } from "next/navigation";

const Date = ({ searchParams, startDate, endDate } : { searchParams: any, startDate:any, endDate:any }) => {

  const router = useRouter()

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const inputValue = event.target.value;
    console.log('IV', inputValue)
    router.push(`/patient-analysis?checkupId=${searchParams.checkupId}&startDate=${inputValue}&endDate=${endDate}`)
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    router.push(`/patient-analysis?checkupId=${searchParams.checkupId}&startDate=${startDate}&endDate=${inputValue}`)

  };
    
  return (
    <div className="flex justify-center p-3 w-full gap-x-6 my-4">
      <input
        type="date"
        id="startDate"
        name="startdate"
        className="rounded-full border-2 border-[#21B9C6]"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <input
        type="date"
        id="endDate"
        name="endDate"
        className="rounded-full border-2 border-[#21B9C6]"
        value={endDate}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default Date;
