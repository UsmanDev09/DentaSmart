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
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useDispatch,  } from "react-redux";

import { initializePatientAnalysis } from "@/redux/features/patient-analysis-slice";
import { PatientProfile } from "./PatientProfile";
import { MedicalHistory } from "./MedicalHistory";
import { Chats } from "./Chats";
import { Complaints } from "./Complaints";
import { Findings } from "./Findings";

export const PatientAnalysis = ({
  patientAnalysis,
  searchParams,
  chat,
  history,
  startDate,
  endDate
}: {
  patientAnalysis: any;
  searchParams: any;
  chat:any;
  history: any;
  startDate:any
  endDate:any
}) => {
  const dispatch = useDispatch();

  const chats = chat.chat  

  const images = patientAnalysis.data.images;

  const checkupHistory = history.data;
  
  dispatch(initializePatientAnalysis(patientAnalysis));
  

  return (
    <div className="flex">
      <div className="p-10">
        <div className=" flex justify-between w-full ">
          <PatientProfile />
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
          <div className="flex flex-col gap-y-5 justify-between w-[304px] max-[30%]">
            <MedicalHistory />
            <Chats chats={chats} />
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
                </TabsList>
              </Tabs>
              <Separator />
              <Findings searchParams={searchParams}/>
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
          <div>
            <Date startDate={startDate} endDate={endDate}/>
          </div>
          <div className="gap-y-8 h-full">
            {checkupHistory.checkup.map((history:any, index:number )=>{
              return <ChatCard history = {history} key={index}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
