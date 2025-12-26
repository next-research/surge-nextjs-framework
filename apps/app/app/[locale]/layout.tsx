import "./styles.css";
import { AnalyticsProvider } from "@surgeteam/analytics/provider";
import { Toolbar as CMSToolbar } from "@surgeteam/cms/components/toolbar";
import { DesignSystemProvider } from "@surgeteam/design-system";
import { fonts } from "@surgeteam/design-system/lib/fonts";
import { cn } from "@surgeteam/design-system/lib/utils";
import { Toolbar } from "@surgeteam/feature-flags/components/toolbar";
import { getDictionary } from "@surgeteam/internationalization";
import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      className={cn(fonts, "scroll-smooth")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AnalyticsProvider>
          <DesignSystemProvider>
            {children}
          </DesignSystemProvider>
          <Toolbar />
          <CMSToolbar />
        </AnalyticsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
