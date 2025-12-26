import { auth } from "@surgeteam/auth/better-auth/server";
import { showBetaFeature } from "@surgeteam/feature-flags";
import { secure } from "@surgeteam/security";
import type { ReactNode } from "react";
import { env } from "@/env";
import { getDictionary } from "@surgeteam/internationalization";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type AppLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;  
};

const AppLayout = async ({ children, params }: AppLayoutProperties) => {
  if (env.ARCJET_KEY) {
    await secure(["CATEGORY:PREVIEW"]);
  }
  const { locale } = await params;
  const dictionary = await getDictionary(locale);


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
    <>
    <Header dictionary={dictionary} />
    {children}
    <Footer />
    </>
  );
};

export default AppLayout;
