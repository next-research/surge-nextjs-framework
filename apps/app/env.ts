import { keys as analytics } from "@surge/analytics/keys";
import { keys as auth } from "@surge/auth/keys";
import { keys as collaboration } from "@surge/collaboration/keys";
import { keys as database } from "@surge/database/keys";
import { keys as email } from "@surge/email/keys";
import { keys as flags } from "@surge/feature-flags/keys";
import { keys as core } from "@surge/next-config/keys";
import { keys as notifications } from "@surge/notifications/keys";
import { keys as observability } from "@surge/observability/keys";
import { keys as security } from "@surge/security/keys";
import { keys as webhooks } from "@surge/webhooks/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    collaboration(),
    core(),
    database(),
    email(),
    flags(),
    notifications(),
    observability(),
    security(),
    webhooks(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
