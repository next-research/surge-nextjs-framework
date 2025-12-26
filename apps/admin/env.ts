import { keys as analytics } from "@surgeteam/analytics/keys";
import { keys as auth } from "@surgeteam/auth/keys";
import { keys as collaboration } from "@surgeteam/collaboration/keys";
import { keys as database } from "@surgeteam/database/keys";
import { keys as email } from "@surgeteam/email/keys";
import { keys as flags } from "@surgeteam/feature-flags/keys";
import { keys as core } from "@surgeteam/next-config/keys";
import { keys as notifications } from "@surgeteam/notifications/keys";
import { keys as observability } from "@surgeteam/observability/keys";
import { keys as security } from "@surgeteam/security/keys";
import { keys as webhooks } from "@surgeteam/webhooks/keys";
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
