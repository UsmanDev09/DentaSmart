import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  if (token && url.includes("/sign-in")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log(req.nextUrl.pathname)
  
  if (
    (token === undefined) &&
    !req.nextUrl.pathname.startsWith("/sign-in")
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};