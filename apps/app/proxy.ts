import { authMiddleware } from "@surgeteam/auth/proxy";
import { internationalizationMiddleware } from "@surgeteam/internationalization/proxy";
import { parseError } from "@surgeteam/observability/error";
import { secure } from "@surgeteam/security";
import {
  noseconeOptions,
  noseconeOptionsWithToolbar,
  securityMiddleware,
} from "@surgeteam/security/proxy";
import { createNEMO } from "@rescale/nemo";
import { type NextProxy, type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";
import { log } from "@surgeteam/observability/log";

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  // matcher: ["/((?!_next/static|_next/image|ingest|favicon.ico).*)"],
  matcher: ["/dashboard"],
};

const securityHeaders = env.FLAGS_SECRET
  ? securityMiddleware(noseconeOptionsWithToolbar)
  : securityMiddleware(noseconeOptions);

// Compose non-Clerk middleware with Nemo
const composedMiddleware = createNEMO(
  {},
  {
    before: [internationalizationMiddleware],
  }
);

// Clerk middleware wraps other middleware in its callback
export default authMiddleware(async (_auth, request, event) => {
  log.info("S中间件写入日志!!!!!");
  // Run security headers first
  const headersResponse = securityHeaders();

  // Then run composed middleware (i18n, etc)
  const middlewareResponse = await composedMiddleware(
    request as unknown as NextRequest,
    event
  );

  // Return middleware response if it exists, otherwise headers response
  return middlewareResponse || headersResponse;
}) as unknown as NextProxy;
