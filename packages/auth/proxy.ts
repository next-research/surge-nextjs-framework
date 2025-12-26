// export { clerkMiddleware as authMiddleware } from "@clerk/nextjs/server";

import { getSessionCookie } from "better-auth/cookies";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Negotiator from "negotiator";
export function authMiddleware(
  middlewareFn?: (
    _auth: { req: NextRequest; authorized: boolean },
    request: NextRequest,
    event: NextFetchEvent,
  ) => Promise<Response> | Response,
) {
  return async function middleware(request: NextRequest, event: NextFetchEvent) {
    if (request.nextUrl.pathname.startsWith('/zh/sign-in') || request.nextUrl.pathname.startsWith('/zh/sign-up')) {
      return NextResponse.next();
    }

    const sessionCookie = getSessionCookie(request);
    const authorized = Boolean(sessionCookie);
    if (middlewareFn) {
      const response = await middlewareFn(
        { req: request, authorized },
        request,
        event
      );
      if (response && response.headers.get("Location")) {
        return response;
      }
    }
    if (!sessionCookie) {
      const headers = Object.fromEntries(request.headers.entries());
      return NextResponse.redirect(new URL(`/${headers["x-next-locale"]}/sign-in`, request.url));
    }
    return NextResponse.next();
  };
}