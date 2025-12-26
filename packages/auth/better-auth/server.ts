// import "server-only";

// export * from "@clerk/nextjs/server";
import { betterAuth } from 'better-auth';
import { nextCookies } from "better-auth/next-js";
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { database } from "@surgeteam/database";
import Database from 'better-sqlite3';

const database = new Database("database.sqlite");
const baseURL = process.env.BASE_URL || "http://localhost:3000";
export const auth = betterAuth({
  // database: prismaAdapter(database, {
  //   provider: 'postgresql',
  // }),
  database,
  baseURL,
  emailAndPassword: { 
    enabled: true, 
  },   
  plugins: [
    nextCookies()
    // organization() // if you want to use organization plugin
  ],
  //...add more options here
});