import ChatCard from "@/components/chat-card";
import Date from "@/components/date";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TabsTrigger } from "@radix-ui/themes";
import { ArrowRight, ChevronRight, Dot, DotIcon } from "lucide-react";
import Image from "next/image";
const PatientAnalysis = () => {
  return (
    <div className="flex">
      <div className="p-10">
        <div className=" flex justify-between w-full ">
          <div className="flex flex-row gap-x-7 justify-center items-center ">
            <h1 className="text-3xl font-bold text-[#21B9C6]">
              Alfred Rodgriguez
            </h1>
            <span className="text-slate-500  flex flex-row">
              DOB:<p className="ml-2 text-black"> 9/2/1975</p>
            </span>
            <span className="text-slate-500 flex flex-row">
              Age:<p className="ml-2 text-black">9</p>
            </span>
            <span className="text-slate-500 mr-2 flex flex-row">
              Tel: <p className="ml-2 text-black">949 000 0000</p>
            </span>

            <span className="text-slate-500 mr-2 flex flex-row">
              Sex: <p className="ml-2 text-black">Male</p>
            </span>

            <span className="text-slate-500 mr-2 flex flex-row">
              Date: <p className="ml-2 text-black">01/01/2023</p>
            </span>
          </div>
          <button className=" font-bold bg-[#21B9C6] text-white px-4 rounded-full cursor-pointer mr-1">
            Submit
          </button>
        </div>
        <Separator className="mt-2" />
        <div className="flex mt-5 gap-x-4">
          <div className="flex flex-col gap-y-5 justify-between max-w-[25%]">
            <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
              <h3 className="text-2xl text-[#21B9C6] font-bold">
                Medical history
              </h3>
              <Separator className="my-2" />
              <div className="px-5">
                <ul className="text-lg font-bold list-disc">
                  <li>
                    Do you have any long term health condition or any disability
                    that you would like to make us aware of?
                  </li>
                </ul>
                <ul className="text-lg px-5 list-disc">
                  <li>MI/Angina</li>
                  <li>Artificial heart Valves</li>
                  <li>Respiratory Disorder</li>
                  <li>Epilepsy</li>
                  <li>Fainting Disorders</li>
                </ul>
              </div>
              <div className="p-5">
                <ul className="text-lg list-disc">
                  <li className="font-bold ">
                    Are you taking any of the following?
                  </li>
                </ul>
                <ul className="text-lg px-5 list-disc">
                  <li>Aspirin</li>
                  <li>Oral birth control drugs or other hormonal therapy</li>
                </ul>
              </div>
              <div className="px-5">
                <ul className=" list-disc">
                  <li className="text-lg font-bold">
                    Are you allergic or have any adverse reaction to
                  </li>
                </ul>
                <ul className="text-lg px-5 list-disc">
                  <li>Codeine or other narcotics</li>
                </ul>
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="flex justify-between bg-white p-5 rounded-xl"
            >
              <h1 className="text-2xl">Chat</h1>
              <ArrowRight className="text-[#21B9C6]" />
            </Button>
          </div>
          <div className="flex flex-col justify-between bg-white border rounded-sm p-3 w-full">
            <div className="flex flex-col">
              <Tabs defaultValue="analysis">
                <TabsList>
                  <TabsTrigger value="analysis" className="bg-white">
                    Analysis
                  </TabsTrigger>
                  <TabsTrigger value="patients" className="bg-[#E3E3E3]">
                    Report
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Separator />
              <div className="flex">
                <div className="flex flex-col w-[50%]">
                  <Image
                    src="/xray.jpg"
                    width="500"
                    height={224}
                    alt=""
                    className="my-5"
                  />
                  <h5 className="text-lg text-[#21B9C6] font-bold">
                    Presenting Complaints
                  </h5>
                  <Separator className="my-1" />
                  <div className="flex flex-col ">
                    <div className="w-full bg-[#E3E3E3] p-1">Filling</div>
                    <ul className="grid grid-cols-2 list-disc px-5 py-1 gap-x-8">
                      <li>Defective</li>
                      <li>Loose</li>
                      <li>Fall out</li>
                      <li>too large</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full bg-[#E3E3E3] p-1">The Gum</div>
                    <ul className="grid grid-cols-2 list-disc px-5 py-1 gap-x-8">
                      <li>Beeding Gum</li>
                      <li>Lumps and Swelling</li>
                      <li>Change in Color</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col m-3 gap-y-2 w-[50%]">
                  <h5 className="text-lg text-[#21B9C6] font-bold">
                    Findings
                    <Separator className="my-1" />
                  </h5>
                  <Table>
                    <TableHeader className="text-[#fff] bg-black  border-none">
                      <TableRow className=" font-bold ">
                        <TableHead className="text-[#fff]">Tooth #</TableHead>
                        <TableHead className="text-[#fff]">Finding</TableHead>
                        <TableHead className="text-[#fff]">Health</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>02</TableCell>
                        <TableCell>Implant</TableCell>
                        <TableCell>89%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>06</TableCell>
                        <TableCell>Restoration</TableCell>
                        <TableCell>76%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>12</TableCell>
                        <TableCell>Filling</TableCell>
                        <TableCell>68%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>19</TableCell>
                        <TableCell>Implant</TableCell>
                        <TableCell>65.8%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>21</TableCell>
                        <TableCell>Filling</TableCell>
                        <TableCell>62%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>21</TableCell>
                        <TableCell>Filling</TableCell>
                        <TableCell>62%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>21</TableCell>
                        <TableCell>Filling</TableCell>
                        <TableCell>62%</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>19</TableCell>
                        <TableCell>Implant</TableCell>
                        <TableCell>65.8%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button
                    variant="login"
                    className="hover:border-indigo-400 hover:border-2"
                  >
                    Edit Findings
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#E3E3E3] p-2 border rounded-sm shadow:sm">
              <ChevronRight className="text-[#21B9C6]" />
              <h5 className="text-md text-slate-600"> 03 July 2022</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border">
        <div className="flex flex-col p-5">
          <h2 className="text-3xl font-bold my-5">History</h2>
          <div className="flex flex-row gap-x-4">
            <Date />
            <Date />
          </div>
          <div className="gap-y-8 h-full">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAnalysis;
