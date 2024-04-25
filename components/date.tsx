import { useState } from "react";

const Date = ({startDate, endDate} : {startDate:any, endDate:any}) => {

  const [startedDate, setStartedDate] = useState(startDate);
  const [endedDate, setEndedDate] = useState(endDate);


  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const changedDate = inputValue;
    setStartedDate(changedDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const changedDate = inputValue;
    setEndedDate(changedDate);
  };
    
  return (
    <div className="flex justify-center p-3 w-full gap-x-6 my-4">
      <input
        type="date"
        id="startDate"
        name="startdate"
        className="rounded-full border-2 border-[#21B9C6]"
        value={startedDate}
        onChange={handleStartDateChange}
      />
      <input
        type="date"
        id="endDate"
        name="endDate"
        className="rounded-full border-2 border-[#21B9C6]"
        value={endedDate}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default Date;
