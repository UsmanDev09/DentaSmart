// import React, { useState } from 'react'
// import { Onedoc } from "@onedoc/client";
// import { compile } from "@onedoc/react-print";
// import fs from "fs";
// import Image from 'next/image';
// import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Button } from '@/components/ui/button';



// const ONEDOC_API_KEY = "fdcb40ff-b920-488f-9c09-eeff9218d149"; // replace with your api key



export default async function PDFTemplate() {
  return (
    <></>
    // <div className="bg-white">
//       <img src="/0.png" alt="" width="47%" className="relative left-[979px] h-[100px]"/>
//       <Image src="/3.png" width={100} height={100} className=" absolute top-[100px] left-[1748px] h-[1270px]" alt=""/>
//       <div className="p1">
//         <Image src="/1.png" width={100} height={100} alt="" className=" absolute top-[576%] h-[1596px]"/>
//         <div className='flex justify-center items-center'>
//         </div>
//         <div className="head">
//           <Image width="135" height="135" src="/logo.jpg" alt="" />
//         </div>
//         <div>
//           <h1 className="title text-4xl font-semibold">
//             {/* CASE REPORT OF {dentaDashboard.dentist.first_name.toUpperCase()}  {dentaDashboard.dentist.last_name.toUpperCase() } 
//             <br/> {month} {day}, {year} */}
//           </h1>
//         </div>
//         <div className='flex justify-center items-center mt-3 cursor-pointer'>
//           {/* <form action={savePdf}> */}
//             {/* <Button onClick={savePdf} className=' cursor-pointer'>Download Report</Button> */}
//           {/* </form> */}
//         </div>
//         <div className="table1 ">
//           <Table className="w-full bg-white">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Patient Id</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Gender</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//             {/* {patientsWithDentist.map((patient: any) => {
//               return (
//                 <TableRow key={patient.checkup_id}>
//                   <TableCell className="bg-white">{patient.checkup_id}</TableCell>
//                   <TableCell className="bg-white">{patient.member_name}</TableCell>
//                   <TableCell className="bg-white">{patient.status}</TableCell>
//                   <TableCell className="bg-white">{patient.gender}</TableCell>
//                 </TableRow>
//               );
//             })} */}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="pAdd">
//           <h2>Patient&apos;s Address:</h2>
//           <p>24 Commerce St 1100 Newark NJ 071020000, NEWARK NJ 07102</p>
//         </div>
//         <div className="table2">
//           <h2 className=" my-[10px]">Chat history</h2>
//           <table className="w-full">
//             <thead className="TableHeaderead2">
//               <tr>
//                 <th className="bg-[rgb(211, 74, 74)]">
//                   Presenting Complaints
//                 </th>
//                 <th className="bg-[rgb(96, 142, 96)]">
//                   Medical History
//                 </th>
//                 <th className="bg-[(129, 72, 129)]">
//                   Allergies/ Medications
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//             {/* {dentaReport.data.complaints.map((complaint:any, index:number)=>{
//               return(
//                 <tr key={index}>
//                   <td className="bg-white">{complaint}</td>
//                   <td className="font-extrabold bg-white">None</td>
//                   <td className="font-extrabold bg-white">None</td>
//               </tr>
//             )
//             })} */}
//             </tbody>
//           </table>
//         </div>
//         <div className="opg">
//           <h2>X-ray Analysis: #</h2>
//           <p className="ml-[5px] text-[20px]">
//             ( for TableHeadere case of OPGs, bitewing)
//           </p>
//         </div>
//         <div className="table3">
//           <h3 className="my-[20px]">1) OPG</h3>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th>Tooth#</th>
//                 <th>Existing procedures</th>
//                 <th>Pathological Findings</th>
//                 <th className="border-b-0">Dr. Notes</th>
//               </tr>
//             </thead>
//             {/* <TableBody> */}
//             {/* {dentaReport.data.diagonsis.predictions.map((predictions:any,index:any)=>{
//               return(
//                   <tbody key={index}> */}
//                     {/* <TableRow key={index}>
//                     <TableCell className='bg-white'>{index + 1}</TableCell>
//                     </TableRow> */}
//                     {/* {predictions.metadata.modelClasses.tooth_numbering.map((tooth:any,index:any)=>{
//                       return(
//                       <tr key={index}>
//                         <td className='bg-white'>{tooth}</td>
//                         <td className='bg-white'>Filling</td>
//                         <td className='bg-white'>Impaction</td>
//                       </tr>)
//                     })}
//               </tbody>)
//             })} */}
//               {/* <TableRow>
//                 <TableCell>1</TableCell>
//                 <TableCell>02</TableCell>
//                 <TableCell>Filling</TableCell>
//                 <TableCell>Impaction</TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell>2</TableCell>
//                 <TableCell>03</TableCell>
//                 <TableCell>Filling</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell>3</TableCell>
//                 <TableCell>16</TableCell>
//                 <TableCell>-</TableCell>
//                 <TableCell>Impaction</TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell>4</TableCell>
//                 <TableCell>17</TableCell>
//                 <TableCell></TableCell>
//                 <TableCell>Impaction</TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell>4</TableCell>
//                 <TableCell>19</TableCell>
//                 <TableCell>Filling</TableCell>
//                 <TableCell></TableCell>
//               </TableRow> */}
//             {/* </TableBody> */}
//           </table>
//         </div>
//         <div className="flex justify-center mt-[80px]">
//           {/* <Image src={`http://103.217.176.51:8000/${dentaReport.data.images[0]}`} alt="" width={100} height={100} className=" w-[1000px] h-[580px]"/> */}
//         </div>
//       </div>
//       <img width={100} height={100} className="w-full h-[400px] relative;" src="/down-img.png" alt=""/>
//       <div className="bdrbtm"></div>
//       <div className="p2">
//         <div className="table3">
//           <h3 className=" my-[10px]">2) Bitewing</h3>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th>Row#</th>
//                 <th>Existing procedures</th>
//                 <th>Pathological Findings</th>
//                 <th className="border-b-0">Dr. Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Filling</td>
//                 <td>-</td>
//               </tr>
//               <tr>
//                 <td className="bg-white">2</td>
//                 <td className="bg-white">RTC</td>
//                 <td className="bg-white">-</td>
//               </tr>
//               <tr>
//                 <td className="bg-white">3</td>
//                 <td className="bg-white">Filling</td>
//                 <td className="bg-white"></td>
//               </tr>
//               <tr>
//                 <td className="bg-white">4</td>
//                 <td className="bg-white">Filling</td>
//                 <td className="bg-white"></td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>-</td>
//                 <td>Carles</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="img2">
//           {/* <Image src={`http://103.217.176.51:8000/${dentaReport.data.images[1]}`} alt="" width="900" height="900" /> */}
//         </div>
//       </div>
//       <div className="bdrbtm"></div>
//       <img src="/0.png" alt="" width="47%" className="relative left-[979px] h-[100px]"/>
//       <div className="p3 relative" >
        
//         <img src="/3.png" width={100} height={100} alt="" className="absolute left-[1748px] top-[-19px] h-[1540px]"/>
//         <div className="table3">
//           <h3 className="my-[10px] text-[#21b9c6] font-medium text-base">Mouth Image Analysis:</h3>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th>Row#</th>
//                 <th>Existing procedures</th>
//                 <th>Pathological Findings</th>
//                 <th className="border-b-0">Dr. Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Filling</td>
//                 <td>-</td>
//               </tr>
//               <tr>
//                 <td className="bg-white">2</td>
//                 <td className="bg-white">RTC</td>
//                 <td className="bg-white">-</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>-</td>
//                 <td>Decay</td>
//               </tr>
//               <tr>
//                 <td className="bg-white">4</td>
//                 <td className="bg-white">-</td>
//                 <td className="bg-white">Decay</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="img2">
//           {/* <Image src={`http://103.217.176.51:8000/${dentaReport.data.images[2]}`} alt="" width="900" height="400" /> */}
//         </div>
//         <div className="pAdd">
//           <h2 className="text-xl">Overall Health:</h2>
//           {/* <p>{dentaReport.data.diagonsis.overall_health}%</p> */}
//         </div>
//         <div className="pAdd">
//           <h2 className="text-xl">Cause:</h2>
//           <p>Demineralization of tooth enamel and dentin.</p>
//         </div>
//         <div className="pAdd">
//           <h2 className="text-xl">Mechanism:</h2>
//           <p>
//             Caused by acids produced by bacteria in plaque, leading to tooth
//             decay.
//           </p>
//         </div>
//         <h2 className="text-xl">Provisional Diagnosis/ Differential Diagnosis:</h2>
//         <div className="table4">
//           <h3 className="my-[10px] text-xl font-semibold">Diagnosis</h3>
//           <Table>
//             <TableBody>
//               {/* {dentaReport.data.diagonsis.diagnosisTreatment.map((diagonsis:any,index:any)=>{
//                 return(
//                   <TableRow key={index}>
//                     <TableCell className='bg-white'>{diagonsis.Diagnosis}</TableCell>
//                     <TableCell className="longBody bg-white">
//                       Inflammation of the dental pulp (innermost part of the tooth
//                       containing dental nerve). Inflammation is mild and tooth pulp is
//                       healthery enough to save.
//                     </TableCell> 
//                   </TableRow>
//                 )
//               })} */}
//               {/* <TableRow>
//                 <TableCell>Reversible Pulpitis</TableCell>
//                 <TableCell className="longBody">
//                   Inflammation of the dental pulp (innermost part of the tooth
//                   containing dental nerve). Inflammation is mild and tooth pulp is
//                   healthery enough to save.
//                 </TableCell>
//               </TableRow> */}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="opts">
//           <h2 className="text-xl">Treatment Options</h2>
//           {/* <ul> */}
//           {/* {dentaReport.data.diagonsis.diagnosisTreatment.map((treatments:any, index:any)=>
//           {
//             return(
//                   <div key={index}>{treatments.TreatmentOptions.map((options:any, index:number)=>{
//                     return <li className="list-disc ml-5 my-5 text-base" key={index}>{options}</li>
//                   })}
//                   </div>
//           )})}
//           </ul> */}
//         </div>
//       </div>
//       <img className="w-full h-[300px]" width={100} height={100} src="/down-img.png" alt=""/>
//       <div className="bdrbtm"></div>
//       <div className="p4">
//         <div className="table5">
//           <Table className="treatments">
//             <TableHeader className="bg-[#21b9c6]">
//               <TableRow className="text-white font-bold">
//                 <TableHead
//                   className="treatments text-center px-[15px]"
//                 >
//                   Criteria
//                 </TableHead>
//                 <TableHead
//                   className="treatments treatments text-center px-[15px]"
//                 >
//                   Root Canal Treatment
//                 </TableHead>
//                 <TableHead
//                   className="treatments treatments text-center px-[15px]"
//                 >
//                   Extraction
//                 </TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow className="bg-[#c6f6fa]">
//                 <TableCell className="treatments font-extrabold" >Objective</TableCell>
//                 <TableCell className="treatments">
//                   To save and restore TableHeadere natural tooTableHeader
//                 </TableCell>
//                 <TableCell className="treatments">To remove TableHeadere tooTableHeader entirely</TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell className="treatments font-extrabold" >
//                   To remove TableHeadere tooTableHeader entirely
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">- Preserves natural tooTableHeader</p>
//                   <p className="text-[20px]">
//                     - Maintains natural bite and jaw structure
//                   </p>
//                   <p className="text-[20px]">- AesTableHeaderetically pleasing</p>
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">
//                     - Permanently removes TableHeadere source of pain or infection
//                   </p>
//                   <p className="text-[20px]">
//                     - Less expensive in TableHeadere short term
//                   </p>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow className="bg-[#c6f6fa]">
//                 <TableCell className="treatments font-extrabold">
//                   Disadvantages
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">- Can be more expensive</p>
//                   <p className="text-[20px]">
//                     - Procedure can be more complex and time-consuming
//                   </p>
//                   <p className="text-[20px]">- Possibility of re-infection</p>
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">- Loss of natural toot</p>
//                   <p className="text-[20px]">
//                     - Potential for shifting of adjacent teeTableHeader
//                   </p>
//                   <p className="text-[20px]">
//                     - May need a dental implant or bridge for replacement, which
//                     can be costly
//                   </p>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell className="treatments font-extrabold">
//                   Recovery Time
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">
//                     - Varies, but generally quick recovery from TableHeadere procedure
//                     itself
//                   </p>
//                   <p className="text-[20px]">
//                     - TableHeadere tooTableHeader may need furTableHeaderer restoration work
//                   </p>
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Quick, but healing from extraction takes time, and
//                   replacement (if opted for) adds to TableHeadere timeline
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow className="bg-[#c6f6fa]">
//                 <TableCell className="treatments font-extrabold">
//                   Success Rate
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - High, wiTableHeader proper care and under ideal conditions, a root
//                   canal can last a lifetime
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Guaranteed removal of problematic tooTableHeader, but introduces TableHeadere
//                   need for replacement options
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell className="treatments font-extrabold" >
//                   Pain and Discomfort
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Minimal to moderate during recovery; managed wiTableHeader medication
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Can be significant immediately after extraction; managed
//                   wiTableHeader medication
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow className="bg-[#c6f6fa]">
//                 <TableCell className="treatments font-extrabold">
//                   Long-term Considerations
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">
//                     - Requires good oral hygiene to prevent future issues
//                   </p>
//                   <p className="text-[20px]">
//                     - May need a crown for protection
//                   </p>
//                 </TableCell>
//                 <TableCell className="treatments">
//                   <p className="text-[20px]">
//                     - May require additional procedures for tooTableHeader replacement
//                   </p>
//                   <p className="text-[20px]">
//                     - Possible jawbone deterioration over time wiTableHeaderout
//                     replacement
//                   </p>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody>
//               <TableRow>
//                 <TableCell className="treatments font-extrabold">
//                   Aesetic Outcome
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Tooth is preserved, maintaining a natural appearance
//                 </TableCell>
//                 <TableCell className="treatments">
//                   - Potential gap unless replaced with an implant or bridge
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//         <div className="risk">
//           <h2 className="text-xl">Risk Factors:</h2>
//           <ul>
//             <li className="risks list-disc ">Poor oral hygiene</li>
//             <li className="risks list-disc">High sugar diet.</li>
//             <li className="risks list-disc">Infrequent dental visits.</li>
//             <li className="risks list-disc">Lack of fluoride exposure.</li>
//           </ul>
//         </div>
//         <div className="risk">
//           <h2 className="text-xl">Preventions:</h2>
//           <p className="text-black text-[18px]">
//             Reversible pulpitis is not only treatable but also preventable
//           </p>
//           <ul className="list-disc">
//             <li className="preventions">Maintain good oral hygiene</li>
//             <li className="preventions">See a dentist regularly</li>
//             <li className="preventions">
//               Seek immediate attention for tooth pain or sensitivity
//             </li>
//             <li className="preventions">Brush teeth twice daily</li>
//             <li className="preventions">Floss daily</li>
//             <li className="preventions">Limit or avoid sugary foods</li>
//           </ul>
//         </div>
//       </div>

//       <div className="p5 relative">
//         <Image src="/1.png" width={100} height={100} alt="" className="absolute top-[-75%] z-50 h-[1202px]"/>

//         <div className="risk">
//           <h2 className="text-xl">Consequences/Risks</h2>
//           <ul className="risks list-disc text-[20px]">
//           {/* {dentaReport.data.diagonsis.diagnosisTreatment.map((treatments:any, index:any)=>
//           {
//             return(
//                 <div key={index}>{treatments.Risks.map((risk:any, index:number)=>{
//                   return <li className="my-3 text-base" key={index}>{risk}</li>
//                 })}
//                 </div>
//           )})} */}
//             {/* <li className="consequences">
//               <span className="optHead">Progression of Decay:</span>
//               Treatment, dental caries can progress deeper into the
//               tooth, affecting the dentin and potentially reaching thee pulp,
//               leading to more severe pain and sensitivity.
//             </li>
//             <li className="consequences">
//               <span className="optHead">Infection:</span>
//               Advanced decay can lead to an infection in the tooth pulp, causing
//               an abscess (a pusfilled pocket). TableHeaderis can result in severe pain,
//               swelling, and can spread to other parts of the body.
//             </li>
//             <li className="consequences">
//               <span className="optHead">Tooth Loss:</span>
//               Continued decay and structural damage to TableHeadere tooTableHeader may make it
//               impossible to save, leading to TableHeadere need for extraction. Losing
//               teeTableHeader can affect your ability to chew and TableHeadere alignment of
//               remaining teeTableHeader.
//             </li>
//             <li className="consequences">
//               <span className="optHead">Chewing and Digestion Problems:</span>
//               Damaged or lost teeTableHeader can make it difficult to chew food properly,
//               which may impact digestion
//             </li>
//             <li className="consequences">
//               <span className="optHead">Impact on Nutrition:</span>
//               Pain and difficulty in chewing may lead to avoidance of certain
//               foods, potentially resulting in nutritional deficiencies.
//             </li>
//             <li className="consequences">
//               <span className="optHead">Spread of Infection:</span>
//               If an abscess or infection is not treated, it can spread to oTableHeaderer
//               areas of TableHeadere body, leading to serious healTableHeader complications like
//               sepsis, a life-TableHeaderreatening condition.
//             </li>
//             <li className="consequences">
//               <span className="optHead">Increased Treatment Costs:</span>
//               TableHeadere more advanced TableHeadere decay, TableHeadere more complex and expensive TableHeadere
//               required treatments become, ranging from fillings and crowns to
//               root canals and extractions
//             </li>
//             <li className="consequences">
//               <span className="optHead">Cosmetic Issues:</span>
//               Visible decay, discoloration, or tooTableHeader loss can affect TableHeadere
//               appearance of your smile, which may impact self-esteem and social
//               interactions.
//             </li> */}
//           </ul>
//           {/* <p className="text-[20px] ml-[50px]">
//             Preventive care, early detection, and treatment are crucial in
//             managing dental caries and avoiding these potential complications.
//           </p> */}
//         </div>
//         <div className="conclusion">
//           <h2 className="text-xl">Conclusion (Dr&apos;s Notes):</h2>
//           <p className="text-[20px]">
//             The report illustrates a typical approach to managing a case of a
//             tooth with reversible pulpitis by recommending clinical guidelines
//             and all possible interventions for treating tooth the
//             available basic scientific knowledge and treatment systems.
//           </p>
//         </div>
//       </div>
//       <img width={100} height={100} className="relative w-full h-[299px] top-[270px]" src="/down-img.png" alt=""/>
    // </div>
  );
};

// (async () => {
//     const onedoc = new Onedoc(ONEDOC_API_KEY);
  
//     let doc = {
//       html: await compile(<PDFTemplate name="Bruce Wayne" />),
//       title: "Hello",
//       test: false, // if true, produce a PDF in test mode with a Onedoc's watermark
//       save: false, // if true, host the document and provide a download link in the console and your Onedoc's dashboard
//       expiresIn: 30, // the number of day you want to host your document
//       assets: [

//       ],
//     };
  
//     const { file, link, error, info } = await onedoc.render(doc);
//     console.log(file, link ,info)
//     // fs.writeFileSync("./invoice.pdf", Buffer.from(file));
// //     const url = window.URL.createObjectURL(new Blob([file]));
// // const linkk = document.createElement('a');
// // linkk.href = url;
// // linkk.setAttribute('download', 'yourcoolpdf.pdf');
// // document.body.appendChild(linkk);
// // linkk.click();
// // console.log(linkk)
// return new Response(Buffer.from(file), {
//   headers: {
//     "Content-Type": "application/pdf",
//   },
// });


//   })();