import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// process.env.DATABASE_URL="postgres://neondb_owner:rb89mUNTRtag@ep-lingering-water-a1gcv8n9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
export const keys = () =>
  createEnv({
    server: {
      DATABASE_URL: z.url(),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  });
