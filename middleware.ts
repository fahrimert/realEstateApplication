import type { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/lib";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest, res: NextResponse) {
  const session = cookies().get("session")?.value;

  /* şöyle bi mantık olması lazım  */

  if (!session && !request.nextUrl.pathname.startsWith("/AuthAdmin") && request.nextUrl.pathname.startsWith("/admin") ) {
  return Response.redirect(new URL("/AuthAdmin", request.url));
} 
   if (session && request.nextUrl.pathname.startsWith("/AuthAdmin")) {
    return Response.error()
   }


   
return await updateSession(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
