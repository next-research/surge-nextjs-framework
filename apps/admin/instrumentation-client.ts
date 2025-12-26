import { initializeAnalytics } from "@surgeteam/analytics/instrumentation-client";
import { initializeSentry } from "@surgeteam/observability/client";

initializeSentry();
initializeAnalytics();
