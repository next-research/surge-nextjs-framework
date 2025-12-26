import { auth } from "@surgeteam/auth/server";
import { database } from "@surgeteam/database";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { env } from "@/env";
import { AvatarStack } from "./components/avatar-stack";
import { Cursors } from "./components/cursors";
import { Header } from "./components/header";

const title = "Surge Next Platform";
const description = "This is a demo app for Surge Next Platform.";

const CollaborationProvider = dynamic(() =>
  import("./components/collaboration-provider").then(
    (mod) => mod.CollaborationProvider
  )
);

export const metadata: Metadata = {
  title,
  description,
};

const App = async () => {
  const pages = await database.page.findMany();
  const { orgId } = await auth();

  if (!orgId) {
    notFound();
  }

  return (
    <>
      <Header page="Data Fetching" pages={["Building Your Application"]}>
      </Header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {pages.map((page) => (
            <div className="aspect-video rounded-xl bg-muted/50" key={page.id}>
              {page.name}
            </div>
          ))}
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default App;
