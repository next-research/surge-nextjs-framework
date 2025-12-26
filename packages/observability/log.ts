import { log as logtail } from "@logtail/next";
import * as Sentry from "@sentry/nextjs";
console.log("运行环境：", process.env.NODE_ENV);
// export const log: any = process.env.NODE_ENV === "production" ? Sentry.logger : console;
export const log: any = Sentry.logger;