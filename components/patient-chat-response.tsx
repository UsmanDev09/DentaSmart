import Image from "next/image";

interface PatientChatResponseProps {
  comment: string;
  time: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
}

const PatientChatResponse = ({
  comment,
  time,
  imageUrl,
  imageUrl2,
  imageUrl3,
}: PatientChatResponseProps) => {
  return (
    <div className="flex justify-end gap-x-4">
      <div className="flex flex-col items-end">
        <div className="bg-[#21B9C6] p-9 rounded-full rounded-br-none text-white font-medium">
          <p>{comment}</p>
          {(imageUrl || imageUrl2 || imageUrl3) && (
            <div className="flex my-2 gap-2">
              {imageUrl && (
                <Image src={imageUrl} alt="" width={30} height={50} />
              )}
              {imageUrl2 && (
                <Image src={imageUrl2} alt="" width={30} height={50} />
              )}
              {imageUrl3 && (
                <Image src={imageUrl3} alt="" width={30} height={50} />
              )}
            </div>
          )}
        </div>
        <span className="text-slate-500 my-1">{time}</span>
      </div>
      <Image
        src="/avatar2.svg"
        alt=""
        width={50}
        height={10}
        className="self-end"
      />
    </div>
  );
};

export default PatientChatResponse;
