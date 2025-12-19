import "./styles.css";
import { AnalyticsProvider } from "@surge/analytics/provider";
import { Toolbar as CMSToolbar } from "@surge/cms/components/toolbar";
import { DesignSystemProvider } from "@surge/design-system";
import { fonts } from "@surge/design-system/lib/fonts";
import { cn } from "@surge/design-system/lib/utils";
import { Toolbar } from "@surge/feature-flags/components/toolbar";
import { getDictionary } from "@surge/internationalization";
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
