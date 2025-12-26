import { withToolbar } from "@surgeteam/feature-flags/lib/toolbar";
import { config, withAnalyzer } from "@surgeteam/next-config";
import { withLogging, withSentry } from "@surgeteam/observability/next-config";
import type { NextConfig } from "next";
import { env } from "@/env";

let nextConfig: NextConfig = withToolbar(withLogging(config));

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
