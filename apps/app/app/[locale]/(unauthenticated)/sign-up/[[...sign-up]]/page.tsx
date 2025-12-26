import { createMetadata } from "@surgeteam/seo/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const title = "Create an account";
const description = "Enter your details to get started.";
const SignUp = dynamic(() =>
  import("@surgeteam/design-system/components/biz/sign-up").then((mod) => mod.default)
);

export const metadata: Metadata = createMetadata({ title, description });

const SignUpPage = () => <SignUp />;

export default SignUpPage;
