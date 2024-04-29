import PDFTemplate from '@/components/PDFTemplate';
import { cookies } from 'next/headers';


// const ONEDOC_API_KEY = "fdcb40ff-b920-488f-9c09-eeff9218d149"; // replace with your api key



export default async function PDF({ searchParams }: { searchParams: any }) {
  const token = cookies().get("token");
    
  const response = await fetch(
    "http://103.217.176.51:8000/v1/dentist_dashboard",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify({ args: { checkup_type: "" } }),
    }
  );
  const dentaDashboard = await response.json();
  
  const report = await fetch(
    `http://103.217.176.51:8000/v1/dentist_checkup?checkup_id=${searchParams.checkupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  
  const dentaReport = await report.json();  
  
  const patients = dentaDashboard.checkup;
  const dentist = dentaDashboard.dentist;

  return (
    <PDFTemplate dentaDashboard={dentaDashboard} dentaReport={dentaReport} />
  )
};

// (async () => {
//   const onedoc = new Onedoc(ONEDOC_API_KEY);

//   let doc = {
//     html: await compile(<PDFTemplate />),
//     title: "Hello",
//     test: false, // if true, produce a PDF in test mode with a Onedoc's watermark
//     save: false, // if true, host the document and provide a download link in the console and your Onedoc's dashboard
//     expiresIn: 30, // the number of day you want to host your document
//     assets: [

//     ],
//   };

//   const { file, link, error, info } = await onedoc.render(doc);
//   console.log(file, link ,info)
//   // fs.writeFileSync("./invoice.pdf", Buffer.from(file));
// //     const url = window.URL.createObjectURL(new Blob([file]));
// // const linkk = document.createElement('a');
// // linkk.href = url;
// // linkk.setAttribute('download', 'yourcoolpdf.pdf');
// // document.body.appendChild(linkk);
// // linkk.click();
// // console.log(linkk)
//   return new Response(Buffer.from(file), {
//     headers: {
//       "Content-Type": "application/pdf",
//     },
//   });


// })();