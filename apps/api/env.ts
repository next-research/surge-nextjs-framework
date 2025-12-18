import { keys as analytics } from "@surge/analytics/keys";
import { keys as auth } from "@surge/auth/keys";
import { keys as database } from "@surge/database/keys";
import { keys as email } from "@surge/email/keys";
import { keys as core } from "@surge/next-config/keys";
import { keys as observability } from "@surge/observability/keys";
import { keys as payments } from "@surge/payments/keys";
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
