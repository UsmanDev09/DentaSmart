"use client";

import ChatCard from "@/components/chatCard";
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
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  ChatDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  ChatDialogTrigger,
} from "@/components/ui/chat-dialog";

import { Key, useEffect, useState } from "react";
import Image from "next/image";
import Canvas from "@/components/Canvas";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import PatientChatResponse from "@/components/patientChatResponse";
import AiChatResponse from "@/components/aiChatResponse";
import Link from "next/link";
import PatientAnalysisPage from "@/app/(dashboard)/(routes)/patient-analysis/page";

export const PatientAnalysis = ({
  patientAnalysis,
  searchParams,
  chat
}: {
  patientAnalysis: any;
  searchParams: any;
  chat:any;
}) => {

  const chats= chat.chat;
  const medicalHistory= patientAnalysis.data.medical_history;
  const modelClasses = patientAnalysis.data.diagonsis.predictions[0].metadata.modelClasses  
  console.log(modelClasses);
  


  return (
    <div className="flex">
      <div className="p-10">
        <div className=" flex justify-between w-full ">
          <div className="flex flex-row gap-x-7 justify-center items-center ">
            <h1 className="text-3xl font-bold text-[#21B9C6]">
              {patientAnalysis.data.member.full_name}
            </h1>
            <span className="text-slate-500  flex flex-row">
              DOB:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.dob}
              </p>
            </span>
            <span className="text-slate-500 flex flex-row">
              Age:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.age}
              </p>
            </span>
            <span className="text-slate-500 mr-2 flex flex-row">
              Tel:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.phone_number}
              </p>
            </span>

            <span className="text-slate-500 mr-2 flex flex-row">
              Sex:
              <p className="ml-2 text-black">
                {patientAnalysis.data.member.gender}
              </p>
            </span>

            <span className="text-slate-500 mr-2 flex flex-row">
              Date: <p className="ml-2 text-black">04/05/2023</p>
            </span>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="login"
                className="rounded-full px-6 font-semibold text-lg"
              >
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
          <div className="flex flex-col gap-y-5 justify-between max-w-[30%]">
          <div className="bg-white p-5 rounded-sm border shadow-xs h-full">
              {medicalHistory.map((history: any, index: number) => {
                return (
                  <div key={index}>
                    <h3 className="text-2xl text-[#21B9C6] font-bold">
                      Medical history
                    </h3>
                    <Separator className="my-2" />
                    {history.answers.map((q: any, index: Key) => {
                      return (
                        <div className="p-4" key={index}>
                          <ul className="text-lg list-disc">
                            <li className="font-bold ">{q.question} </li>
                          </ul>
                          <ul className="text-lg list-disc">
                            {q.answer.map((answers: any, index: Key) => {
                              return (
                                <li key={index} className="flex">
                                  <Check className="mr-2 w-6 h-6" />
                                  {answers}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <ChatDialog>
              <ChatDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex justify-between bg-white py-7 px-5 rounded-xl border-none"
                >
                  <h1 className="text-2xl">Chat</h1>
                  <ArrowRight className="text-[#21B9C6]" size={30} />
                </Button>
              </ChatDialogTrigger>
                <DialogContent className="bg-[#EBF1F8] lg:max-w-screen-lg overflow-y-auto max-h-screen">
                  <DialogHeader>
                    <DialogTitle className="flex items-center mx-auto  text-4xl mb-3 ">
                      Ai Smart Dentist
                    </DialogTitle>
                    <DialogDescription className="flex flex-col bg-[#EBF1F8] gap-1 ">
                        {chats.map((chat:any, index:any)=>{
                          return(
                            <div key={index} id={chats.id}>
                              {chat.role === "assistant" && 
                                <AiChatResponse
                                  comment={chat.body}
                                /> 
                              }
                              {chat.role === "user" && 
                                <PatientChatResponse
                                  comment={chat.body}
                                /> 
                              }
                            </div>
                          )
                        })}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
            </ChatDialog>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col bg-white border rounded-sm p-3">
              <Tabs defaultValue="analysis">
                <TabsList className="gap-x-2">
                  <TabsTrigger value="analysis" className="bg-white">
                    Analysis
                  </TabsTrigger>
                  <TabsTrigger value="report" className="bg-[#E3E3E3]">
                    Report
                  </TabsTrigger>
                  <Link href = "/img-tool" >
                  <TabsTrigger value="draw" className="bg-[#E3E3E3]">
                    Draw
                  </TabsTrigger>
                  </Link>
                </TabsList>
              </Tabs>
              <Separator />
              <div className="flex">
                <div className="flex flex-col w-[50%]">
                  <div className="flex flex-col items-end my-5" >
                      <Image
                        src=""
                        height={300}
                        width={300}
                        alt=""
                      />
                  </div>
                  <h5 className="text-xl text-[#21B9C6] font-bold ">
                    Presenting Complaints
                  </h5>
                  <div className="flex flex-col p-1">
                    <ul className="grid grid-cols-2 list-disc px-5 py-1 gap-x-8">
                      {patientAnalysis.data.complaints.map((complaints:any, index:number)=>{
                        return(
                          <li key={index}>{complaints}</li>
                        ) 
                      })}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col m-3 gap-y-2 w-[50%]">
                  <h5 className="text-xl text-[#21B9C6] font-bold">
                    Findings
                    <Separator className="my-1" />
                  </h5>
                  <Table>
                    <TableHeader className="text-[#fff] bg-black border-none">
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
                    {/* {modelClasses.tooth_numbering.map((models:any,index:number)=>{
                      return(
                        <TableBody key={index}>
                        <TableRow>
                          <TableCell key={index}>
                            {models}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      )
                    })} */}
                    <TableBody>
                      <TableRow>
                        <TableCell>02</TableCell>
                        <TableCell>
                          <Combobox/>
                        </TableCell>
                        <TableCell className="flex justify-between text-lg items-center ">
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
                        <TableCell className="flex justify-between text-lg items-center">
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
                        <TableCell className="flex justify-between text-lg items-center">
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
                        <TableCell className="flex justify-between text-lg items-center">
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
                        <TableCell className="flex justify-between text-lg items-center">
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
                        <TableCell className="flex justify-between text-lg items-center">
                          65%
                          <X className="text-[red]" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button
                    variant="login"
                    className=" transition hover:opacity-90 text-base"
                  >
                    Edit Findings
                  </Button>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center bg-[#E3E3E3] p-1 my-4 border rounded-sm shadow:sm">
                <ChevronRight className="text-[#21B9C6] w-10 h-10" />
                <h5 className="text-md text-slate-600 mr-4"> 03 July 2022</h5>
              </div>
            </div>
            <div className="flex justify-end my-5 mr-1">
              <Link
                className="rounded-full px-14 py-4 text-xl transition hover:opacity-80 font-semibold bg-[#21B9C6] text-white"
                href={`/patient-report?checkupId=${searchParams.checkupId}`}
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border pr-1">
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
