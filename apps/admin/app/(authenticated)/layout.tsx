import { auth } from "@surgeteam/auth/server";
import { SidebarProvider } from "@surgeteam/design-system/components/ui/sidebar";
import { showBetaFeature } from "@surgeteam/feature-flags";
import { secure } from "@surgeteam/security";
import type { ReactNode } from "react";
import { env } from "@/env";
import { NotificationsProvider } from "./components/notifications-provider";
import { GlobalSidebar } from "./components/sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProperties) => {
  if (env.ARCJET_KEY) {
    await secure(["CATEGORY:PREVIEW"]);
  }

  // const user = await currentUser();
  // const { redirectToSignIn } = await auth();
  const session = await auth.api.getSession({
    headers: await headers(), // from next/headers
  });
  if (!session?.user) {
    return redirect('/sign-in'); // from next/navigation
  }

  const betaFeature = await showBetaFeature();

  // if (!user) {
  //   return redirectToSignIn();
  // }

  return (
    <NotificationsProvider userId={session.user.id}>
      <SidebarProvider>
        <GlobalSidebar>
          {betaFeature && (
            <div className="m-4 rounded-full bg-blue-500 p-1.5 text-center text-sm text-white">
              Beta feature now available
            </div>
          )}
          {children}
        </GlobalSidebar>
      </SidebarProvider>
    </NotificationsProvider>
  );
};

export default AppLayout;
