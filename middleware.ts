import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  if (token && url.includes("/sign-in")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    (token === undefined || token.length === 0) &&
    !url.includes("/sign-in")
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)", "/sign-in"],
};
