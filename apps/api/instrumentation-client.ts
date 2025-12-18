import { initializeAnalytics } from "@surge/analytics/instrumentation-client";
import { initializeSentry } from "@surge/observability/client";

initializeSentry();
initializeAnalytics();
