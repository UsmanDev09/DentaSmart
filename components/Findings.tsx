'use client'

import { useState } from "react"
import { useSelector } from "react-redux"
import { Carousel } from "flowbite-react";
import { X } from "lucide-react"

import { Complaints } from "./Complaints"
import { Separator } from "@radix-ui/react-separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Combobox } from "@/components/ui/combobox";
import Link from "next/link";

export const Findings = ({searchParams}: {searchParams: any}) => {
  const patientAnalysis = useSelector((state: any) => state.PatientAnalysis);
  const images = patientAnalysis.data.images;
  const predictions = patientAnalysis.data.diagonsis.predictions;

  const imagesData = predictions.map((prediction: any) => {
   return { 
    image: prediction.image_name,
    imageWidth: prediction.metadata.imageWidth,
    imageHeight: prediction.metadata.imageHeight
   }
  })
    const [selectedImage, setSelectedImage] = useState<string>(images[0].split("/")[2])

     return (
        <div className="flex">
                <div className="flex flex-col">
                  <Carousel className="bg-black" indicators={false} slide={false} onSlideChange={(index: number) => setSelectedImage(images[index].split("/")[2])}>
                    {imagesData && imagesData.map((imageData: any, index: number) => {
                      
                      return (
                        <>
                        <a target="_blank" href={`/img-tool?image=${imageData.image}&checkupId=${searchParams.checkupId}`} rel="noopener noreferrer">
                        <img
                          src={`http://103.217.176.51:8000/media/${imageData.image}`}
                          style={{
                            height: `${imageData.imageHeight}px`,
                            width: `${imageData.imageWidth}px`
                          }}
                          alt="x-ray image"
                        />
                         </a>
                        </>
                      )
                      })}
                  </Carousel>
                  <Complaints />
                </div>
                
                <div className="flex flex-col m-3 gap-y-2 ml-20">
                  <h5 className="text-xl text-[#21B9C6] font-bold">
                    Findings
                    <Separator className="my-1" />
                  </h5>
                  {predictions && predictions.map((prediction: any, index: number) => {
                    if(prediction.image_name === selectedImage)
                    return (
                      <div key={index} >
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
                        
                          <TableBody>
                              {prediction.diagnostic ? prediction.diagnostic.map((diagnostic: any) => {
                                return (
                                  <TableRow>
                                    <TableCell>02</TableCell>
                                    <TableCell>
                                      <Combobox key={diagnostic.class_id} diagnosticFindings={prediction.metadata.modelClasses.diagnostic} diagnosticFinding={diagnostic.class_name}/>
                                    </TableCell>
                                    <TableCell className="flex justify-between text-lg items-center ">
                                      89%
                                      <X className="text-[red] ml-6" />
                                    </TableCell>
                                  </TableRow>
                                )
                              }): (<p>No option available</p>)}
                          </TableBody>
                        </Table>
                      </div>
                    )
                  
                  })}
                </div>
              </div>
     )
}