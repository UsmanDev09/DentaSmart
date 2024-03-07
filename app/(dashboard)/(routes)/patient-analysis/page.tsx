import ChatCard from "@/components/chat-card";
import Date from "@/components/date";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="login" className="rounded-full px-6 text-lg">
                Submit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">
                  Are you sure you want to Submit?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex justify-center">
                <AlertDialogCancel className="bg-red-600 rounded-full text-white px-12 hover:bg-red-600 hover:text-white">
                  No
                </AlertDialogCancel>
                <AlertDialogAction className=" bg-[#21B9C6] rounded-full text-white px-12 hover:bg-[#21B9C6]">
                  Yes
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Separator className="mt-2" />
        <div className="flex mt-5 gap-x-4">
          <div className="flex flex-col gap-y-5 justify-between max-w-[25%]">
            <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
              <h3 className="text-2xl text-[#21B9C6] font-bold">
                Medical history
              </h3>
              <Separator className="my-2" />
              <div className="px-4 py-2">
                <ul className="text-lg font-bold list-disc">
                  <li>
                    Do you have any long term health condition or any disability
                    that you would like to make us aware of?
                  </li>
                </ul>
                <ul className="text-lg list-disc">
                  <li className="flex">
                    <Check className="mr-2" /> MI/Angina
                  </li>
                  <li className="flex">
                    <Check className="mr-2" />
                    Artificial heart Valves
                  </li>
                  <li className="flex">
                    <Check className="mr-2" />
                    Respiratory Disorder
                  </li>
                  <li className="flex">
                    <Check className="mr-2" />
                    Epilepsy
                  </li>
                  <li className="flex">
                    <Check className="mr-2" />
                    Fainting Disorders
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <ul className="text-lg list-disc">
                  <li className="font-bold ">
                    Are you taking any of the following?
                  </li>
                </ul>
                <ul className="text-lg list-disc">
                  <li className="flex">
                    <Check className="mr-2" />
                    Aspirin
                  </li>
                  <li className="flex">
                    <Check className="mr-2" size={42} />
                    Oral birth control drugs or other hormonal therapy
                  </li>
                </ul>
              </div>
              <div className="px-4">
                <ul className=" list-disc">
                  <li className="text-lg font-bold">
                    Are you allergic or have any adverse reaction to
                  </li>
                </ul>
                <ul className="text-lg list-disc">
                  <li className="flex">
                    <Check className="mr-2" />
                    Codeine or other narcotics
                  </li>
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
                    <div className="w-full bg-[#E3E3E3] p-1 rounded-sm">
                      Filling
                    </div>
                    <ul className="grid grid-cols-2 list-disc px-5 py-1 gap-x-8">
                      <li>Defective</li>
                      <li>Loose</li>
                      <li>Fall out</li>
                      <li>too large</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full bg-[#E3E3E3] p-1 rounded-sm">
                      The Gum
                    </div>
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
                      <TableRow className=" ">
                        <TableHead className="text-[#fff] font-bold">
                          Tooth #
                        </TableHead>
                        <TableHead className="text-[#fff] font-bold">
                          Finding
                        </TableHead>
                        <TableHead className="text-[#fff] font-bold">
                          Health
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>02</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          89%
                          <X className="text-[red] ml-6" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>06</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          76%
                          <X className="text-[red] ml-6" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>12</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          68%
                          <X className="text-[red] ml-6" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>19</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          65.8%
                          <X className="text-[red] ml-6" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>10</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          58%
                          <X className="text-[red] ml-6" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableBody>
                      <TableRow>
                        <TableCell>17</TableCell>
                        <TableCell>
                          <Combobox />
                        </TableCell>
                        <TableCell className="flex justify-between">
                          65%
                          <X className="text-[red]" />
                        </TableCell>
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
          <h2 className="text-3xl font-bold ">History</h2>
          <div className="flex flex-row gap-x-4 my-4">
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
