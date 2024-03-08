import Image from "next/image";
interface AiChatResponseProps {
  comment: string;
  time: string;
}

const AiChatResponse = ({ comment, time }: AiChatResponseProps) => {
  return (
    <div className="flex justify-start gap-x-4 ">
      <Image
        src="/ai-avatar.svg"
        alt=""
        width={45}
        height={100}
        className="self-end"
      />
      <div className="flex flex-col">
        <div className="bg-white p-9 rounded-full rounded-bl-none text-black">
          <p>{comment}</p>
        </div>
        <span className="text-slate-500 my-2">{time}</span>
      </div>
    </div>
  );
};

export default AiChatResponse;
