import { auth, currentUser } from "@surge/auth/server";
import { showBetaFeature } from "@surge/feature-flags";
import { secure } from "@surge/security";
import type { ReactNode } from "react";
import { env } from "@/env";
import { getDictionary } from "@surge/internationalization";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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


  const user = await currentUser();
  const { redirectToSignIn } = await auth();
  const betaFeature = await showBetaFeature();

  if (!user) {
    return redirectToSignIn();
  }

  return (
    <>
    <Header dictionary={dictionary} />
    {children}
    <Footer />
    </>
  );
};

export default AppLayout;
