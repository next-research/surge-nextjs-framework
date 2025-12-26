import { createMetadata } from "@surgeteam/seo/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const title = "Welcome back";
const description = "Enter your details to sign in.";
const SignIn = dynamic(() =>
  import("@surgeteam/design-system/components/biz/sign-in").then((mod) => mod.default)
);

export const metadata: Metadata = createMetadata({ title, description });

const SignInPage = () => <SignIn />;

export default SignInPage;
