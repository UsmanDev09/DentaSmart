import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  //@ts-ignore
  let { value } = cookies().get('token');
  let request = await req.json();
  console.log('token', value)
  try {
    const response = await fetch('http://103.217.176.51:8000/v1/dentist_submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`,
      },
      body: JSON.stringify(request),
    });
    if (response.ok) { 
       const jsonResponse = await response.json();
       return NextResponse.json({ data: jsonResponse }, { status: 200 });
    } else {
        const jsonResponse = await response.json()
        console.log(jsonResponse)
       return NextResponse.json({ error: 'An error occurred while posting diagnosis treatment' },   { status: 500 });
    } 

  } catch (error) {
    if(error instanceof Error) 
        return NextResponse.json({ error: `An error occurred while posting diagnosis treatment: ${error.message}` }, { status: 500 } );
  }
}
