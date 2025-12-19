import { showBetaFeature } from "@surge/feature-flags";
import { getDictionary } from "@surge/internationalization";
import { createMetadata } from "@surge/seo/metadata";
import type { Metadata } from "next";
import { Cases } from "./components/cases";
import { CTA } from "./components/cta";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: HomeProps): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return createMetadata(dictionary.web.home.meta);
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const betaFeature = await showBetaFeature();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-black py-2 text-center text-white">
          Beta feature now available
        </div>
      )}
      <h1>Content</h1>
    </>
  );
};

export default Home;
