'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


export default function PDFTemplate({ dentaDashboard, dentaReport } : { dentaDashboard: any, dentaReport: any }) {
  console.log(dentaReport)

    return (
      <div className="bg-white" >
        <img src="https://res.cloudinary.com/dpzlhahzg/image/upload/v1714400921/0_da9f7b.png" alt="" width="47%" className="relative left-[979px] h-[100px]"/>
        <Image src="https://res.cloudinary.com/dpzlhahzg/image/upload/v1714401131/3_j1eddm.webp" width={100} height={100} className=" absolute top-[170px] left-[1740px] h-[1270px]" alt=""/>
        <div className="p1 w-[90%] m-auto">
          {/* <Image src="/1.png" width={100} height={100} alt="" className=" absolute top-[576%] h-[1596px]"/> */}
          <div className='flex justify-center items-center'>
          </div>
          <div className="head">
            <Image width="135" height="135" src="/logo.jpg" alt="" />
          </div>
          <div className='text-center pt-10 pb-10'>
            <h1 className="title text-4xl font-semibold">
              CASE REPORT OF {dentaDashboard.dentist.first_name.toUpperCase()}  {dentaDashboard.dentist.last_name.toUpperCase() } 
              {/* <br/> {month} {day}, {year} */}
            </h1>
          </div>
          <div className='flex justify-center items-center mt-3 cursor-pointer'>
          </div>
          <div className="pb-10 ">
            <Table className="w-full bg-white">
              <TableHeader className='border-black border-2'>
                <TableRow>
                  {/* <TableHead>Patient Id</TableHead> */}
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-black border-2'>
                  <TableRow>
                    {/* <TableCell className="bg-white">{patient.checkup_id}</TableCell> */}
                    <TableCell className="bg-white">{dentaReport.data.member.full_name}</TableCell>
                    <TableCell className="bg-white">{dentaReport.data.member.age}</TableCell>
                    <TableCell className="bg-white">{dentaReport.data.member.gender}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="pAdd">
            <h2 className='text-[#00b7ad]'>Patient&apos;s Address:</h2>
            <p>24 Commerce St 1100 Newark NJ 071020000, NEWARK NJ 07102</p>
          </div>
          {dentaReport.data.diagonsis.diagnosisTreatment.opg && dentaReport.data.diagonsis.diagnosisTreatment.opg.length > 0 &&
            (
              <div className="table2 pb-10">
                <h2 className=" my-[10px] text-[#00b7ad]">Case history</h2>
                <table className="w-full">
                  <thead className="TableHeaderead2">
                    <tr>
                      <th className="bg-[#d34a4a]">
                        Presenting Complaints
                      </th>
                      <th className="bg-[#608e60]">
                        Medical History
                      </th>
                      <th className="bg-[#814881]">
                        Allergies/ Medications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {dentaReport.data.diagonsis.diagnosisTreatment.opg.map((opgArray: any) => {
                    opgArray.complaint.map((c: any, index: number) => 
                    (
                        <tr key={index}>
                          <td className="bg-white">{c}</td>
                          <td className="font-extrabold bg-white">None</td>
                          <td className="font-extrabold bg-white">None</td>
                        </tr>
                      )
                  )
                  })}
                  </tbody>
                </table>
              </div>
            )}
          <div className="opg">
            <h2 className='text-[#00b7ad]'>X-ray Analysis: #</h2>
            <p className="ml-[5px] text-[20px]">
              ( for TableHeadere case of OPGs, bitewing)
            </p>
          </div>
          <div className="">
            <h3 className="my-[20px] font-bold">1) OPG</h3>
            <Table className="w-full">
              <TableHeader className='border-black border-2'>
                <TableRow>
                  <TableHead>Tooth#</TableHead>
                  <TableHead>Existing procedures</TableHead>
                  <TableHead>Pathological Findings</TableHead>
                  <TableHead className="border-b-0">Dr. Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-black border-2'>
                {dentaReport.data.diagonsis.XrayAnalysis.length > 0 && dentaReport.data.diagonsis.XrayAnalysis.map((xray:any,xrayIndex:any)=>(
                    xray.analysis.map((tooth:any,index:any)=>{
                      return(
                              <TableRow key={`${index}${xrayIndex}`}>
                                <TableCell className='bg-white'>{tooth.teeth[0]}</TableCell>
                                <TableCell className='bg-white'>None</TableCell>
                                <TableCell className='bg-white'>{tooth.diagnosis[0]}</TableCell>
                                <TableCell className='bg-white'>None</TableCell>
                              </TableRow>
                          )
                        })
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center mt-[80px]">
            <Image src={`http://103.217.176.51:8000/${dentaReport.data.images[0]}`} alt="" width={100} height={100} className=" w-[1000px] h-[580px]"/>
          </div>
        </div>
        <div className="bdrbtm"></div>


        {/* Second page */}

        <div className="p2 w-[90%] m-auto">
          <div className="table3">
            <h3 className=" my-[10px]">2) Bitewing</h3>
            <Table className="w-full">
              <TableHeader className='border-black border-2'>
                <TableRow>
                  <TableHead>Tooth#</TableHead>
                  <TableHead>Existing procedures</TableHead>
                  <TableHead>Pathological Findings</TableHead>
                  <TableHead className="border-b-0">Dr. Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-black border-2'>
                {dentaReport.data.diagonsis.XrayAnalysis.map((xray:any,xrayIndex:any)=>(
                    xray.analysis.map((tooth:any,index:any)=>{
                      return(
                              <TableRow key={`${index}${xrayIndex}`}>
                                <TableCell className='bg-white'>{tooth.teeth[0]}</TableCell>
                                <TableCell className='bg-white'>None</TableCell>
                                <TableCell className='bg-white'>{tooth.diagnosis[0]}</TableCell>
                                <TableCell className='bg-white'>None</TableCell>
                              </TableRow>
                          )
                        })
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center mt-[80px]">
            <Image src={`http://103.217.176.51:8000/${dentaReport.data.images[0]}`} alt="" width={100} height={100} className=" w-[1000px] h-[580px]"/>
          </div>
        </div>

        {/*  page 3 Mouth Analysis */}
          {dentaReport.data.diagonsis.MouthAnalysis.length > 1 && (
            ( 
              <>
            <div className="bdrbtm"></div>
            <img src="https://res.cloudinary.com/dpzlhahzg/image/upload/v1714400921/0_da9f7b.png" alt="" width="47%" className="relative left-[979px] h-[100px]"/>
            <div className="p3 width-[90%] m-auto" >
              <img src="https://res.cloudinary.com/dpzlhahzg/image/upload/v1714401131/3_j1eddm.webp" width={100} height={100} alt="" className="absolute left-[1748px] top-[-19px] h-[1540px]"/>
                <div className="table3">
                  <h3 className="my-[10px] text-[#21b9c6] font-medium text-base">Mouth Image Analysis:</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Row#</th>
                        <th>Existing procedures</th>
                        <th>Pathological Findings</th>
                        <th className="border-b-0">Dr. Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Filling</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td className="bg-white">2</td>
                        <td className="bg-white">RTC</td>
                        <td className="bg-white">-</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>-</td>
                        <td>Decay</td>
                      </tr>
                      <tr>
                        <td className="bg-white">4</td>
                        <td className="bg-white">-</td>
                        <td className="bg-white">Decay</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>

          <img width={100} height={100} className="w-full h-[400px] relative;" src="https://res.cloudinary.com/dpzlhahzg/image/upload/v1714400444/down-img_t1xrda.png" alt=""/>
          </>
          )
          )}
      </div>
    );
  };