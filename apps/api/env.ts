import { keys as analytics } from "@surgeteam/analytics/keys";
import { keys as auth } from "@surgeteam/auth/keys";
import { keys as database } from "@surgeteam/database/keys";
import { keys as email } from "@surgeteam/email/keys";
import { keys as core } from "@surgeteam/next-config/keys";
import { keys as observability } from "@surgeteam/observability/keys";
import { keys as payments } from "@surgeteam/payments/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
