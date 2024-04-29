import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { compile } from "@onedoc/react-print";
import { Receipt } from "@/app/documents/Receipt";
import { Onedoc } from "@onedoc/client";

const onedoc = new Onedoc("fdcb40ff-b920-488f-9c09-eeff9218d149");
const ONEDOC_API_KEY = "fdcb40ff-b920-488f-9c09-eeff9218d149"; // replace with your api key

export const GET = async () => {
    const receipt = {
        id: 1,
        date: "2021-01-01",
        total: 100,
      };
    
      const { file, error } = await onedoc.render({
        html: await compile(Receipt(receipt)),
      });
    

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pdfBuffer = Buffer.from(file);

  // Return the PDF
  return new Response("", {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};